require('dotenv').config(); // Carrega variáveis de ambiente para proteger as chaves
const fs = require('fs'); // Para salvar as legendas em um arquivo local

async function generateAudioAndUpload() {
    // URL da API incluindo o voice_id
    const url = 'https://api.elevenlabs.io/v1/text-to-speech/nPczCjzI2devNBz1zQrb/with-timestamps';

    // Cabeçalhos da requisição
    const headers = {
        'Content-Type': 'application/json',
        'xi-api-key': process.env.ELEVENLABS_API_KEY, // Protegendo a API key com variáveis de ambiente
    };

    // Dados para a geração do áudio
    const data = {
        text: `A Gaia Ciência, de Friedrich Nietzsche, publicada em 1882, é uma das obras mais instigantes da filosofia moderna. O título, inspirado na poesia medieval, propõe uma "ciência alegre", que celebra a vida e desafia certezas dogmáticas. No contexto de mudanças culturais e do avanço da ciência, Nietzsche questiona valores tradicionais e nos convida a abraçar a dúvida e a criatividade.

              Uma das ideias centrais do livro é a famosa frase: "Deus está morto". Aqui, Nietzsche não declara a morte de uma entidade divina, mas critica a perda de sentido dos valores religiosos na modernidade. Sem esses valores absolutos, surge o desafio de criar novos significados. Ele propõe viver com coragem, aceitando a incerteza como parte essencial da vida.

              Entre os conceitos centrais, destacam-se o Eterno Retorno, a ideia de que devemos viver cada momento como se ele fosse eterno; o Amor Fati, o amor ao destino, que implica aceitar a vida com todas as suas imperfeições; e o Espírito Livre, que busca romper com as tradições e explorar novos caminhos. Esses conceitos formam a base de uma filosofia que celebra a transformação e rejeita o niilismo.

              Apesar de sua profundidade, A Gaia Ciência é frequentemente mal interpretada. Nietzsche não é niilista; ao contrário, ele busca alternativas ao vazio deixado pela perda de valores tradicionais. Ele também não rejeita a ciência, mas critica uma visão limitada e mecanicista, defendendo uma abordagem que una imaginação e paixão pela vida.

              O impacto da obra é evidente até hoje. Em um mundo marcado por crises existenciais e rápidas mudanças, o convite de Nietzsche para reavaliar valores é extremamente atual. Suas ideias influenciam áreas como ética, literatura e psicologia, além de inspirar pensadores como Albert Camus e Jean-Paul Sartre.

              No entanto, desafios permanecem. Sua filosofia exige coragem para criar significado em um mundo fragmentado. E distorções históricas, como sua apropriação pelo nazismo, obscureceram sua mensagem original.

              Em resumo, A Gaia Ciência não é apenas um texto filosófico, mas um convite à transformação pessoal e coletiva. Nietzsche nos desafia a celebrar a vida em sua totalidade e a construir novos valores que reflitam nossa humanidade. Para aprofundar, recomendo a leitura integral da obra e diálogos filosóficos com pensadores como Schopenhauer e Heidegger.

              Que esse convite inspire você a abraçar as incertezas da vida com coragem e criatividade..`,
        model_id: 'eleven_turbo_v2', // Modelo compatível listado no JSON
        voice_settings: {
            stability: 0.5, // Configuração de estabilidade da voz
            similarity_boost: 0.75, // Ajuste da similaridade da voz
        },
    };

    try {
        console.log('🟢 Gerando áudio...');
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log('Resposta da API:', responseData);

        // Gera o arquivo de legendas usando os timestamps
        if (responseData.alignment) {
            console.log('🟢 Gerando arquivo de legendas...');
            generateSubtitles(responseData.alignment, 'output.vtt');
        }

        if (responseData.audio_base64) {
            const audioBase64 = responseData.audio_base64;
            const audioBuffer = Uint8Array.from(atob(audioBase64), c => c.charCodeAt(0));
            await uploadAudio(audioBuffer);
        } else {
            console.log('Áudio não encontrado na resposta.');
        }
    } catch (error) {
        console.error('Erro ao gerar o áudio:', error);
    }
}

// Função para upload do áudio gerado
async function uploadAudio(audioBuffer) {
    const uploadUrl = 'https://upload.heygen.com/v1/asset';

    const headers = {
        'x-api-key': process.env.HEYGEN_API_KEY, // Protegendo a API key com variáveis de ambiente
        'Content-Type': 'audio/mpeg',
    };

    const audioBlob = new Blob([audioBuffer], { type: 'audio/mpeg' });

    try {
        const response = await fetch(uploadUrl, {
            method: 'POST',
            headers: headers,
            body: audioBlob,
        });

        if (!response.ok) {
            const errorResponse = await response.text();
            throw new Error(`Falha no upload: ${response.status} - ${errorResponse}`);
        }

        const uploadResponse = await response.json();
        console.log('Áudio enviado com sucesso:', uploadResponse);

        const audioURL = uploadResponse.data.url;
        generateVideo(audioURL); // Gera o vídeo usando o áudio enviado
    } catch (error) {
        console.error('Erro ao fazer upload do áudio:', error);
    }
}

function generateSubtitles(alignment, outputFile) {
    const characters = alignment.characters.join('');
    const startTimes = alignment.character_start_times_seconds;
    const endTimes = alignment.character_end_times_seconds;

    let subtitles = 'WEBVTT\n\n'; // Cabeçalho do arquivo VTT
    let position = 0;

    // Quebra o texto em frases com base em pontuação
    const sentences = characters.split(/(?<=[.?!])/); // Divide por ponto final, exclamação ou interrogação

    sentences.forEach((sentence, index) => {
        const start = formatTimestamp(startTimes[position]);
        const end = formatTimestamp(endTimes[position + sentence.length - 1]);
        position += sentence.length;

        subtitles += `${index + 1}\n${start} --> ${end}\n${sentence.trim()}\n\n`;
    });

    // Salva o arquivo de legendas
    fs.writeFileSync(outputFile, subtitles);
    console.log(`✅ Legendas geradas: ${outputFile}`);
}

function formatTimestamp(seconds) {
    const date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 12).replace('.', ',');
}

// Função para gerar o vídeo a partir do áudio
async function generateVideo(audioURL) {
    const url = 'https://api.heygen.com/v2/video/generate';

    const headers = {
        'X-Api-Key': process.env.HEYGEN_API_KEY, // Protegendo a API key
        'Content-Type': 'application/json',
    };

    const data = {
        video_inputs: [
            {
                character: {
                    type: 'avatar',
                    avatar_id: 'Francis_in_Shirt_Front',
                    avatar_style: 'normal',
                },
                voice: {
                    type: 'audio',
                    audio_url: audioURL,
                },
                background: {
                    type: 'color',
                    color: '#00ff33',
                },
            },
        ],
        caption: false,
        dimension: {
            width: 1280,
            height: 720,
        },
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Erro na geração do vídeo: ${response.status} - ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log('Vídeo gerado com sucesso:', responseData);
    } catch (error) {
        console.error('Erro ao gerar o vídeo:', error);
    }
}

generateAudioAndUpload();
