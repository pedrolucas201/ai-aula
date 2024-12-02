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

var aula =
{
  "pacosAula": [
    {
      "titulo": "Apresentação e Introdução à Aula",
      "indice": 0,
      "foiVisto": false,
      "sentencas": [
        {
          "sentenca": "Tudo bem?",
          "comecaEm": 11.881,
          "acabaEm": 13.162

        },
        {
          "sentenca": "Tudo certo?",
          "comecaEm": 13.282,
          "acabaEm": 15.144
        },
        {
          "sentenca": "Se você já sabe escrever muito, muito, muito, muito e às vezes pensa em pular uma aula, muito cuidado",
          "comecaEm": 15.765,
          "acabaEm": 25.995
        },
        {
          "sentenca": "Porque tem muitas pessoas que quando chegam aqui no curso dizem assim, ah, mas eu já sei escrever e eu vou só ver as aulas de repertório",
          "comecaEm": 26.235,
          "acabaEm": 34.243
        },
        {
          "sentenca": "Gente, não é só sobre escrever",
          "comecaEm": 35.224,
          "acabaEm": 38.626
        },
        {
          "sentenca": "Eu preciso pensar, eu preciso escrever, só que eu tenho que fazer isso em menos tempo, entendeu?",
          "comecaEm": 39.626,
          "acabaEm": 46.089,
          "destaque": true,
          "backgroundColor": "#80EF80"
        },
        {
          "sentenca": "Pois é, velho, pois é",
          "comecaEm": 47.209,
          "acabaEm": 48.61
        },
        {
          "sentenca": "E se a gente não entende que são etapas de um processo, a gente termina atropelando tudo",
          "comecaEm": 51.47,
          "acabaEm": 57.294
        },
        {
          "sentenca": "Então, a base de um texto argumentativo, a organização do texto argumentativo, ela é fundamental para que a gente consiga deixar muito nítido o que é que a gente acha sobre algo, tá certo?",
          "comecaEm": 57.314,
          "acabaEm": 72.644,
          "destaque": true,
          "backgroundColor": "#80EF80",
          "popup": true,
          "explicacaoDestaque": [
            {
              "alternativa": 1,
              "explicacao": "Pense em um texto argumentativo como uma estrada com destino claro. A organização é como as placas de sinalização: elas orientam o leitor a entender exatamente para onde você está indo e por quê. Sem as placas, as pessoas podem se perder, e sua opinião pode nunca chegar ao destino correto."
            },
            {
              "alternativa": 2,
              "explicacao": "Escrever um texto argumentativo é como preparar uma receita de bolo. Se você seguir a ordem certa — misturar os ingredientes, levar ao forno e decorar no final —, o resultado será delicioso e claro. Mas se misturar tudo sem ordem ou esquecer um passo, o bolo pode sair solado e confuso, assim como sua opinião no texto."
            },
            {
              "alternativa": 3,
              "explicacao": "Imagine que seu texto argumentativo é como construir uma casa. A base sólida (introdução) garante que ela não desabe, as paredes bem organizadas (desenvolvimento) são onde você sustenta seus argumentos, e o telhado (conclusão) protege e dá um acabamento final à sua ideia."
            },
            {
              "alternativa": 4,
              "explicacao": "Pense no texto argumentativo como um quebra-cabeça. Cada peça (argumento) precisa estar no lugar certo para formar uma imagem clara. Se faltar organização, algumas peças ficam de fora, e a mensagem não se completa."
            },
            {
              "alternativa": 5,
              "explicacao": "Escrever um texto argumentativo é como organizar uma exposição de arte. Cada quadro (argumento) precisa ser colocado no lugar certo, com boa iluminação (clareza) e descrições (justificativas) que expliquem ao público exatamente o que você quer mostrar."
            }
          ]
        },
        {
          "sentenca": "Então, sejam bem-vindos, se concentrem, vamos lá",
          "comecaEm": 72.664,
          "acabaEm": 76.466
        }
      ]
    },
    {
      "titulo": "Importância do Planejamento e Organização Textual",
      "indice": 1,
      "foiVisto": false,
      "sentencas": [
        {
          "sentenca": "Seguinte",
          "comecaEm": 76.867,
          "acabaEm": 77.307
        },
        {
          "sentenca": "Eu sei que argumentar é convencer",
          "comecaEm": 79.198,
          "acabaEm": 81.7
        },
        {
          "sentenca": "A gente já viu isso",
          "comecaEm": 82.521,
          "acabaEm": 84.222
        },
        {
          "sentenca": "Verdade",
          "comecaEm": 84.602,
          "acabaEm": 85.182
        },
        {
          "sentenca": "Só que assim, não é no sentido de dizer acredite em mim",
          "comecaEm": 86.303,
          "acabaEm": 90.266
        },
        {
          "sentenca": "Mas eu preciso trazer a minha opinião",
          "comecaEm": 91.067,
          "acabaEm": 94.409
        },
        {
          "sentenca": "Não é dizendo eu acho, mas a minha opinião em terceira pessoa",
          "comecaEm": 96.271,
          "acabaEm": 101.815
        },
        {
          "sentenca": "É um texto impessoal",
          "comecaEm": 101.835,
          "acabaEm": 103.816
        },
        {
          "sentenca": "Então eu dou a minha opinião sem me envolver",
          "comecaEm": 104.897,
          "acabaEm": 108.76
        },
        {
          "sentenca": "Quando eu digo que a principal causa da invisibilidade em relação ao registro civil no Brasil é a omissão de uma educação de qualidade, a ausência de uma educação de qualidade, isso é minha opinião",
          "comecaEm": 110.175,
          "acabaEm": 124.338,
          "destaque": true,
          "backgroundColor": "#80EF80",
        },
        {
          "sentenca": "Isso é minha opinião",
          "comecaEm": 125.139,
          "acabaEm": 125.859,
          "destaque": true,
          "backgroundColor": "#80EF80",
          "popup": true,
          "explicacaoDestaque": [
            {
              "alternativa": 1,
              "explicacao": "A ausência de uma educação de qualidade é um fator determinante para a invisibilidade em relação ao registro civil no Brasil, pois impede que as pessoas compreendam a importância e os procedimentos necessários para obter a documentação."
            },
            {
              "alternativa": 2,
              "explicacao": "Sem uma educação de qualidade, muitas pessoas não têm acesso à informação sobre seus direitos e deveres, o que contribui para a falta de registro civil e, consequentemente, para a invisibilidade social."
            },
            {
              "alternativa": 3,
              "explicacao": "A educação de qualidade é fundamental para que as pessoas possam exercer plenamente sua cidadania, incluindo o acesso ao registro civil, que é um direito básico."
            },
            {
              "alternativa": 4,
              "explicacao": "A falta de educação de qualidade perpetua a exclusão social, pois sem o registro civil, as pessoas ficam privadas de diversos serviços e benefícios, como saúde, educação e assistência social."
            },
            {
              "alternativa": 5,
              "explicacao": "Investir em educação de qualidade é essencial para garantir que todos os cidadãos tenham acesso ao registro civil, promovendo a inclusão social e a igualdade de oportunidades."
            }
          ]
        },
        {
          "sentenca": "Porque para muitas pessoas o que motiva isso é outra coisa",
          "comecaEm": 126.399,
          "acabaEm": 130.02
        },
        {
          "sentenca": "Então vê, eu faço isso, mas eu preciso dizer por que Eu acho isso e com base em quê?",
          "comecaEm": 130.66,
          "acabaEm": 144.693
        },
        {
          "sentenca": "Gente, isso é muito sério, pô, muito sério",
          "comecaEm": 146.275,
          "acabaEm": 148.656
        },
        {
          "sentenca": "Tem muita gente que me ouve falar de redação e termina generalizando, termina não entendendo as etapas do processo, termina tendo preguiça de, de repente, começar só por introdução, começar só pelo planejamento",
          "comecaEm": 149.076,
          "acabaEm": 164.243
        },
        {
          "sentenca": "Então, imagine que você esteja no seu quinto ano de cursinho",
          "comecaEm": 164.283,
          "acabaEm": 168.005
        },
        {
          "sentenca": "Se você tirou 980, você precisa repetir o 980, dica, em menos tempo",
          "comecaEm": 168.805,
          "acabaEm": 175.088
        },
        {
          "sentenca": "É preciso que doa menos, entendeu?",
          "comecaEm": 176.128,
          "acabaEm": 177.709
        },
        {
          "sentenca": "Se você tirou 1.000, você vai ter que repetir o 1.000. Se você tirou 300, você tem que aumentar",
          "comecaEm": 178.029,
          "acabaEm": 184.672,
          "destaque": true,
          "backgroundColor": "#80EF80",
        },
        {
          "sentenca": "Então, não adianta querer fazer sem um projeto de texto",
          "comecaEm": 185.212,
          "acabaEm": 189.935
        },
        {
          "sentenca": "A competência 3 do Enem, ela fala de projeto de texto, só que o projeto de texto, ele é muito importante pra gente também",
          "comecaEm": 190.435,
          "acabaEm": 197.218
        },
        {
          "sentenca": "Porque com o nervosismo da prova, a gente termina fazendo menos besteira",
          "comecaEm": 197.678,
          "acabaEm": 202.241
        },
        {
          "sentenca": "Tudo certo?",
          "comecaEm": 202.281,
          "acabaEm": 204.082
        },
        {
          "sentenca": "Vê só",
          "comecaEm": 204.122,
          "acabaEm": 204.362
        },
        {
          "sentenca": "Então, quando eu digo que o texto é argumentativo, eu preciso credibilizar, leve isso a sério",
          "comecaEm": 205.295,
          "acabaEm": 214.838
        },
        {
          "sentenca": "Eu preciso dizer de onde vem o meu ponto de vista",
          "comecaEm": 215.678,
          "acabaEm": 219.38
        },
        {
          "sentenca": "Não adianta a gente decorar Artego V, não adianta decorar Balma, não adianta decorar Hobbes, não adianta decorar Cidadão de Papel",
          "comecaEm": 219.72,
          "acabaEm": 226.062
        },
        {
          "sentenca": "Não",
          "comecaEm": 227.122,
          "acabaEm": 227.222
        },
        {
          "sentenca": "É como se",
          "comecaEm": 228.363,
          "acabaEm": 228.963
        },
        {
          "sentenca": "Eu vou dar uma opinião sobre o investimento em ciência pelas mulheres",
          "comecaEm": 230.047,
          "acabaEm": 237.018
        },
        {
          "sentenca": "Um exemplo",
          "comecaEm": 237.178,
          "acabaEm": 237.779
        },
        {
          "sentenca": "O que é que eu acho disso?",
          "comecaEm": 239.362,
          "acabaEm": 240.544
        },
        {
          "sentenca": "E com base em que, eu acho?",
          "comecaEm": 241.91,
          "acabaEm": 243.451
        },
        {
          "sentenca": "Eu acho com base numa pesquisa, eu acho com base no estudo, eu acho com base numa comparação entre países, eu acho com base numa relação do Brasil hoje com o Brasil há 100 anos",
          "comecaEm": 243.871,
          "acabaEm": 255.898
        },
        {
          "sentenca": "Por isso que a escrita é uma atividade que começa na cabeça",
          "comecaEm": 256.918,
          "acabaEm": 261.922
        },
        {
          "sentenca": "Eu preciso pensar para que eu consiga escrever",
          "comecaEm": 262.022,
          "acabaEm": 264.763
        },
        {
          "sentenca": "Então, sempre, sempre",
          "comecaEm": 265.404,
          "acabaEm": 266.925
        },
        {
          "sentenca": "Você vai precisar defender um ponto de vista, que é o seu, fundamentando",
          "comecaEm": 267.685,
          "acabaEm": 272.887
        },
        {
          "sentenca": "Algumas pessoas dizem assim",
          "comecaEm": 273.668,
          "acabaEm": 275.268
        },
        {
          "sentenca": "Eu acho que a minha introdução fica muito expositiva",
          "comecaEm": 276.269,
          "acabaEm": 280.871
        }
      ]
    },
    {
      "titulo": "Estrutura do Texto Argumentativo",
      "indice": 2,
      "foiVisto": false,
      "sentencas": [
        {
          "sentenca": "Gente, toda introdução é expositiva",
          "comecaEm": 281.071,
          "acabaEm": 285.133
        },
        {
          "sentenca": "Toda",
          "comecaEm": 285.353,
          "acabaEm": 285.753
        },
        {
          "sentenca": "Porque a introdução é o momento de apresentação",
          "comecaEm": 286.553,
          "acabaEm": 290.895
        },
        {
          "sentenca": "A linha de argumentação está aqui",
          "comecaEm": 292.576,
          "acabaEm": 294.677
        },
        {
          "sentenca": "Você argumenta durante o desenvolvimento",
          "comecaEm": 296.107,
          "acabaEm": 298.969
        },
        {
          "sentenca": "Você defende um ponto de vista no desenvolvimento",
          "comecaEm": 299.91,
          "acabaEm": 303.632
        },
        {
          "sentenca": "E aqui na conclusão, no caso do Enem especificamente falando, você é obrigado a trazer uma proposta que tenha relação direta com o que você durante o texto falou",
          "comecaEm": 304.072,
          "acabaEm": 316.12
        },
        {
          "sentenca": "Tudo bem?",
          "comecaEm": 316.26,
          "acabaEm": 316.721
        },
        {
          "sentenca": "Sim",
          "comecaEm": 318.062,
          "acabaEm": 318.282
        },
        {
          "sentenca": "Então, a organização do texto começa a partir do entendimento a respeito do que é argumentar",
          "comecaEm": 320.163,
          "acabaEm": 327.889
        },
        {
          "sentenca": "Muitas pessoas acham que argumentar é somente apresentar algo",
          "comecaEm": 328.59,
          "acabaEm": 332.212
        },
        {
          "sentenca": "Não, gente",
          "comecaEm": 332.272,
          "acabaEm": 332.813
        },
        {
          "sentenca": "Apresentar algo é dissertar",
          "comecaEm": 333.293,
          "acabaEm": 336.095
        },
        {
          "sentenca": "A dissertação pode ser expositiva e pode ser argumentativa",
          "comecaEm": 336.836,
          "acabaEm": 341.179
        },
        {
          "sentenca": "Eu tenho que saber separar as coisas, certo?",
          "comecaEm": 341.199,
          "acabaEm": 343.181
        },
        {
          "sentenca": "O tema da semana tá aí na plataforma e eu tô trazendo pra cá pra gente poder saber o que fazer em relação a isso aqui",
          "comecaEm": 344.207,
          "acabaEm": 354.976
        },
        {
          "sentenca": "Vamos lá",
          "comecaEm": 355.016,
          "acabaEm": 355.236
        },
        {
          "sentenca": "Os impactos do desmatamento na produtividade do Brasil",
          "comecaEm": 355.777,
          "acabaEm": 362.442
        },
        {
          "sentenca": "Vê só",
          "comecaEm": 362.482,
          "acabaEm": 364.484
        },
        {
          "sentenca": "Gente, impacto é só consequência",
          "comecaEm": 364.544,
          "acabaEm": 368.327
        },
        {
          "sentenca": "Se no próprio tema tem impactos, significa dizer que eu vou ter que pensar num tipo de consequência para o D1 e num tipo de consequência para o D2. Jóia",
          "comecaEm": 373.48,
          "acabaEm": 386.565
        },
        {
          "sentenca": "Aí começa um outro processo",
          "comecaEm": 387.506,
          "acabaEm": 389.446
        },
        {
          "sentenca": "Eu leio o tema e aí eu pego uma palavra que direciona sempre",
          "comecaEm": 389.466,
          "acabaEm": 395.709
        },
        {
          "sentenca": "Impacto, direciona, tá",
          "comecaEm": 396.229,
          "acabaEm": 398.31
        },
        {
          "sentenca": "O que é que especifica desmatamento, não, desculpa, impacto no desmatamento, do desmatamento, impacto do desmatamento",
          "comecaEm": 399.388,
          "acabaEm": 410.43
        },
        {
          "sentenca": "O que especifica?",
          "comecaEm": 411.27,
          "acabaEm": 412.331
        },
        {
          "sentenca": "Na produtividade",
          "comecaEm": 412.851,
          "acabaEm": 414.271
        },
        {
          "sentenca": "Tem alguma ideia de lugar?",
          "comecaEm": 414.911,
          "acabaEm": 416.191
        },
        {
          "sentenca": "Brasil",
          "comecaEm": 416.511,
          "acabaEm": 417.051
        },
        {
          "sentenca": "Tem",
          "comecaEm": 417.372,
          "acabaEm": 417.572
        },
        {
          "sentenca": "Muitas pessoas param neste minuto aí dizem, calma, vou estudar desmatamento",
          "comecaEm": 418.472,
          "acabaEm": 424.973
        },
        {
          "sentenca": "Aí pega o dado de desmatamento hoje, a técnica de desmatamento, como é no Norte, como é no Centro-Oeste, específico desmatamento",
          "comecaEm": 426.216,
          "acabaEm": 438.045
        },
        {
          "sentenca": "Vou estudar quem é que estuda sobre desmatamento e o dado de desmatamento aí se anotando",
          "comecaEm": 438.105,
          "acabaEm": 443.409
        },
        {
          "sentenca": "Depois vou falar de produtividade, vou ver quem é que estuda produtividade, quais são os dados de produtividade",
          "comecaEm": 444.53,
          "acabaEm": 450.234
        },
        {
          "sentenca": "Não é assim que se estuda redação",
          "comecaEm": 450.574,
          "acabaEm": 452.776
        },
        {
          "sentenca": "Não é",
          "comecaEm": 453.256,
          "acabaEm": 453.957
        },
        {
          "sentenca": "Errado",
          "comecaEm": 455.418,
          "acabaEm": 455.698
        },
        {
          "sentenca": "E aí a gente já pode começar a ter a solução para a sua vida",
          "comecaEm": 457.37,
          "acabaEm": 460.172
        },
        {
          "sentenca": "A gente tem no ano 35 semanas letivas, mais ou menos",
          "comecaEm": 460.933,
          "acabaEm": 464.736
        },
        {
          "sentenca": "E se você for começar a contar quantos temas existem, você consegue contar fácil mais de 200. Então não tem como você dizer, vou escrever sobre todos os temas, porque são mais de 200, gente",
          "comecaEm": 465.356,
          "acabaEm": 480.948
        },
        {
          "sentenca": "Você não tem como decorar um dado sobre desmatamento, porque se o tema for lixo no oceano, você tá ferrado, porque você só tem o dado de desmatamento, velho",
          "comecaEm": 481.268,
          "acabaEm": 492.715
        },
        {
          "sentenca": "Não tô mandando decorar hobbies, eu tenho pavo, coitado, fez um negócio muito legal, mas tipo, tô em outra época, amado",
          "comecaEm": 494.176,
          "acabaEm": 500.88
        },
        {
          "sentenca": "Então você não consegue, as pessoas ficam malucas em redação porque elas não conseguem entender como estudar",
          "comecaEm": 502.95,
          "acabaEm": 508.895
        },
        {
          "sentenca": "A gente aqui no curso fala muito sobre isso",
          "comecaEm": 509.035,
          "acabaEm": 510.937
        },
        {
          "sentenca": "Vamos lá, desmatamento é uma questão ambiental",
          "comecaEm": 511.297,
          "acabaEm": 515.701
        },
        {
          "sentenca": "Então eu preciso estudar, levando a sério, claro que a gente vai discutir isso durante o ano, mas eu preciso estudar a questão ambiental",
          "comecaEm": 516.26,
          "acabaEm": 525.729
        },
        {
          "sentenca": "Por que a degradação?",
          "comecaEm": 526.673,
          "acabaEm": 528.315
        },
        {
          "sentenca": "Qual o interesse?",
          "comecaEm": 528.615,
          "acabaEm": 529.756
        },
        {
          "sentenca": "Eu tenho que comparar o Brasil a outras potências econômicas?",
          "comecaEm": 530.116,
          "acabaEm": 534.16
        },
        {
          "sentenca": "Eu tenho que comparar o Brasil a potências sociais?",
          "comecaEm": 534.48,
          "acabaEm": 536.963
        }
      ]
    },
    {
      "titulo": "Técnicas e Estratégias de Argumentação",
      "indice": 3,
      "foiVisto": false,
      "sentencas": [
        {
          "sentenca": "Eu tenho que estudar ambientalistas?",
          "comecaEm": 537.283,
          "acabaEm": 539.145
        },
        {
          "sentenca": "E se o tema vier desmatamento, seca, extração ilegal de não sei o que, poluição no rio, poluição no mar",
          "comecaEm": 539.405,
          "acabaEm": 551.716
        },
        {
          "sentenca": "Eu vou saber desenvolver porque eu estou entendendo questão ambiental",
          "comecaEm": 552.599,
          "acabaEm": 557.361
        },
        {
          "sentenca": "Então, por exemplo, aqui impacto do desmatamento na produtividade do Brasil",
          "comecaEm": 557.902,
          "acabaEm": 563.384
        },
        {
          "sentenca": "Joia!",
          "comecaEm": 563.785,
          "acabaEm": 564.965
        },
        {
          "sentenca": "Eu vou ler os textos de apoio",
          "comecaEm": 564.985,
          "acabaEm": 566.446
        },
        {
          "sentenca": "O que eu achar legal dos textos de apoio ou se eu for estudar pela internet, outra coisa, eu vou anotar no meu caderno de redação que eu separei pra questões ambientais",
          "comecaEm": 567.106,
          "acabaEm": 581.009
        },
        {
          "sentenca": "Então você coloca lá, questões ambientais, um pedacinho do caderno",
          "comecaEm": 581.409,
          "acabaEm": 584.571
        },
        {
          "sentenca": "Filme, um espaço pra livro, um espaço pra ambientalista, porque a gente não vai jogar ambientalista",
          "comecaEm": 585.031,
          "acabaEm": 592.794
        },
        {
          "sentenca": "Ailton Krenak, joguei, não",
          "comecaEm": 592.814,
          "acabaEm": 594.494
        },
        {
          "sentenca": "A gente estuda Aí o Tom Krenak estuda Genebaldo Freire, a gente estuda, estuda, para saber qual é a base da ideia do cara, entendeu?",
          "comecaEm": 594.894,
          "acabaEm": 605.892
        },
        {
          "sentenca": "E aí tudo, outro tema sobre uma questão ambiental",
          "comecaEm": 606.473,
          "acabaEm": 609.454
        },
        {
          "sentenca": "Aí a gente estuda e coloca em questão ambiental",
          "comecaEm": 609.854,
          "acabaEm": 612.415
        },
        {
          "sentenca": "Porque o que vier sobre algum assunto ambiental, a gente consegue entender o macro para direcionar para o micro",
          "comecaEm": 612.736,
          "acabaEm": 621.44
        },
        {
          "sentenca": "Foi o que aconteceu com aquela redação de registro civil e invisibilidade, garantia de acesso à cidadania no Brasil",
          "comecaEm": 622.12,
          "acabaEm": 629.285
        },
        {
          "sentenca": "Muita gente ficou em pânico, pânico é um tema difícil, mas muita gente ficou em pânico porque chegou à prova e disse, não tenho nenhum dado sobre registro civil",
          "comecaEm": 630.025,
          "acabaEm": 640.712
        },
        {
          "sentenca": "Minha gente, quem tem?",
          "comecaEm": 640.752,
          "acabaEm": 641.772
        },
        {
          "sentenca": "Tu imagina, véspera de prova, sábado antes do Enem, a pessoa está pesquisando, dado de registro civil",
          "comecaEm": 642.173,
          "acabaEm": 649.817
        },
        {
          "sentenca": "Eita!",
          "comecaEm": 649.958,
          "acabaEm": 650.498
        },
        {
          "sentenca": "Vou estudar agora certidão de nascimento",
          "comecaEm": 651.098,
          "acabaEm": 653.901
        },
        {
          "sentenca": "Não, gente!",
          "comecaEm": 654.642,
          "acabaEm": 655.663
        },
        {
          "sentenca": "Mas se você entende que é um direito, a gente estudou a questão da invisibilidade social a partir de um teórico social espetacular, Fernando Braga, e a gente estudou tudo, tudo sobre essa questão do que invisibiliza, jóia",
          "comecaEm": 656.143,
          "acabaEm": 674.641
        },
        {
          "sentenca": "A gente estudou questões sérias sobre cidadania",
          "comecaEm": 675.482,
          "acabaEm": 678.325
        },
        {
          "sentenca": "Claro que a gente vai estudar de novo, talvez por outras pessoas, por outros olhares, porque a ideia é que as coisas se somem",
          "comecaEm": 678.766,
          "acabaEm": 685.212
        },
        {
          "sentenca": "A gente estudou José Murilo de Carvalho, Lília, Hermínia Maricato, um monte de gente que fala sobre, entendeu?",
          "comecaEm": 686.894,
          "acabaEm": 697.525
        },
        {
          "sentenca": "Raimundo Faoro, Celso Furtado, um monte de gente",
          "comecaEm": 698.755,
          "acabaEm": 702.599
        },
        {
          "sentenca": "Não tô querendo que você saiba agora",
          "comecaEm": 702.919,
          "acabaEm": 704.941
        },
        {
          "sentenca": "Eu acho que este ano tem que ter outro caderninho de redação",
          "comecaEm": 705.301,
          "acabaEm": 708.704
        },
        {
          "sentenca": "Se você fez no ano anterior, guarda, porque é natural que à medida que a gente vai vendo este ano, você vai tendo um outro olhar",
          "comecaEm": 709.826,
          "acabaEm": 718.734
        },
        {
          "sentenca": "Isso é bem interessante, certo?",
          "comecaEm": 720.138,
          "acabaEm": 722.12
        },
        {
          "sentenca": "Então, assim, tenta pegar isso que eu estou falando porque você pega o assunto e você direciona para algo mais específico, tanto é que os alunos daqui do curso se depararam com o tema, pelo menos foi a devolutiva que eu tive, se depararam com o tema E, claro, tiveram que organizar aquilo pra poder começar a discutir, mas não houve tanto problema em fazer isso, entendeu?",
          "comecaEm": 723.001,
          "acabaEm": 751.348
        },
        {
          "sentenca": "Porque a ideia não é teórico que estuda a certidão de nascimento, imagina",
          "comecaEm": 751.788,
          "acabaEm": 755.872
        },
        {
          "sentenca": "E aí tu ia ter um caderno com teórico pra certidão de nascimento, teórico pra certidão de óbito, teórico pra certidão de casamento, teórico pra pessoa em situação de rua, teórico pra lixo na rua, teórico pra favela, dado de favela, dado lixo na rua, dado de",
          "comecaEm": 758.026,
          "acabaEm": 774.358
        },
        {
          "sentenca": "Não dá!",
          "comecaEm": 774.878,
          "acabaEm": 775.559
        },
        {
          "sentenca": "Você não vai conseguir decorar tudo",
          "comecaEm": 775.859,
          "acabaEm": 778.841
        },
        {
          "sentenca": "Aí você decora lixo no oceano",
          "comecaEm": 779.721,
          "acabaEm": 781.523
        },
        {
          "sentenca": "Aí na hora da prova é lixo no rio",
          "comecaEm": 782.043,
          "acabaEm": 783.604
        },
        {
          "sentenca": "Ferrou",
          "comecaEm": 783.744,
          "acabaEm": 784.045
        },
        {
          "sentenca": "Lixo no rio não tem",
          "comecaEm": 784.545,
          "acabaEm": 785.366
        },
        {
          "sentenca": "Tem o lixo no oceano",
          "comecaEm": 786.026,
          "acabaEm": 786.827
        },
        {
          "sentenca": "No ano passado, foi um cabaré, porque a gente estava numa monitoria, e aí o tema era alguma coisa de futebol, e um aluno perguntou que teórico usaria para futebol",
          "comecaEm": 787.64,
          "acabaEm": 798.823
        },
        {
          "sentenca": "A gente, claro que existe muita intimidade entre a gente na monitoria interativa, e aí algumas pessoas começaram a brincar, ó, segundo o Neymar, 100% Deus",
          "comecaEm": 799.644,
          "acabaEm": 809.726
        },
        {
          "sentenca": "Então, segundo Galvão Bueno, é tetra, a gente estava brincando durante a semana, Samara, Alain, não lembro mais quem estava, mas terminou virando brincadeira, porque exige muito teórico sobre futebol, dados sobre futebol",
          "comecaEm": 812.328,
          "acabaEm": 826.541
        },
        {
          "sentenca": "Quem tem, minha gente?",
          "comecaEm": 826.581,
          "acabaEm": 827.302
        },
        {
          "sentenca": "Ah, eu estava aqui pesquisando dados sobre futebol",
          "comecaEm": 827.322,
          "acabaEm": 828.924
        },
        {
          "sentenca": "E se o assunto da redação for basquete, não faz nada",
          "comecaEm": 831.177,
          "acabaEm": 834.278
        },
        {
          "sentenca": "Então, olha para o tema, separa o tema e tenta entender a linha de raciocínio dos textos de apoio",
          "comecaEm": 834.859,
          "acabaEm": 841.501
        },
        {
          "sentenca": "Por exemplo, o Instituto Nacional, órgão do governo federal, anunciou quinta que a taxa de desmatamento na Amazônia Legal teve um aumento em um ano",
          "comecaEm": 841.721,
          "acabaEm": 850.845
        },
        {
          "sentenca": "O valor de corte raso foi estimado em 13 mil",
          "comecaEm": 851.405,
          "acabaEm": 853.566
        },
        {
          "sentenca": "Esse é o maior número desde 2006, segundo as medições",
          "comecaEm": 855.14,
          "acabaEm": 859.006
        }
      ]
    },
    {
      "titulo": "Uso de Repertório e Exemplos",
      "indice": 4,
      "foiVisto": false,
      "sentencas": [
        {
          "sentenca": "A maior variação entre os nove estados foi a Amapá, jóia",
          "comecaEm": 859.367,
          "acabaEm": 862.852
        },
        {
          "sentenca": "Com área total derrubada de 2 mil, o levantamento é pré-eliminar e será confirmado no primeiro semestre",
          "comecaEm": 863.883,
          "acabaEm": 869.185
        },
        {
          "sentenca": "Na COP, a Conferência das Nações Unidas sobre Mudanças Climáticas, o Brasil assinou um acordo sobre florestas que prevê zerar de matamento",
          "comecaEm": 869.945,
          "acabaEm": 877.008
        },
        {
          "sentenca": "Meu Deus",
          "comecaEm": 877.088,
          "acabaEm": 877.868
        },
        {
          "sentenca": "Especialista sênio em políticas públicas do Observatório do Clima e esse presidente do IBAMA observa que o Amazonas passou Mato Grosso, que tradicionalmente fica à frente",
          "comecaEm": 878.508,
          "acabaEm": 886.371
        },
        {
          "sentenca": "Então aqui o tamanho do de matamento",
          "comecaEm": 886.811,
          "acabaEm": 888.612
        },
        {
          "sentenca": "Joia",
          "comecaEm": 888.672,
          "acabaEm": 888.932
        },
        {
          "sentenca": "Anúncio da China e dos Estados Unidos na COP, pressiona o agronegócio brasileiro duas linhas, calma, brasileiro, ponto, duas linhas da declaração conjunta assinada pelos Estados Unidos e China durante a COP26, colocam o agronegócio brasileiro sob pressão",
          "comecaEm": 890.085,
          "acabaEm": 907.115
        },
        {
          "sentenca": "Os dois países, os maiores parceiros comerciais do Brasil se comprometeram a apoiar, a eliminação do desmatamento ilegal global via importações, um objetivo que atinge em cheio as exportações agrícolas do país",
          "comecaEm": 907.655,
          "acabaEm": 922.822
        },
        {
          "sentenca": "A China responde por cerca de 30% das vendas do Brasil, sobretudo de matérias-primas, commodities",
          "comecaEm": 923.283,
          "acabaEm": 929.705
        },
        {
          "sentenca": "Se Pequim decidir exigir certificação ambiental da soja ou carne, o setor terá urgência em acelerar a rastreabilidade da cadeia, que permite identificar se determinado produto não foi cultivado sobre áreas desmatadas ilegalmente",
          "comecaEm": 930.105,
          "acabaEm": 946.068
        },
        {
          "sentenca": "A Declaração Sino-Americana, da COP, alega que a eliminação do desmatamento ilegal global contribuiria significativamente para o esforço de atingir as metas do Acordo de Paris",
          "comecaEm": 946.748,
          "acabaEm": 959.291
        },
        {
          "sentenca": "Então tem essa demanda, China e Estados Unidos, e a necessidade de a gente combater o desmatamento ilegal",
          "comecaEm": 960.029,
          "acabaEm": 966.712
        },
        {
          "sentenca": "Mato Grosso registra o maior índice de desmatamento na Amazônia nos últimos dez anos",
          "comecaEm": 968.653,
          "acabaEm": 973.095
        },
        {
          "sentenca": "Ponto",
          "comecaEm": 973.316,
          "acabaEm": 973.696
        },
        {
          "sentenca": "A análise foi feita pelo Instituto Centro de Vida com base em dados do projeto de monitoramento do desmatamento na Amazônia",
          "comecaEm": 974.116,
          "acabaEm": 981.239
        },
        {
          "sentenca": "Joia",
          "comecaEm": 982.04,
          "acabaEm": 982.32
        },
        {
          "sentenca": "Quais são as consequências do desmatamento na produtividade do Brasil?",
          "comecaEm": 983.611,
          "acabaEm": 995.021
        },
        {
          "sentenca": "Consequência na produtividade do ponto de vista ambiental, D1 por exemplo, D2 na economia, porque aqui ele especifica produtividade",
          "comecaEm": 995.041,
          "acabaEm": 1008.433
        },
        {
          "sentenca": "Então eu preciso, primeiro, começar organizando a minha cabeça para entender o que é que eu vou colocar como ideia central do D1 e o que é que eu vou colocar como ideia central do D2. Segredo",
          "comecaEm": 1009.534,
          "acabaEm": 1022.6
        },
        {
          "sentenca": "Primeira coisa",
          "comecaEm": 1022.881,
          "acabaEm": 1025.021
        },
        {
          "sentenca": "A base do texto argumentativo, a base, isso aqui é tarefa de casa, vocês, quem quiser e já conseguir escrever, faz essa redação, tem aí o tema na plataforma, tá?",
          "comecaEm": 1025.041,
          "acabaEm": 1037.688
        },
        {
          "sentenca": "Base",
          "comecaEm": 1042.942,
          "acabaEm": 1043.422
        },
        {
          "sentenca": "Tenta pensar no seguinte",
          "comecaEm": 1044.182,
          "acabaEm": 1045.542
        },
        {
          "sentenca": "À medida que o curso for andando, a gente vai inventando coisa boa, certo?",
          "comecaEm": 1048.383,
          "acabaEm": 1054.085
        },
        {
          "sentenca": "Vê aqui a introdução, primeiro parágrafo de desenvolvimento, segundo parágrafo de desenvolvimento, conclusão",
          "comecaEm": 1055.205,
          "acabaEm": 1063.307
        },
        {
          "sentenca": "Vi o tema, vi o tema",
          "comecaEm": 1064.027,
          "acabaEm": 1065.648
        },
        {
          "sentenca": "Eu vou dizer quais nomes eu uso",
          "comecaEm": 1066.768,
          "acabaEm": 1069.489
        },
        {
          "sentenca": "pra montar essa redação, tá?",
          "comecaEm": 1070.79,
          "acabaEm": 1072.812
        },
        {
          "sentenca": "Não significa que o que você usa tá errado",
          "comecaEm": 1074.953,
          "acabaEm": 1078.396
        },
        {
          "sentenca": "Significa que é só diferente do que eu coloco, tá?",
          "comecaEm": 1078.616,
          "acabaEm": 1081.919
        },
        {
          "sentenca": "Tese",
          "comecaEm": 1083.14,
          "acabaEm": 1083.78
        },
        {
          "sentenca": "Ok",
          "comecaEm": 1084.741,
          "acabaEm": 1085.061
        },
        {
          "sentenca": "No D1, que é o tópico, frasal",
          "comecaEm": 1086.002,
          "acabaEm": 1091.566
        },
        {
          "sentenca": "1. Ampliação",
          "comecaEm": 1091.576,
          "acabaEm": 1097.47
        },
        {
          "sentenca": "Eu vou explicar o que é",
          "comecaEm": 1098.251,
          "acabaEm": 1099.272
        },
        {
          "sentenca": "do tópico",
          "comecaEm": 1104.503,
          "acabaEm": 1122.629
        },
        {
          "sentenca": "Olha que legal",
          "comecaEm": 1122.729,
          "acabaEm": 1123.289
        },
        {
          "sentenca": "Depois eu vou ensinar como faz, tá?",
          "comecaEm": 1124.29,
          "acabaEm": 1125.63
        },
        {
          "sentenca": "Tem várias possibilidades de a gente fazer isso, certo?",
          "comecaEm": 1202.754,
          "acabaEm": 1206.808
        },
        {
          "sentenca": "Várias possibilidades",
          "comecaEm": 1211.925,
          "acabaEm": 1213.526
        },
        {
          "sentenca": "Por favor, gente, o que mais eu imploro na vida é tenta começar agora a colocar em prática tudo o que a gente vai falar durante todo o processo, pelo amor de Deus",
          "comecaEm": 1214.407,
          "acabaEm": 1228.336
        },
        {
          "sentenca": "Não adianta a gente ter as melhores ideias do planeta se você não vai colocar em prática, tá?",
          "comecaEm": 1228.976,
          "acabaEm": 1236.502
        },
        {
          "sentenca": "Então, se você emperrou, não sabe, quando for fazer a redação, Você pode colocar lá as observações para o corretor, entendeu?",
          "comecaEm": 1236.522,
          "acabaEm": 1247.849
        },
        {
          "sentenca": "Tipo, preciso que veja tal coisa, não sei tal coisa, não tenho a menor ideia, tô voando",
          "comecaEm": 1248.229,
          "acabaEm": 1254.373
        },
        {
          "sentenca": "Porque tudo isso aqui eu vou mostrar, mas eu dei nome e a gente vai dar cores, como sendo uma forma de você olhar para o texto, identificar o que tem e o que falta",
          "comecaEm": 1254.853,
          "acabaEm": 1267.419
        },
        {
          "sentenca": "Pegando aí redação do Enem corrigida, com nota, primeira coisa a fazer, peguei a redação, peguei",
          "comecaEm": 1269.578,
          "acabaEm": 1276.979
        },
        {
          "sentenca": "O que é que tem, o que é que falta?",
          "comecaEm": 1277.459,
          "acabaEm": 1280.18
        },
        {
          "sentenca": "Ninguém escreve tão bem a ponto de não ter o que melhorar, mas vamos lá, vê só",
          "comecaEm": 1282.16,
          "acabaEm": 1286.021
        },
        {
          "sentenca": "Peguei o tema, peguei impacto do desmatamento na produtividade do Brasil, joia",
          "comecaEm": 1286.621,
          "acabaEm": 1291.502
        }
      ]
    },
    {
      "titulo": "Dicas Práticas para Estudo e Redação",
      "indice": 5,
      "foiVisto": false,
      "sentencas": [
        {
          "sentenca": "E aí eu imagino, qual é a área do conhecimento que eu vou usar para começar?",
          "comecaEm": 1292.142,
          "acabaEm": 1297.023
        },
        {
          "sentenca": "Essa área do conhecimento, ela tem que ter relação com o que eu vou discutir",
          "comecaEm": 1297.943,
          "acabaEm": 1303.487
        },
        {
          "sentenca": "Ou seja, tem que ser alguma questão ambiental, gente",
          "comecaEm": 1303.627,
          "acabaEm": 1308.231
        },
        {
          "sentenca": "Filme, música, pintura, escultura, teórico, ambientalista, tem que ter",
          "comecaEm": 1309.152,
          "acabaEm": 1314.236
        },
        {
          "sentenca": "E aí eu vou dizer, na transição, qual é a lógica entre o que eu coloquei no contexto e o que eu vou anunciar como tese",
          "comecaEm": 1315.156,
          "acabaEm": 1323.683
        },
        {
          "sentenca": "Essa transição é uma forma de costurar, e muitos de vocês não fazem isso, e se você não faz isso, você pula do contexto para a ideia",
          "comecaEm": 1325.215,
          "acabaEm": 1338.002
        },
        {
          "sentenca": "E aí termina não tendo a costura da linha de raciocínio, entendeu?",
          "comecaEm": 1338.383,
          "acabaEm": 1342.285
        },
        {
          "sentenca": "Então eu preciso colocar algo que tenha sentido",
          "comecaEm": 1342.685,
          "acabaEm": 1345.847
        },
        {
          "sentenca": "Normalmente, quando eu escolho o contexto, eu escolho para dizer que o que se abordou aqui É a mesma coisa que acontece hoje",
          "comecaEm": 1346.427,
          "acabaEm": 1355.74
        },
        {
          "sentenca": "na ficção, ou em algum momento histórico, ou em outro lugar, é a mesma coisa",
          "comecaEm": 1356.875,
          "acabaEm": 1362.8
        },
        {
          "sentenca": "Aqui hoje acontece a mesma coisa, ou o contrário",
          "comecaEm": 1363.121,
          "acabaEm": 1365.503
        },
        {
          "sentenca": "Eu quero dizer que acontece aqui, e na transição eu digo que, apesar de estar no espaço cinematográfico, hoje percebe-se tal coisa",
          "comecaEm": 1365.963,
          "acabaEm": 1374.991
        },
        {
          "sentenca": "Então é como se a transição costurasse o que está no começo da introdução com o que está no final da introdução",
          "comecaEm": 1375.011,
          "acabaEm": 1382.818
        },
        {
          "sentenca": "Gente, no final da introdução está a tese",
          "comecaEm": 1383.859,
          "acabaEm": 1387.741
        },
        {
          "sentenca": "A tese sempre fica, em um período, no final da introdução",
          "comecaEm": 1388.501,
          "acabaEm": 1394.843
        },
        {
          "sentenca": "Gente, a tese é o resumo da ideia central",
          "comecaEm": 1395.824,
          "acabaEm": 1401.826
        },
        {
          "sentenca": "Sempre",
          "comecaEm": 1403.186,
          "acabaEm": 1403.646
        },
        {
          "sentenca": "E uma coisa, é da tese que nascerão os tópicos 1 e 2. E essa tese pode ser colocada de duas formas que eu vou mostrar, tá bem?",
          "comecaEm": 1404.827,
          "acabaEm": 1419.578
        },
        {
          "sentenca": "Então assim, eu boto a tese e se eu digo aqui que eu vou analisar a origem e o efeito, vai estar errado se o tema for impacto, certo?",
          "comecaEm": 1420.94,
          "acabaEm": 1431.051
        },
        {
          "sentenca": "Mas se eu disser, é fundamental entender os impactos tanto ambientais quanto econômicos, perfeito",
          "comecaEm": 1431.772,
          "acabaEm": 1438.678
        },
        {
          "sentenca": "Só que no meu projeto, se eu digo que eu vou discutir o impacto ambiental e econômico, pela linha de raciocínio é no D1 ambiental, no D2 econômico",
          "comecaEm": 1439.339,
          "acabaEm": 1451.39
        },
        {
          "sentenca": "E os textos de apoio servem para quê?",
          "comecaEm": 1454.14,
          "acabaEm": 1456.503
        },
        {
          "sentenca": "Para dar um direcionamento a respeito de como é a situação atual",
          "comecaEm": 1456.863,
          "acabaEm": 1460.547
        },
        {
          "sentenca": "Para despertar na gente, por exemplo, que a situação de desmatamento legal está muito grande, a COP26, que é um acordo para o clima, a Agenda 2030, exige que o Brasil se posicione e a gente tem um grande problema que é o que acontece com o agronegócio na parte, não a parte legal, mas a parte como a coisa é feita de forma ilegal",
          "comecaEm": 1461.087,
          "acabaEm": 1484.04
        },
        {
          "sentenca": "Então, eu não vou usar o repertório dos textos de apoio, mas eu preciso ter uma visão crítica",
          "comecaEm": 1484.08,
          "acabaEm": 1490.003
        },
        {
          "sentenca": "Tipo, visão crítica não é meter pau",
          "comecaEm": 1490.643,
          "acabaEm": 1492.464
        },
        {
          "sentenca": "Visão crítica é, eu preciso estudar um pouco, eu preciso, claro que eu vou dar tudo de que você precisa para fazer a redação, eu juro que eu vou dar",
          "comecaEm": 1492.784,
          "acabaEm": 1502.009
        },
        {
          "sentenca": "Mas eu não vou esperar somente um pouco mais na frente para poder dar isso a você",
          "comecaEm": 1502.749,
          "acabaEm": 1507.352
        },
        {
          "sentenca": "Eu preciso que você comece a colocar a cabeça para funcionar, fechado?",
          "comecaEm": 1507.372,
          "acabaEm": 1512.114
        },
        {
          "sentenca": "Depois que você apresenta o tópico, você vai ampliar",
          "comecaEm": 1513.275,
          "acabaEm": 1517.477
        },
        {
          "sentenca": "O que é ampliar?",
          "comecaEm": 1518.017,
          "acabaEm": 1518.837
        },
        {
          "sentenca": "Por quê?",
          "comecaEm": 1519.318,
          "acabaEm": 1519.738
        },
        {
          "sentenca": "você acha tal coisa, sempre",
          "comecaEm": 1520.975,
          "acabaEm": 1522.997
        },
        {
          "sentenca": "Por que isso aqui?",
          "comecaEm": 1523.597,
          "acabaEm": 1525.179
        },
        {
          "sentenca": "Se você diz que o maior impacto ambiental diz respeito ao comprometimento de espécies, diz respeito ao comprometimento de qualidade do ar, você tem que dizer por quê, sem transformar a redação numa aula de geografia",
          "comecaEm": 1526.24,
          "acabaEm": 1539.832
        },
        {
          "sentenca": "E aqui você vai ver, você disse por quê, e você fundamenta Sugestão",
          "comecaEm": 1540.693,
          "acabaEm": 1549.232
        },
        {
          "sentenca": "Retomando de preferência o contexto",
          "comecaEm": 1549.972,
          "acabaEm": 1554.153
        },
        {
          "sentenca": "Isso aqui é bem difícil, mas é bem legal",
          "comecaEm": 1554.173,
          "acabaEm": 1556.574
        },
        {
          "sentenca": "E pode acrescentar um repertório de algo hoje",
          "comecaEm": 1557.394,
          "acabaEm": 1562.215
        },
        {
          "sentenca": "Eu vou mostrar, juro que eu vou mostrar",
          "comecaEm": 1562.535,
          "acabaEm": 1564.155
        },
        {
          "sentenca": "Eu só quero que vocês leiam isso entendendo o passo a passo",
          "comecaEm": 1564.476,
          "acabaEm": 1568.196
        },
        {
          "sentenca": "Ah, eu tenho que fechar o D1. Se você acha que está vago, pode fechar",
          "comecaEm": 1569.337,
          "acabaEm": 1573.837
        },
        {
          "sentenca": "Lembrando que você tem 30 linhas",
          "comecaEm": 1574.178,
          "acabaEm": 1575.498
        },
        {
          "sentenca": "E quantas linhas pra introdução, desenvolvimento e conclusão?",
          "comecaEm": 1576.743,
          "acabaEm": 1581.19
        },
        {
          "sentenca": "Você só não pode, não pode, enlouquecer com introdução gigante, igual a mim, e conclusão minúscula",
          "comecaEm": 1581.791,
          "acabaEm": 1589.524
        },
        {
          "sentenca": "É preciso que a conclusão cumpra a função",
          "comecaEm": 1591.033,
          "acabaEm": 1593.534
        },
        {
          "sentenca": "É preciso que a introdução cumpra a função",
          "comecaEm": 1593.934,
          "acabaEm": 1596.155
        },
        {
          "sentenca": "A gente vai tentar, tentar chegar ao máximo, máximo em sete linhas na introdução",
          "comecaEm": 1596.575,
          "acabaEm": 1602.378
        },
        {
          "sentenca": "O meu trabalho este ano com vocês é pra isso, certo?",
          "comecaEm": 1602.718,
          "acabaEm": 1605.699
        },
        {
          "sentenca": "Pra gente não comprometer os desenvolvimentos",
          "comecaEm": 1606.059,
          "acabaEm": 1608.04
        }
      ]
    },
    {
      "titulo": "Encerramento e Considerações Finais",
      "indice": 6,
      "foiVisto": false,
      "sentencas": [
        {
          "sentenca": "Conclusão também no máximo sete, tá?",
          "comecaEm": 1608.08,
          "acabaEm": 1613.742
        },
        {
          "sentenca": "E a gente vê no máximo sete",
          "comecaEm": 1613.762,
          "acabaEm": 1615.783
        },
        {
          "sentenca": "E aí eu vou ter, calma, deixa eu fazer a conta, 30, 7, 7, 14, 16 linhas, é isso",
          "comecaEm": 1616.784,
          "acabaEm": 1623.308
        },
        {
          "sentenca": "Muito inteligente eu sou, acho que é isso",
          "comecaEm": 1624.549,
          "acabaEm": 1628.431
        },
        {
          "sentenca": "8, 8, 9, 7, não tem uma regra, não tem",
          "comecaEm": 1628.441,
          "acabaEm": 1630.693
        },
        {
          "sentenca": "Ah, mas 7 linhas eu acho muito",
          "comecaEm": 1630.713,
          "acabaEm": 1632.774
        },
        {
          "sentenca": "Pode menos",
          "comecaEm": 1632.994,
          "acabaEm": 1633.595
        },
        {
          "sentenca": "Ah, eu faço 8 linhas",
          "comecaEm": 1633.935,
          "acabaEm": 1634.915
        },
        {
          "sentenca": "Não tem problema",
          "comecaEm": 1635.116,
          "acabaEm": 1636.236
        },
        {
          "sentenca": "Isso aqui é somente uma média pra gente não comprometer outras partes do texto, certo?",
          "comecaEm": 1636.256,
          "acabaEm": 1641.9
        },
        {
          "sentenca": "Botei o tópico 2, jóia",
          "comecaEm": 1643.028,
          "acabaEm": 1644.789
        },
        {
          "sentenca": "Na hora de colocar o tópico 2, eu preciso voltar pra tese, pra saber se eu abordei o 1 aqui e abordei o 2 aqui",
          "comecaEm": 1644.929,
          "acabaEm": 1656.895
        },
        {
          "sentenca": "Eu vou explicar o tópico 2 e eu vou dizer, fundamentar, gente, é dizer assim, ó, o que eu acho tem sentido por causa disso",
          "comecaEm": 1657.816,
          "acabaEm": 1667.521
        },
        {
          "sentenca": "Fundamentar é credibilizar",
          "comecaEm": 1667.921,
          "acabaEm": 1670.323
        },
        {
          "sentenca": "o ponto de vista",
          "comecaEm": 1671.043,
          "acabaEm": 1671.903
        },
        {
          "sentenca": "Eu não acho isso do nada, eu acho por causa de tal coisa",
          "comecaEm": 1672.563,
          "acabaEm": 1676.204
        },
        {
          "sentenca": "Não adianta meter ranking de felicidade sem ter nada a ver, vamos esquecer ranking de felicidade",
          "comecaEm": 1676.904,
          "acabaEm": 1682.665
        },
        {
          "sentenca": "12ª maior economia, pelo amor de Deus, não, não vamos",
          "comecaEm": 1682.675,
          "acabaEm": 1687.326
        },
        {
          "sentenca": "A gente vai aprender outras coisas que tenham sentido e a gente vai colocar isso dentro de um contexto",
          "comecaEm": 1687.747,
          "acabaEm": 1694.108
        },
        {
          "sentenca": "A gente não vai sair cagando, desculpe o cagando aí, mas é mais ou menos isso geral",
          "comecaEm": 1694.148,
          "acabaEm": 1699.589
        },
        {
          "sentenca": "O repertório para o segundo desenvolvimento precisa ser mais atual sempre, sempre",
          "comecaEm": 1700.909,
          "acabaEm": 1708.675
        },
        {
          "sentenca": "Ideia para deixar tudo mais prático e não ter fuga de tema, não ter problema com a ausência de ideia central",
          "comecaEm": 1709.075,
          "acabaEm": 1717.741
        },
        {
          "sentenca": "No lugar de retomar aqui a tese, você vai retomar o tema, dizendo que os efeitos são graves, por exemplo, E aí você pode, se quiser, somar tema e tese",
          "comecaEm": 1718.102,
          "acabaEm": 1729.32
        },
        {
          "sentenca": "O tema é o assunto e a tese é isso aqui",
          "comecaEm": 1729.8,
          "acabaEm": 1733.361
        },
        {
          "sentenca": "No caso do Enem tem a proposta de intervenção, que a gente vai aprender, e tem o fechamento, de novo, retomando esse contexto",
          "comecaEm": 1734.542,
          "acabaEm": 1744.627
        },
        {
          "sentenca": "Então vê, a minha loucura no final do ano, minha loucura, passado, minha loucura foi meter esse repertório que deu super certo, só que eu pego esse contexto, eu boto aqui de outra forma, vocês vão ver como, e eu coloco aqui, mas sem repetir, entendeu?",
          "comecaEm": 1744.747,
          "acabaEm": 1768.289
        },
        {
          "sentenca": "Então, fica muito interessante, porque é uma forma que eu tenho de meio que dizer que eu tenho um projeto de texto, entendeu?",
          "comecaEm": 1768.329,
          "acabaEm": 1774.952
        },
        {
          "sentenca": "Vou só desligar, que tá muito frio",
          "comecaEm": 1774.972,
          "acabaEm": 1776.213
        },
        {
          "sentenca": "Tudo bem?",
          "comecaEm": 1777.256,
          "acabaEm": 1777.656
        },
        {
          "sentenca": "É uma forma que eu tenho de dizer, ei, ei, eu sei o que eu tô falando, eu tenho um projeto de texto, preste atenção, não disse por dizer",
          "comecaEm": 1778.276,
          "acabaEm": 1785.799
        },
        {
          "sentenca": "Então, quando a gente faz isso, a gente consegue ter uma propriedade maior em relação ao que a gente tá fazendo",
          "comecaEm": 1786.279,
          "acabaEm": 1792.661
        },
        {
          "sentenca": "Beleza?",
          "comecaEm": 1792.941,
          "acabaEm": 1793.281
        },
        {
          "sentenca": "Então, a base da argumentação é essa, certo?",
          "comecaEm": 1793.321,
          "acabaEm": 1798.063
        },
        {
          "sentenca": "Deixa eu só mostrar a vocês uma coisa que é importante, tô já acabando",
          "comecaEm": 1798.783,
          "acabaEm": 1804.445
        },
        {
          "sentenca": "A gente tem aqui duas introduções, e aí eu vou mostrar a vocês quais são as formas mais diretas de tese",
          "comecaEm": 1806.642,
          "acabaEm": 1814.887
        },
        {
          "sentenca": "Veja",
          "comecaEm": 1815.067,
          "acabaEm": 1815.427
        },
        {
          "sentenca": "Ainda na segunda metade do século XX, Andy Warhol produziu a obra Latas de Sopa Cupbell, sendo símbolo do movimento artístico pop-art",
          "comecaEm": 1816.007,
          "acabaEm": 1825.353
        },
        {
          "sentenca": "A tela, por meio da massificação da lata de sopa, criticou a cultura consumista intrínseca à sociedade, trazendo o ideal de arte como objeto de consumo, já abordado pelos teóricos da Escola de Frankfurt",
          "comecaEm": 1825.973,
          "acabaEm": 1840.865
        },
        {
          "sentenca": "Apesar de quase um século tendo se passado, percebe-se que a sociedade atual ainda é vinculada a tal consumismo exacerbado, motivado tanto pelo desejo de homogeneização social quanto pela vontade de ascensão e de poder",
          "comecaEm": 1841.783,
          "acabaEm": 1860.737
        },
        {
          "sentenca": "Vê",
          "comecaEm": 1860.917,
          "acabaEm": 1861.097
        },
        {
          "sentenca": "Colocando em prática, a gente tem aqui o contexto, E aqui, veja só, mentira, contexto não",
          "comecaEm": 1862.478,
          "acabaEm": 1872.459
        },
        {
          "sentenca": "Eu tenho até aqui o contexto",
          "comecaEm": 1872.599,
          "acabaEm": 1874.741
        },
        {
          "sentenca": "Eu quis começar com a obra de arte de Andy Warhol, Joia",
          "comecaEm": 1875.362,
          "acabaEm": 1879.466
        },
        {
          "sentenca": "E eu explico",
          "comecaEm": 1879.706,
          "acabaEm": 1880.507
        },
        {
          "sentenca": "Não tem uma regra de dizer que tem que ter tantos períodos, não",
          "comecaEm": 1882.605,
          "acabaEm": 1885.487
        },
        {
          "sentenca": "Tem que ser uma coisa que tenha sentido",
          "comecaEm": 1885.647,
          "acabaEm": 1888.169
        },
        {
          "sentenca": "Por isso que quando as pessoas dizem, vou começar sempre com tal livro, não dá certo",
          "comecaEm": 1888.729,
          "acabaEm": 1893.493
        },
        {
          "sentenca": "Tenta pegar nas aulas de artes, tudo o que eu faço no final de cada aula, vai colocando no teu caderno de redação",
          "comecaEm": 1894.234,
          "acabaEm": 1903.021
        },
        {
          "sentenca": "em determinado tema, tipo meio ambiente, questões sociais, ou então, de repente, por estética, entendeu?",
          "comecaEm": 1904.064,
          "acabaEm": 1911.006
        },
        {
          "sentenca": "Arte primitiva, bota lá",
          "comecaEm": 1911.406,
          "acabaEm": 1914.927
        },
        {
          "sentenca": "Depende muito de como você quer",
          "comecaEm": 1915.807,
          "acabaEm": 1916.847
        },
        {
          "sentenca": "Arte egípcia, coloca lá",
          "comecaEm": 1916.907,
          "acabaEm": 1918.468
        },
        {
          "sentenca": "Arte grega, coloca lá",
          "comecaEm": 1918.948,
          "acabaEm": 1920.368
        },
        {
          "sentenca": "Idade média",
          "comecaEm": 1920.528,
          "acabaEm": 1921.388
        },
        {
          "sentenca": "E você vai meio que abrindo a cabeça, entendendo o macro e como você pode usar",
          "comecaEm": 1922.108,
          "acabaEm": 1926.79
        },
        {
          "sentenca": "Aqui eu explico e coloco aqui",
          "comecaEm": 1928.55,
          "acabaEm": 1930.991
        },
        {
          "sentenca": "Isso aqui é tudo",
          "comecaEm": 1931.031,
          "acabaEm": 1931.851
        },
        {
          "sentenca": "Cadê?",
          "comecaEm": 1931.871,
          "acabaEm": 1932.571
        },
        {
          "sentenca": "A tela, lá, lá, lá, explico, trazendo o ideal de arte como objeto de consumo, joia",
          "comecaEm": 1935.722,
          "acabaEm": 1942.527
        },
        {
          "sentenca": "Aqui não foi feita uma transição gigante, mas vê, apesar de quase um século tendo se passado, vê, eu pego isso aqui, para dizer que o que acontece hoje é a mesma coisa",
          "comecaEm": 1944.188,
          "acabaEm": 1961.327
        },
        {
          "sentenca": "Então, na transição, aqui ela está bem rápida, mas normalmente eu tenho um contexto e a explicação no próprio contexto, eu tenho a transição em outro período e a tese em outro período",
          "comecaEm": 1961.347,
          "acabaEm": 1971.79
        },
        {
          "sentenca": "Mas isso não é uma regra",
          "comecaEm": 1972.45,
          "acabaEm": 1975.071
        },
        {
          "sentenca": "Eu tenho que entender o que é regra e eu tenho que entender o que é algo que me deixa livre Regra é, tem que ter ideia central clara na introdução, tem que ter",
          "comecaEm": 1975.091,
          "acabaEm": 1987.424
        },
        {
          "sentenca": "Vê",
          "comecaEm": 1987.504,
          "acabaEm": 1987.644
        },
        {
          "sentenca": "Percebe-se que a sociedade atual ainda é vinculada a tal consumismo, ou seja, mesmo o século tendo se passado, O consumismo de lá ainda acontece aqui, joia",
          "comecaEm": 1989.527,
          "acabaEm": 2008.603
        },
        {
          "sentenca": "Essa tese é uma tese mais comum, diz assim, motivado tanto pelo desejo de homogeneização social, quanto pela vontade de ascensão e de poder",
          "comecaEm": 2009.364,
          "acabaEm": 2025.378
        },
        {
          "sentenca": "Gente, quando é na ordem direta, tanto quanto, não tem vírgula",
          "comecaEm": 2026.316,
          "acabaEm": 2031.021
        },
        {
          "sentenca": "Só vai ter vírgula se disser tanto pelo desejo de tal coisa, motivado por não sei o que, não sei o que, quanto, aí vai ter",
          "comecaEm": 2031.901,
          "acabaEm": 2041.471
        },
        {
          "sentenca": "Vê só",
          "comecaEm": 2041.511,
          "acabaEm": 2041.871
        },
        {
          "sentenca": "Desejo de homogeneização social, vai ser a ideia central do D1. Vontade de ascensão e de poder, ideia central do D2. Por mais que aqui esteja certo, eu não gosto muito desse tipo de introdução, desse tipo de tese, não está errado",
          "comecaEm": 2042.752,
          "acabaEm": 2063.424
        },
        {
          "sentenca": "Mas eu acho que muita gente usa",
          "comecaEm": 2063.864,
          "acabaEm": 2067.266
        },
        {
          "sentenca": "E eu acho que quando a gente começa o D1, a gente sabe que tá falando a mesma coisa, entendeu?",
          "comecaEm": 2068.558,
          "acabaEm": 2076.105
        },
        {
          "sentenca": "Então, tá certo, eu já explicito D1 e D2, certo?",
          "comecaEm": 2076.764,
          "acabaEm": 2083.03
        },
        {
          "sentenca": "Já dizendo qual é a motivação ou qual é o efeito, zero problema, zero",
          "comecaEm": 2083.491,
          "acabaEm": 2090.857
        },
        {
          "sentenca": "Ou eu posso fazer isso aqui",
          "comecaEm": 2090.877,
          "acabaEm": 2092.839
        },
        {
          "sentenca": "Se, por um lado, o literato brasileiro Aloísio Azevedo conseguiu analisar e estudar o processo de favelização da sua época ao escrever a obra O Cortiço, por outro, sem vírgula, a realidade habitacional e de convívio social conflitante descrita se torna atemporal e se confunde com o atual momento dessas comunidades",
          "comecaEm": 2094.277,
          "acabaEm": 2128.557
        },
        {
          "sentenca": "Por mais que se trate de uma obra do fim do século XIX, olha a transição",
          "comecaEm": 2129.097,
          "acabaEm": 2133.259
        },
        {
          "sentenca": "As descrições feitas pelo autor mostram um panorama das atuais favelas e sua grave persistência",
          "comecaEm": 2136.861,
          "acabaEm": 2145.726
        },
        {
          "sentenca": "Eu estou dizendo que é uma obra do fim do século XIX, eu expliquei aqui que é uma obra literária, e eu já disse que se confunde com o atual momento",
          "comecaEm": 2146.306,
          "acabaEm": 2159.436
        },
        {
          "sentenca": "E digo que, por mais que se trate de uma obra, é um problema que persiste",
          "comecaEm": 2160.236,
          "acabaEm": 2164.759
        },
        {
          "sentenca": "Nesse contexto, é válido entender tanto o que ainda motiva a formação de tais conglomerados quanto o impacto deles na organização social do país",
          "comecaEm": 2165.559,
          "acabaEm": 2180.426
        },
        {
          "sentenca": "Ideia central do D1, e ideia central do D2. Fernanda, mas meu professor daqui da minha cidade, meu professor do colégio, ele sempre diz para a tese estar explícita, a tese está explícita",
          "comecaEm": 2180.446,
          "acabaEm": 2195.61
        },
        {
          "sentenca": "Eu estou dizendo na tese que eu vou discutir sobre o que motiva e o impacto",
          "comecaEm": 2196.35,
          "acabaEm": 2203.082
        },
        {
          "sentenca": "Eu só não disse o que é que literalmente motiva",
          "comecaEm": 2203.482,
          "acabaEm": 2206.703
        },
        {
          "sentenca": "Eu posso fazer isso",
          "comecaEm": 2207.464,
          "acabaEm": 2208.944
        },
        {
          "sentenca": "E aí termina sendo um pouco mais difícil fazer isso, porque durante o texto você tem que ter uma cabeça muito boa para explicitar literalmente o que motiva já no começo do D1 e literalmente o que motiva já no começo do D2. Fechado?",
          "comecaEm": 2209.384,
          "acabaEm": 2223.909
        },
        {
          "sentenca": "Tarefa de casa, tentar fazer a redação Para ter noção, se você sabe, eu preciso também, quando você me enviar, eu preciso saber por onde a gente vai caminhar, beleza?",
          "comecaEm": 2224.589,
          "acabaEm": 2238.039
        },
        {
          "sentenca": "Sei o que estou fazendo, preciso que vocês tenham paciência, não desliguem o computador antes de eu me despedir",
          "comecaEm": 2238.899,
          "acabaEm": 2246.105
        },
        {
          "sentenca": "porque eu preciso que vocês me ajudem na divulgação da fase em que a gente se encontra hoje no curso, beleza?",
          "comecaEm": 2246.866,
          "acabaEm": 2254.593
        },
        {
          "sentenca": "Vê só",
          "comecaEm": 2255.133,
          "acabaEm": 2255.593
        },
        {
          "sentenca": "Olha quem tá aqui, nossa galera",
          "comecaEm": 2256.334,
          "acabaEm": 2259.177
        },
        {
          "sentenca": "Esse é nosso time",
          "comecaEm": 2259.837,
          "acabaEm": 2260.878
        },
        {
          "sentenca": "Aê, time!",
          "comecaEm": 2261.619,
          "acabaEm": 2262.299
        },
        {
          "sentenca": "Uhul!",
          "comecaEm": 2263.839,
          "acabaEm": 2264.72
        },
        {
          "sentenca": "Isaac Soares, professor de Física",
          "comecaEm": 2265.2,
          "acabaEm": 2267.402
        },
        {
          "sentenca": "Heitor Salvador, de Geografia e Atualidades",
          "comecaEm": 2268.142,
          "acabaEm": 2270.924
        },
        {
          "sentenca": "Valdemar Santos, professor de Matemática",
          "comecaEm": 2271.324,
          "acabaEm": 2274.347
        },
        {
          "sentenca": "Eusita, maquiada, outra coisa",
          "comecaEm": 2274.847,
          "acabaEm": 2276.768
        },
        {
          "sentenca": "Rodrigo Bione, com um chapéu muito legal",
          "comecaEm": 2277.249,
          "acabaEm": 2280.671
        },
        {
          "sentenca": "Não é uma gaia, é um chapéu",
          "comecaEm": 2281.191,
          "acabaEm": 2282.853
        },
        {
          "sentenca": "Uma das pessoas mais inteligentes que eu conheço",
          "comecaEm": 2283.933,
          "acabaEm": 2285.595
        },
        {
          "sentenca": "História Gerai Brasil",
          "comecaEm": 2285.675,
          "acabaEm": 2286.775
        },
        {
          "sentenca": "Arthur Jones, espetacular de Biologia",
          "comecaEm": 2287.851,
          "acabaEm": 2290.332
        },
        {
          "sentenca": "Pedro Nunes, espetacular de Química",
          "comecaEm": 2290.772,
          "acabaEm": 2293.472
        },
        {
          "sentenca": "E Vivi, espetacular de Filosofia e Sociologia",
          "comecaEm": 2293.612,
          "acabaEm": 2296.493
        },
        {
          "sentenca": "Se você puder, mande o nosso link para as pessoas que você conhece",
          "comecaEm": 2297.373,
          "acabaEm": 2302.334
        },
        {
          "sentenca": "Não me deixe falando só, não, seu palhaço",
          "comecaEm": 2302.594,
          "acabaEm": 2304.314
        },
        {
          "sentenca": "Não me deixe falando só",
          "comecaEm": 2305.515,
          "acabaEm": 2306.295
        },
        {
          "sentenca": "Se você me deixar falando só, você nunca vai passar na vida e nunca vai dar um beijo de boca na vida",
          "comecaEm": 2306.335,
          "acabaEm": 2310.376
        },
        {
          "sentenca": "É assim que a gente consegue convencer as pessoas a nos ouvir",
          "comecaEm": 2310.816,
          "acabaEm": 2313.716
        },
        {
          "sentenca": "O WhatsApp do curso, para tirar alguma dúvida",
          "comecaEm": 2314.816,
          "acabaEm": 2317.077
        },
        {
          "sentenca": "Meu WhatsApp, para tirar alguma dúvida",
          "comecaEm": 2318.84,
          "acabaEm": 2321.783
        },
        {
          "sentenca": "Dúvida do curso é melhor com o WhatsApp do curso, certo?",
          "comecaEm": 2322.903,
          "acabaEm": 2327.907
        },
        {
          "sentenca": "Vê só, a gente está com condição especial, a gente está com desconto",
          "comecaEm": 2329.429,
          "acabaEm": 2333.572
        },
        {
          "sentenca": "Se puderem mandar um link de nossas aulas para algum amigo, você pode escolher os combos",
          "comecaEm": 2334.112,
          "acabaEm": 2339.477
        },
        {
          "sentenca": "Fazendo o super combo, você, se não gostar, devolve até sete dias",
          "comecaEm": 2339.497,
          "acabaEm": 2344.781
        },
        {
          "sentenca": "Uma coisa importante, gente",
          "comecaEm": 2345.281,
          "acabaEm": 2346.761
        },
        {
          "sentenca": "A pessoa que compra o nosso curso, ela ganha o curso completo, que já está lá gravado, do último ano, e a cada semana a gente solta aulas inéditas para poder fazer do curso algo junto com você, de acordo com a sua necessidade, beleza?",
          "comecaEm": 2347.141,
          "acabaEm": 2365.886
        },
        {
          "sentenca": "É isso",
          "comecaEm": 2366.426,
          "acabaEm": 2367.326
        },
        {
          "sentenca": "Vamos fazer redação, mesmo sem saber, sem ter muita confiança",
          "comecaEm": 2367.826,
          "acabaEm": 2371.927
        },
        {
          "sentenca": "Vamos começar",
          "comecaEm": 2372.387,
          "acabaEm": 2373.348
        },
        {
          "sentenca": "É isso, tá?",
          "comecaEm": 2373.368,
          "acabaEm": 2374.728
        },
        {
          "sentenca": "Beijo, obrigada por hoje",
          "comecaEm": 2375.99,
          "acabaEm": 2377.797
        },
        {
          "sentenca": "Vamos embora",
          "comecaEm": 2378.078,
          "acabaEm": 2378.721
        },
        {
          "sentenca": "Valeu",
          "comecaEm": 2379.002,
          "acabaEm": 2379.303
        }
      ]
    }]
}

