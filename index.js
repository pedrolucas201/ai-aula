var backgroundDiv = document.getElementById("background");

var sentencas = [
  { 
    "sentenca": "Equações são sentenças matemáticas que afirmam a igualdade entre duas expressões algébricas",
    "qt": 91,
    "comecaEm": 0,
    "acabaEm": 5.735,
    "destaque": false,
    "popup": false,
    "changeImage": "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-paris-capa2019-02-820x430.jpg",
    "explicacaoDestaque": [
      {
        "alternativa": 1,
        "explicacao": "Imagine que você tem uma balança de compras. De um lado, você coloca uma quantidade de frutas (ou expressões), e do outro, você coloca outra quantidade. A equação é a ideia de que essas duas quantidades devem ser exatamente iguais para que a balança se equilibre."
      }
    ]
  },
  {
    "sentenca": "Elas contêm variáveis, que são símbolos representando valores desconhecidos, e constantes, que são valores fixos",
    "qt": 114,
    "comecaEm": 5.735,
    "acabaEm": 13.177,
    "destaque": false,
    "popup": false,
  },
  {
    "sentenca": "O objetivo principal ao trabalhar com equações é encontrar o valor ou os valores das variáveis que tornam a igualdade verdadeira",
    "qt": 130,
    "comecaEm": 13.177,
    "acabaEm": 21.699,
    "destaque": true,
    "popup": false,
    "backgroundColor": "#D1FFDD",
    "explicacaoDestaque": [
      {
        "alternativa": 1,
        "explicacao": "Resolver uma equação é como um jogo de mistério. Você recebe pistas e precisa encontrar o valor que faz todo o enigma se resolver."
      }
    ]
  },
  {
    "sentenca": "Isso é chamado de \"resolver a equação\"",
    "qt": 40,
    "comecaEm": 21.699,
    "acabaEm": 25.124,
    "destaque": false,
    "popup": false,
  },
  {
    "sentenca": "As equações podem ser lineares (grau 1), quadráticas (grau 2), cúbicas (grau 3), e assim por diante, dependendo do maior expoente da variável",
    "qt": 143,
    "comecaEm": 25.124,
    "acabaEm": 36.514,
    "destaque": false,
    "popup": false,
  },
  {
    "sentenca": "Equações lineares possuem gráficos que são retas",
    "qt": 54,
    "comecaEm": 36.514,
    "acabaEm": 40.345,
    "destaque": false,
    "popup": false,
  },
  {
    "sentenca": "Equações podem ter uma, várias ou nenhuma solução",
    "qt": 51,
    "comecaEm": 40.345,
    "acabaEm": 44.037,
    "destaque": false,
    "popup": false,
  },
  {
    "sentenca": "Operações matemáticas como adição, subtração, multiplicação e divisão são usadas para isolar a variável e determinar sua solução",
    "qt": 130,
    "comecaEm": 44.037,
    "acabaEm": 54.137,
    "destaque": false,
    "popup": false,
  },
  {
    "sentenca": "A solução é o valor que satisfaz a equação",
    "qt": 44,
    "comecaEm": 54.137,
    "acabaEm": 57.69,
    "destaque": false,
    "popup": false,
  },
  {
    "sentenca": "Em equações com mais de uma variável, pode-se expressar uma variável em função das outras",
    "qt": 91,
    "comecaEm": 57.69,
    "acabaEm": 63.913,
    "destaque": false,
    "popup": false,
  },
  {
    "sentenca": "Equações são fundamentais em diversas áreas, como física, engenharia, economia e programação, modelando relações entre grandezas",
    "qt": 130,
    "comecaEm": 63.913,
    "acabaEm": 73.653,
    "destaque": true,
    "popup": true,
    "backgroundColor": "#D1FFDD",
    "explicacaoDestaque": [
      {
        "alternativa": 1,
        "explicacao": "As equações são ferramentas que usamos para representar a realidade. Elas descrevem como diferentes variáveis, como tempo, espaço e força, se relacionam e ajudam a prever resultados em diversas situações, como no movimento de planetas ou no comportamento de mercados financeiros."
      },
      {
        "alternativa": 2,
        "explicacao": "Imagine que você está montando um quebra-cabeça. As equações são como as peças que se encaixam para formar a imagem completa. Em áreas como a física, elas ajudam a organizar os conhecimentos que temos sobre o mundo, como as leis que governam o movimento dos corpos."
      },
      {
        "alternativa": 3,
        "explicacao": "Em engenharia, as equações ajudam a planejar e calcular a construção de pontes, prédios e máquinas, levando em conta diversas variáveis. Por exemplo, elas permitem calcular o quanto um material pode suportar sem quebrar, garantindo a segurança da construção."
      },
      {
        "alternativa": 4,
        "explicacao": "As equações funcionam como uma linguagem universal. Por exemplo, em programação, elas são usadas para criar algoritmos que ajudam a resolver problemas de forma eficiente, como otimizar a distribuição de recursos em uma empresa ou prever o tráfego de um site."
      },
      {
        "alternativa": 5,
        "explicacao": "Se pensarmos nas equações como receitas, elas nos dizem exatamente o que precisamos (como variáveis) e como juntar esses ingredientes para chegar a uma solução. Na economia, por exemplo, elas são usadas para calcular o impacto de uma decisão, como um aumento de preço, no comportamento dos consumidores."
      }
    ]
  },
  {
    "sentenca": "Seu estudo é crucial para a compreensão e resolução de problemas em diversos contextos",
    "qt": 88,
    "comecaEm": 73.653,
    "acabaEm": 79.168,
    "destaque": false,
    "popup": false,
  },
  {
    "sentenca": "A manipulação adequada das equações garante a obtenção de soluções corretas",
    "qt": 77,
    "comecaEm": 79.168,
    "acabaEm": 84.3,
    "destaque": false,
    "popup": false,
  },
  {
    "sentenca": "Desigualdades também expressam relações entre expressões, mas usam símbolos como >, <, ≥, ≤ em vez do sinal de igualdade",
    "qt": 122,
    "comecaEm": 84.3,
    "acabaEm": 91.928,
    "destaque": false,
    "popup": false,
  },
  {
    "sentenca": "Sistemas de equações envolvem mais de uma equação com várias variáveis",
    "qt": 72,
    "comecaEm": 91.928,
    "acabaEm": null,
    "destaque": false,
    "popup": false,
  },
  {
    "sentenca": "\n",
    "qt": 1,
    "comecaEm": null,
    "acabaEm": null,
    "destaque": false,
    "popup": false,
  }
];

