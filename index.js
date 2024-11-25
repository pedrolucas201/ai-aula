var backgroundDiv = document.getElementById("background");

var sentencasComDestaques = [
  {
    "background": {
      "video": "assets/nuvem.mp4",
      "dimensions": {
        "width": 640,
        "height": 360
      },
      "autoplay": true,
      "loop": true
    },
    "sentencasComDestaques": [
      {
        "sentenca": "Equações são sentenças matemáticas que afirmam a igualdade entre duas expressões algébricas.",
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
        "sentenca": "Elas contêm variáveis, que são símbolos representando valores desconhecidos, e constantes, que são valores fixos.",
        "qt": 114,
        "comecaEm": 5.735,
        "acabaEm": 13.177,
        "destaque": false,
        "popup": false
      },
      {
        "sentenca": "O objetivo principal ao trabalhar com equações é encontrar o valor ou os valores das variáveis que tornam a igualdade verdadeira.",
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
        ],
        "videoSegment": {
          "src": "./assets/teste (1).mp4",
          "start": 13.177,
          "end": 21.699
        }
      },
      {
        "sentenca": "Isso é chamado de 'resolver a equação'.",
        "qt": 40,
        "comecaEm": 21.699,
        "acabaEm": 25.124,
        "destaque": false,
        "popup": false
      },
      {
        "sentenca": "As equações podem ser lineares (grau 1), quadráticas (grau 2), cúbicas (grau 3), e assim por diante, dependendo do maior expoente da variável.",
        "qt": 143,
        "comecaEm": 25.124,
        "acabaEm": 36.514,
        "destaque": false,
        "popup": false
      },
      {
        "sentenca": "Equações lineares possuem gráficos que são retas.",
        "qt": 54,
        "comecaEm": 36.514,
        "acabaEm": 40.345,
        "destaque": false,
        "popup": false
      },
      {
        "sentenca": "Equações são fundamentais em diversas áreas, como física, engenharia, economia e programação, modelando relações entre grandezas.",
        "qt": 130,
        "comecaEm": 63.913,
        "acabaEm": 73.653,
        "destaque": true,
        "popup": true,
        "backgroundColor": "#D1FFDD",
        "explicacaoDestaque": [
          {
            "alternativa": 1,
            "explicacao": "As equações são ferramentas que usamos para representar a realidade. Elas descrevem como diferentes variáveis, como tempo, espaço e força, se relacionam e ajudam a prever resultados em diversas situações, como no movimento de planetas ou no comportamento dos mercados financeiros."
          },
          {
            "alternativa": 2,
            "explicacao": "Imagine que você está montando um quebra-cabeça. As equações são como as peças que se encaixam para formar a imagem completa."
          }
        ],
        "videoSegment": {
          "src": "./assets/teste (1).mp4",
          "start": 63.913,
          "end": 73.653
        }
      }
    ],
    "popupMessages": {
      "understanding": "Você entendeu?",
      "yes": "SIM",
      "no": "NÃO"
    },
    "assets": {
      "estrelaGif": "./ZalX.gif",
      "audioPath": "./AUDIO-2024-11-18-12-55-54.mp3"
    }
  }
];  

var x = 0; // Índice para controle de todas as sentenças
var destino = document.getElementById("destino");
var numeroExplicacao = -1; // Índice para as explicações de apoio
var video = document.getElementById("video");
var imagemDestaque = document.getElementById("imagemDestaque"); // Referência para o elemento da imagem
var indiceImagem = 1; // Índice para sentenças importantes (destaques) apenas
var estrela = document.getElementById("estrela");
var audio = document.getElementById("audio");

// Função para sincronizar a sentença com o vídeo e exibir o pop-up para as sentenças importantes
function mostra() {
  if (x >= sentencasComDestaques.length) return;

  let sentencaAtual = sentencasComDestaques[x];

  // Exibir o índice atual e a sentença
  console.log(`Sentença ${x + 1}: ${sentencaAtual.sentenca}`);
  
  if (sentencaAtual.destaque) {
    // Exibe a sentença em destaque (negrito) com imagem e cor de fundo
    destino.innerHTML = `<b>${sentencaAtual.sentenca}</b>`;
    destino.style.backgroundColor = sentencaAtual.backgroundColor;

    // Define o caminho da imagem de apoio de forma dinâmica apenas para sentenças importantes
    let imagemPath = `assets/image${indiceImagem}.webp`;  // Caminho dinâmico para sentenças importantes
    imagemDestaque.src = imagemPath;
    imagemDestaque.style.display = "block";
    document.getElementById("background").style.opacity = 0.5;
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
    destino.innerHTML = sentencaAtual.sentenca;
    destino.style.backgroundColor = "#FFFFFF";
    imagemDestaque.style.display = "none"; // Oculta a imagem para sentenças comuns
    estrela.style.display = "none"; // Oculta a estrelinha para sentenças comuns
  }
}

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
  if (x >= sentencasComDestaques.length) return;

  let sentencaAtual = sentencasComDestaques[x];
  if(sentencaAtual.changeImage){
    backgroundDiv.style.backgroundImage = `url(${sentencaAtual.changeImage})`
  }

  if (video.currentTime >= sentencaAtual.acabaEm) {
    if (sentencaAtual.popup) {
      // Pausa e exibe o pop-up se a sentença é importante
      document.getElementById("popUp").style.display = "flex";
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
  let sentencaAtual = sentencasComDestaques[x];

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