var x = 0; // Índice para controle de todas as sentenças
var sentencaAtual = sentencas[x];
var destino = document.getElementById("destino");
var numeroExplicacao = -1; // Índice para as explicações de apoio
var video = document.getElementById("video");
var imagemDestaque = document.getElementById("imagemDestaque"); // Referência para o elemento da imagem
var indiceImagem = 1; // Índice para sentenças importantes (destaques) apenas
var estrela = document.getElementById("estrela");
var audio = document.getElementById("audio");
audio.volume = 0.2;
var d = document.getElementById("destinoNav");
var popUp = document.getElementById("popUp");

// var aula = {};
// aula.pacosAula = [];

// // Distribuindo as sentenças entre os 'pacosAula'
// var sentencasFinalidade = sentencas.slice(0, 6); // As primeiras 6 sentenças
// var sentencasRepresentacao = sentencas.slice(6, 12); // Próximas 6 sentenças
// var sentencasResumo = sentencas.slice(12); // Restantes

// // criando os "pacosAula" com títulos e sentenças
// aula.pacosAula.push({
//   titulo: "Finalidade",
//   indice: 0,
//   sentencas: sentencasFinalidade,
//   foiVisto: false
// });

// aula.pacosAula.push({
//   titulo: "Representação Gráfica",
//   indice: 1,
//   sentencas: sentencasRepresentacao,  
//   foiVisto: false
// });