var x = 0; // Índice para controle de todas as sentenças
var sentencaAtual = sentencas[x];
var destino = document.getElementById("destino");
var numeroExplicacao = -1; // Índice para as explicações de apoio
var video = document.getElementById("video");
var imagemDestaque = document.getElementById("imagemDestaque"); // Referência para o elemento da imagem
var indiceImagem = 1; // Índice para sentenças importantes (destaques) apenas
var estrela = document.getElementById("estrela");
var audio = document.getElementById("audio");
var d = document.getElementById("destinoNav");
var popUp = document.getElementById("popUp");

var aula = {};
aula.pacosAula = [];

// Distribuindo as sentenças entre os 'pacosAula'
var sentencasFinalidade = sentencas.slice(0, 6); // As primeiras 6 sentenças
var sentencasRepresentacao = sentencas.slice(6, 12); // Próximas 6 sentenças
var sentencasResumo = sentencas.slice(12); // Restantes

// criando os "pacosAula" com títulos e sentenças
aula.pacosAula.push({
  titulo: "Finalidade",
  indice: 0,
  sentencas: sentencasFinalidade,
  foiVisto: false
});

aula.pacosAula.push({
  titulo: "Representação Gráfica",
  indice: 1,
  sentencas: sentencasRepresentacao,  
  foiVisto: false
});

aula.pacosAula.push({
  titulo: "Resumo/Revisão",
  indice: 2,
  sentencas: sentencasResumo,
  foiVisto: false
});

// Concatenando todas as sentenças em uma única lista
var aulaToda = [];

for (var p = 0; p < aula.pacosAula.length; p++) {
  for (var s = 0; s < aula.pacosAula[p].sentencas.length; s++) {
    aulaToda.push(aula.pacosAula[p].sentencas[s]);
    // Adicionando uma referência ao 'pacoAula' na sentença
    aula.pacosAula[p].sentencas[s].pacoAula = aula.pacosAula[p];

    aula.pacosAula[p].sentencas[s].indiceGeral = aulaToda.length - 1;

  }

  aula.pacosAula[p].fim = aulaToda.length - 1; // indice final
}

