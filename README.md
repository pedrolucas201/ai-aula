# Aplicação de Aprendizado Interativo

Este projeto é uma aplicação simples e interativa de aprendizado, projetada para sincronizar um vídeo com conteúdos textuais e proporcionar interação com o usuário por meio de pop-ups e recursos visuais adicionais. Ele destaca sentenças importantes, pausa para confirmação do usuário e torna o aprendizado mais dinâmico e adaptativo.

---

## Funcionalidades

- **Integração com Vídeo**: Um reprodutor de vídeo sincronizado com conteúdos textuais dinâmicos.
- **Perguntas Interativas**: Pausa o vídeo em momentos específicos para confirmar o entendimento do usuário ou oferecer explicações adicionais.
- **Destaque de Sentenças**: Realça sentenças importantes com cores de fundo e animações.
- **Imagens Dinâmicas**: Exibe imagens de apoio relacionadas às sentenças destacadas.
- **Animação de Estrela**: Uma estrela animada aparece em momentos chave para enfatizar.
- **Feedback Sonoro**: Um som é reproduzido em momentos importantes para chamar atenção.

---

## Requisitos

Para executar esta aplicação, você precisará de:

- Um navegador moderno (Chrome, Firefox, Edge ou Safari).
- Um servidor local ou remoto para hospedar os arquivos HTML, CSS e JS.
- Estrutura de pastas:
  ```
  /index.html
  /style.css
  /index.js
  /assets/
      image1.webp
      image2.webp
      image3.webp
      ZalX.gif
      AUDIO-2024-11-18-12-55-54.mp3
  ```

---

## Configuração

1. Clone ou faça o download deste repositório para sua máquina local.
2. Certifique-se de que os arquivos estejam organizados conforme a estrutura de pastas acima.
3. Abra o arquivo `index.html` no navegador ou utilize um servidor local (por exemplo, [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)).

---

## Como Funciona

### Descrição dos Arquivos

- **`index.html`**:
  - Estrutura principal da aplicação.
  - Inclui o reprodutor de vídeo, pop-ups e seções dinâmicas para texto e imagens.

- **`style.css`**:
  - Fornece um tema minimalista e responsivo para a aplicação.
  - Estiliza o contêiner, seção de vídeo, pop-ups, e elementos interativos.

- **`index.js`**:
  - Contém a lógica de sincronização entre o vídeo e os conteúdos textuais.
  - Gerencia pop-ups, transições de sentenças, animações e interações do usuário.

### Lógica Principal

1. **Sincronização do Texto**:
   - As sentenças são exibidas dinamicamente com base no tempo atual do vídeo.
   - Sentenças importantes são destacadas com estilos e visuais exclusivos.

2. **Perguntas Interativas**:
   - Quando uma sentença com `"popup": true` é atingida, o vídeo pausa e uma pergunta é exibida.
   - Opções do usuário:
     - "Sim": O vídeo é retomado normalmente.
     - "Não": A sentença é repetida em velocidade reduzida, com explicações adicionais.

3. **Imagens Dinâmicas**:
   - Imagens relacionadas são exibidas para sentenças destacadas (marcadas com `"destaque": true`).

---

## Personalização

### Adicionar Sentenças
Para adicionar ou modificar sentenças, edite o array `sentencasComDestaques` no arquivo `index.js`:

```javascript
{
  "sentenca": "Texto da nova sentença",
  "qt": 100, // Tamanho da sentença
  "comecaEm": 10.0, // Tempo inicial em segundos
  "acabaEm": 15.0, // Tempo final em segundos
  "destaque": true, // Define se a sentença é importante
  "popup": true, // Define se o pop-up será exibido
  "backgroundColor": "#EAEAEA", // Cor de destaque
  "explicacaoDestaque": [
    {
      "alternativa": 1,
      "explicacao": "Explicação adicional aqui."
    }
  ]
}
```

### Alterar Imagens
Adicione ou substitua as imagens na pasta `assets`. Certifique-se de que os nomes sigam o padrão (`image1.webp`, `image2.webp`, etc.).

### Alterar Estilo
Modifique o arquivo `style.css` para personalizar o tema, cores, fontes ou animações.

---

## Visualização

### Antes da Interação
O vídeo é reproduzido e as sentenças são exibidas dinamicamente na tela.

### Durante a Interação
Quando uma sentença importante é atingida, o vídeo pausa e exibe uma pergunta interativa.

![Exemplo de Pop-Up](assets/image1.webp)

---

## Melhorias Futuras

- **Suporte a Múltiplos Idiomas**: Adicionar opções de idiomas para tornar a aplicação mais acessível.
- **Explicações Mais Ricas**: Incluir recursos visuais mais elaborados, como diagramas e vídeos complementares.
- **Rastreamento de Progresso**: Salvar o progresso e respostas do usuário para análises futuras.

---

## Licença

Este projeto é gratuito para uso e modificação para fins educacionais. Atribuições são bem-vindas.

---

## Agradecimentos

- **Recurso de Vídeo**: Usado para testes interativos.
- **Fonte Poppins**: Utilizada para uma tipografia limpa e moderna.
- **Equipe**: Pedro Gomes e Artur Acioli.