// aula.pacosAula.push({
//   titulo: "Resumo/Revisão",
//   indice: 2,
//   sentencas: sentencasResumo,
//   foiVisto: false
// });

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
    if (popUp.style.display = "block") {
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

function mostrar(p) {
  alert(p)
}

// /////////////////////////
// //////FORMAT TIMES///////
// /////////////////////////

function formatTime(timeInSeconds) {
  if (timeInSeconds === null || timeInSeconds === undefined) return 'N/A';
  var totalSeconds = Math.floor(timeInSeconds);
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

//////////////////////////////////
/////FUNCAO DE LIMPAR PESQUISA////
//////////////////////////////////

function limparPesquisa() {
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').innerHTML = '';
}

////////////////////////////////////////
/////EVENTO DE CLICK LIMPAR PESQUISA////
///////////////////////////////////////

document.getElementById('resetButton').addEventListener('click', limparPesquisa);

// ////////////////////////////
// /////LÓGICA DE PESQUISA////
// //////////////////////////

document.getElementById('searchButton').addEventListener('click', function () {
  var query = document.getElementById('searchInput').value.trim().toLowerCase();
  if (query === '') {
    alert('Por favor, digite uma palavra para pesquisar.');
    return;
  }
  buscarSentencas(query);
});


// /////////////////////////
// ////BUSCAR SENTENCAS/////
// /////////////////////////
``
function buscarSentencas(palavra) {
  // Limpa os resultados anteriores
  var searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = '';

  // Encontra sentenças que contêm a palavra pesquisada
  var resultados = sentencas.filter(function (sentencaObj) {
    return sentencaObj.sentenca.toLowerCase().includes(palavra);
  });

  if (resultados.length === 0) {
    searchResults.innerHTML = '<p>Nenhuma sentença encontrada.</p>';
    return;
  }

  // Exibe os resultados
  resultados.forEach(function (sentencaObj, index) {
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

    resultDiv.addEventListener('click', function () {
      if (podeNavegar) {
        navegarParaSentenca(sentencaObj.indiceGeral);
      } else {
        alert('Não é possível navegar para esta sentença porque o passo de aula correspondente ainda não foi visualizado.');
      }
    });

    searchResults.appendChild(resultDiv);
  });
}


// ADICIONAR PASSO DA AULA AO LADO DA SENTENCA E SEGUNDOS DA SENTENÇA  // FEITO :D  //

// //////////////////////////////
// /////NAVEGAR PARA SENTENCA////
// /////////////////////////////

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
    let imagemPath = `assets/redacao${indiceImagem}.jpg`;  // Caminho dinâmico para sentenças importantes
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
video.addEventListener('timeupdate', function () {
  if (x >= sentencas.length) return;

  sentencaAtual = sentencas[x];
  if (sentencaAtual.changeImage) {
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
  video.playbackRate = 0.9;
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