// atualiza o array com os pacos de aula
sentencas = aulaToda

// exibe os títulos dos 'pacosAula' na interface com evento de clique
for (var p = 0; p < aula.pacosAula.length; p++) {
  document.getElementById("testeW").innerHTML += `<div id="intro_${p}" onclick="navegarParaSecao(${p})"> ${aula.pacosAula[p].titulo}</div>`;
}

///////////////////////////
/////NAVEGAR PARA SECAO////
//////////////////////////

function navegarParaSecao(p) {
  if (aula.pacosAula[p].foiVisto) {
    if(popUp.style.display = "block"){
      popUp.style.display = "none"
    }
    video.pause();
    x = aula.pacosAula[p].sentencas[0].indiceGeral;
    sentencaAtual = sentencas[x];
    video.currentTime = sentencaAtual.comecaEm;
    mostra(); // Atualiza a exibição
    video.play();
  } else {
    alert('Esta seção ainda não foi visualizada.');
  }
}

////////////////////////////////////
/////FUNCAO MOSTRAR (NAO USANDO)////
///////////////////////////////////

function mostrar(p){
  alert(p)
 }

/////////////////////////
//////FORMAT TIMES///////
/////////////////////////

function formatTime(timeInSeconds) {
  if (timeInSeconds === null || timeInSeconds === undefined) return 'N/A';
  var totalSeconds = Math.floor(timeInSeconds);
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

////////////////////////////
/////LÓGICA DE PESQUISA////
//////////////////////////

document.getElementById('searchButton').addEventListener('click', function() {
  var query = document.getElementById('searchInput').value.trim().toLowerCase();
  if (query === '') {
    alert('Por favor, digite uma palavra para pesquisar.');
    return;
  }
  buscarSentencas(query);
});


/////////////////////////
////BUSCAR SENTENCAS/////
/////////////////////////
 
function buscarSentencas(palavra) {
  // Limpa os resultados anteriores
  var searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = '';

  // Encontra sentenças que contêm a palavra pesquisada
  var resultados = sentencas.filter(function(sentencaObj) {
    return sentencaObj.sentenca.toLowerCase().includes(palavra);
  });

  if (resultados.length === 0) {
    searchResults.innerHTML = '<p>Nenhuma sentença encontrada.</p>';
    return;
  }

  // Exibe os resultados
  resultados.forEach(function(sentencaObj, index) {
    // Verifica se o passo de aula foi visualizado
    var podeNavegar = sentencaObj.pacoAula.foiVisto;

    var resultDiv = document.createElement('div');
    resultDiv.className = 'searchResult';
    resultDiv.style.cursor = podeNavegar ? 'pointer' : 'not-allowed';
    resultDiv.style.color = podeNavegar ? 'blue' : 'gray';

    // Formatar os tempos em minutos e segundos
    var comecaEm = sentencaObj.comecaEm !== null ? formatTime(sentencaObj.comecaEm) : 'N/A';
    var acabaEm = sentencaObj.acabaEm !== null ? formatTime(sentencaObj.acabaEm) : 'N/A';

    resultDiv.innerHTML = `
      <p><strong>Sentença:</strong> ${sentencaObj.sentenca}</p>
      <p><strong>Passo de Aula:</strong> ${sentencaObj.pacoAula.titulo}</p>
      <p><strong>Tempo:</strong> ${comecaEm} - ${acabaEm}</p>
    `;

    resultDiv.addEventListener('click', function() {
      if (podeNavegar) {
        navegarParaSentenca(sentencaObj.indiceGeral);
      } else {
        alert('Não é possível navegar para esta sentença porque o passo de aula correspondente ainda não foi visualizado.');
      }
    });

    searchResults.appendChild(resultDiv);
  });
}


// ADICIONAR PASSO DA AULA AO LADO DA SENTENCA E SEGUNDOS DA SENTENÇA // FEITO :D  //

//////////////////////////////
/////NAVEGAR PARA SENTENCA////
/////////////////////////////

function navegarParaSentenca(indice) {
  video.pause();
  x = indice;
  sentencaAtual = sentencas[x];
  video.currentTime = sentencaAtual.comecaEm;
  mostra();
  video.play();
}

///////////////////////////
/////FUNCAO MOSTRA/////
//////////////////////////

// Função para sincronizar a sentença com o vídeo e exibir o pop-up para as sentenças importantes
function mostra() { 

  if (x >= sentencas.length) return;

  sentencaAtual = sentencas[x];

  // Exibe o título da seção, a sentença e o índice atual
  console.log(`Seção: ${sentencaAtual.pacoAula.titulo} | Sentença ${x + 1}: ${sentencaAtual.sentenca}`);
  
  if (sentencaAtual.destaque) {
    // Exibe a sentença em destaque (negrito) com imagem e cor de fundo
    destino.innerHTML = `<b>${sentencaAtual.sentenca}</b>`;
    destino.style.backgroundColor = sentencaAtual.backgroundColor;

    // Define o caminho da imagem de apoio de forma dinâmica apenas para sentenças importantes
    let imagemPath = `assets/image${indiceImagem}.webp`;  // Caminho dinâmico para sentenças importantes
    imagemDestaque.src = imagemPath;
    imagemDestaque.style.display = "block";
    document.getElementById("background").style.opacity = 0.1;
    // Exibe a estrelinha e toca o som de beep
    estrela.style.display = "block"; // Mostra a estrelinha
    audio.play(); // Toca o som de beep

    // Log para verificar o caminho da imagem
    console.log(`Carregando imagem: ${imagemPath}`);

    if (sentencaAtual.qt > 100) {
      imagemDestaque.style.width = "25%";
    } else if (sentencaAtual.qt > 50) {
      imagemDestaque.style.width = "20%";
    } else {
      imagemDestaque.style.width = "15%";
    }


    // Incrementa o índice das imagens importantes
    indiceImagem++;
  } else {
    // Exibe sentença comum e oculta a imagem e a estrelinha
    document.getElementById("background").style.opacity = 0.8;
    destino.innerHTML = sentencaAtual.sentenca;
    destino.style.backgroundColor = "#FFFFFF";
    imagemDestaque.style.display = "none"; // Oculta a imagem para sentenças comuns
    estrela.style.display = "none"; // Oculta a estrelinha para sentenças comuns
  }

    // Verifica se a sentença atual é a última da seção
  if (x === sentencaAtual.pacoAula.fim) {
    sentencaAtual.pacoAula.foiVisto = true;
    // Atualiza o estilo do título da seção para indicar que foi visualizada
    var sectionDiv = document.getElementById(`intro_${sentencaAtual.pacoAula.indice}`);
    sectionDiv.style.color = 'green'; // Indica que a seção foi visualizada
  }
}

///////////////////////////
/////DOM CONTENT LOADED///
//////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const backgroundVideo = document.querySelector("#background video"); // Seleciona o vídeo de fundo
  const c2Element = document.getElementById("c2"); // Seleciona o elemento c2
  const mainVideo = document.getElementById("video"); // Seleciona o vídeo principal
  
  // Inicialmente pausa o vídeo de fundo
  backgroundVideo.pause();

  // Adiciona um evento de clique no elemento c2 para iniciar os vídeos
  c2Element.addEventListener("click", () => {
    if (mainVideo.paused) {
      mainVideo.play(); // Inicia o vídeo principal
      backgroundVideo.play(); // Inicia o vídeo de fundo
    }
  });

  // Sincroniza o vídeo de fundo com o estado do vídeo principal
  mainVideo.addEventListener("play", () => {
    if (backgroundVideo.paused) {
      backgroundVideo.play();
    }
  });

  mainVideo.addEventListener("pause", () => {
    if (!backgroundVideo.paused) {
      backgroundVideo.pause();
    }
  });
});


///////////////////////////
/////PROXIMA SENTENCA/////
//////////////////////////


// Função para avançar a sentença e atualizar a legenda
function proximaSentenca() {
  x++; // Incrementa o índice das sentenças para avançar para a próxima
  mostra(); // Exibe a próxima sentença
}

// Inicia o vídeo e exibe a primeira sentença ao clicar no vídeo
document.getElementById("c2").addEventListener("click", () => {
  video.play();
  mostra();  // Chama a função `mostra` apenas quando o vídeo começa
});

// Evento para monitorar o tempo do vídeo e controlar as transições das sentenças e o pop-up
video.addEventListener('timeupdate', function() {
  if (x >= sentencas.length) return;

  sentencaAtual = sentencas[x];
  if(sentencaAtual.changeImage){
    backgroundDiv.style.backgroundImage = `url(${sentencaAtual.changeImage})`
  }

  if (video.currentTime >= sentencaAtual.acabaEm) {
    if (sentencaAtual.popup) {
      // Pausa e exibe o pop-up se a sentença é importante
      popUp.style.display = "flex";
      video.pause();
    } else {
      // Passa para a próxima sentença automaticamente
      proximaSentenca();  
    }
  }
});

// Evento para o botão "Sim" do pop-up (continua para a próxima sentença)
document.getElementById("sim").addEventListener("click", () => {
  document.getElementById("explicacao").innerText = ""; // Limpa explicações anteriores
  document.getElementById("popUp").style.display = "none"; // Oculta o pop-up
  video.playbackRate = 1.0; // Restaura a velocidade do vídeo para o normal
  video.play();

  proximaSentenca();
});

// Evento para o botão "Não" do pop-up (repete a sentença em velocidade reduzida com explicação de apoio)
document.getElementById("nao").addEventListener("click", () => {
  let sentencaAtual = sentencas[x];

  // Exibe a explicação de apoio
  if (sentencaAtual.explicacaoDestaque && sentencaAtual.explicacaoDestaque.length > 0) {
    numeroExplicacao++;
    if (numeroExplicacao < sentencaAtual.explicacaoDestaque.length) {
      document.getElementById("explicacao").innerText = sentencaAtual.explicacaoDestaque[numeroExplicacao].explicacao;
      document.getElementById("explicacao").style.display = "block";
    } else {
      numeroExplicacao = 0; // Reinicia o índice para explicações
      document.getElementById("explicacao").innerText = sentencaAtual.explicacaoDestaque[numeroExplicacao].explicacao;
    }
  }

  // Reinicia o vídeo na sentença importante e reduz a velocidade
  document.getElementById("popUp").style.display = "none";
  video.currentTime = sentencaAtual.comecaEm;
  video.playbackRate = 0.5;
  video.play();
  
  mostra(); // Exibe a sentença novamente
});

let processor = {
  timerCallback: function () {
    if (this.video.paused || this.video.ended) {
      return;
    }
    this.computeFrame();
    let self = this;
    setTimeout(function () {
      self.timerCallback();
    }, 0);
  },

  doLoad: function () {
    this.video = document.getElementById("video");
    this.c1 = document.getElementById("c1");
    this.ctx1 = this.c1.getContext("2d");
    this.c2 = document.getElementById("c2");
    this.ctx2 = this.c2.getContext("2d");
    let self = this;
    this.video.addEventListener(
      "play",
      function () {
        self.width = self.video.videoWidth;
        self.height = self.video.videoHeight;
        self.timerCallback();
      },
      false
    );
  },

  computeFrame: function () {
    var corChromaKey = [0, 255, 51];
    this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
    let frame = this.ctx1.getImageData(0, 0, this.width, this.height);
    let l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {
      let r = frame.data[i * 4 + 0];
      let g = frame.data[i * 4 + 1];
      let b = frame.data[i * 4 + 2];
      if (calculateColorDistance([r, g, b], corChromaKey) < 100)
        frame.data[i * 4 + 3] = 0;
    }
    this.ctx2.putImageData(frame, 0, 0);
    return;
  },
};

function calculateColorDistance(color1, color2) {
  if (color1.length !== 3 || color2.length !== 3) {
    throw new Error("As cores devem ser arrays no formato [R, G, B].");
  }

  const distance = Math.sqrt(
    Math.pow(color1[0] - color2[0], 2) +
      Math.pow(color1[1] - color2[1], 2) +
      Math.pow(color1[2] - color2[2], 2)
  );

  return distance;
}

document.addEventListener("DOMContentLoaded", () => {
  processor.doLoad();
  
});

