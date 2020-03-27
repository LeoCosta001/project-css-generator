
  

# Projeto: CSS Generator

  

## Índice

 **Informações**

- Sobre

- Progresso

 **Como rodar a Aplicação**

- Requisitos

- Como baixar as dependências

- Como iniciar o Servidor

 **Propriedades editáveis**

- Menu de propriedades

- Botões extras

 **Tecnologias utilizadas**

- Front-end

- Back-end

 **Métodos da aplicação**

- Sobre

- Observações

- Lista de Métodos

 **Planos a longo prazo**


## Informações

**Sobre**

- Este é um projeto que visa facilitar a vida dos programadores Front-End.

  

- O objetivo é desenvolver uma "Web Application" que permite o usuário desenvolver rapidamente códigos CSS que estejam relacionados á alguma categoria de propriedades, por exemplo: Gradient, Border, Background, text, etc. (Veja mais logo abaixo em "Informações").

  

- Um ponto crucial deste projeto é desenvolve-lo de maneira que seja possível unir os dois extremos, o "simples" e o "complexo". Porque desta forma as ferramentas implantadas nesta Aplicação serão tão simples de se entender e usar a ponto que os programadores inexperientes consigam usa-lo sem nenhuma dificuldade, porém ainda sim tão completo e versátil a ponto dos programadores com mais experiencia reconhecerem que esta Aplicação realmente é útil para o seu dia-a-dia.

  

- Data de início: 06/03/2020.

  

**Progresso:**

  

- **Fase:** Desenvolvendo métodos para a aplicação.

  

- **Porcentagem:** 6%

  

- **Observação:** Veja os métodos aqui na documentação na parte de "Métodos da Aplicação".

  

## Como rodar a Aplicação

  

**Requisitos:**

  

1. Ter instalado o Node.Js [Download](https://nodejs.org/en/download/)

  

**Como baixar as dependências:**

  

1. Baixe o repositório de: https://github.com/LeoCosta001/project-css-generator.git

  

2. Através do terminal acesse o local onde o repositório foi baixado.

  

3. Agora baixe as dependências digitando no terminal: `npm install`

  

4. Espere o download ser concluído.

  

Pronto!

  

**Como iniciar o Servidor**

  

1. Para iniciar o servidor digite no terminal: `npm run dev`

  

2. Após o servidor ser ligado sem nenhum problema aparecerá no console a mensagem: "Server is listening on port: 3000".

  

3. Agora basta abrir o navegador e acessar o seguinte endereço: "localhost:3000"

  

## Propriedades editáveis

Esta é uma lista das propriedades que poderão ser editadas por esta aplicação.

  

**Menu de propriedades:**

  

- **Texto:** Propriedades e valores que influencial nas fontes.

- color / font-size / font-style / text-shadow / font-family / font-variant / font-weight / font-stretch / letter-spacing / word-spacing.

- **Gradiente**

- (Em produção...)

- **Background**

- (Em produção...)

  

- **Borda**

- (Em produção...)

  

- **Sombra**

- (Em produção...)

  

- **Transformação**

- (Em produção...)

  

- **Coluna**

- (Em produção...)

  

**Botões extras:**

  

- **Informações:** (Mostrará um Pop Up com dicas e informações sobre aquela categoria de propriedade).

  

- **Desfazer:** (Retorna para a configuração padrão daquele conteúdo).

  

- **Configuração:** (Mostrará um Pop Up com algumas configurações secundarias que não serão incluídas na lista de propriedades do gerador (Ex: Cor de fundo da página, Imagem no fundo da página, Tamanho da fonte da página *(para influenciar nos valores do tipo "rem" e "em")*, etc)

  

- **Exemplos:** (Mostrará um Pop Up com alguns exemplos prontos para aquela categoria de propriedade).

  

## Tecnologias utilizadas

**Font-end:**

- HTML 5

- CSS 3 (Em breve Sass)

- JQuery 3.4

- Bootstrap 4.4
 
**Back-end:**

- Node.Js 13.11

- Express 4.17

- Handlebars 4.7

  

## Métodos da aplicação

**Sobre:** Este projeto tem alguns métodos criados para facilitar a adição, remoção e atualização dos valores que são alterados nos elementos < input > do HTML e automaticamente inserir estes valores nas propriedades CSS do "*appView*" *(este é o demonstrador de exemplo que fica no meio da aplicação)* assim como a inclusão automática destes valores no "*cssCodeTextarea*" *( este é o < textarea > que exibe as propriedades e valores que estão sendo usadas atualmente)*.

  

Aqui está listado apenas os métodos que serão usados para modificar diretamente a aplicação, portanto outros métodos que são usados dentro destes métodos (Ex: "*colorConverter.isRGB()*" ou "*colorConverter.isHexadecimal()*" que retornam um Boolean após confirmar que aquele valor é válido) vão ser encontrados todos no arquivo "*methodsForProperties.js*", e lá você encontra informações mais detalhadas sobre cada um dos métodos.

  

**Observações:**

- O termo "*prop*" é uma abreviação de "*property*" (propriedade), os parâmetros que conterem esta nomenclatura se referem a strings com o nome de propriedades CSS (Ex: "font-size", "color", background-color", etc).

- O termo "*valueType*" se refere ao tipo de valor de uma propriedade CSS, a mesma encontrada nos sufixos em valores de medida (Ex: "px", "pt", "vw", "vh", etc).

- O termo "*appView*" se refere a janela central da aplicação onde é possível visualizar em tempo real as alterações feitas. Este seletor pode ser acessado através da propriedade "*allApp.appView".*

- O termo "*cssCodeTextarea*" se refere ao elemento HTML < textarea > exibido no rodapé da aplicação, o qual é responsável por exibir em tempo real todas as declarações (propriedade/valor) CSS. Este seletor pode ser acessado através do método"*cssCodeTextareatextEdit(text)"* (O parâmetro se refere ao texto que será adicionado dentro do Textarea).

**Lista de Métodos:**

> - **allApp.inputValueReset(inputID, value)**
> 
> **Descrição:** Altera o valor dos input ao mesmo tempo que atualiza as propriedades do "appView" e "cssCodeTextarea".
> **Observações:**  Pode ser definido múltiplos parâmetros. Os parâmetros de posições *impares* devem corresponder ao ID ou Class do elemento < input > e os parâmetros de posição *pares* devem corresponder ao novo valor do input.
> **Exemplo:**
>
>     allApp.inputValueReset(
> 	    "#fontSizeValue", "30",
> 	    "#colorValue", "#000000",
>     );

> - **myProp.value**
>
> **Descrição:** Esta é uma propriedade que contém todas as declarações CSS (propriedade/valor) que estiver sendo usada na aplicação naquele momento. As declarações são guardadas  em Strings dentro de uma array, e ela será usada por outros métodos, então toda alteração no "appView" ou no "cssCodeTextArea" deve ser também realizada nesta propriedade.
> **Observações:** Os métodos que adicionam/alteram suas informações sempre verificam se aquela propriedade ja esta presente, e caso esteja então só alteram seus valores, caso contrario então será adicionado um novo valor no final da array.
> **Exemplo:** 
> 
>     console.log(myProp.value);
> **Retorno:** ["font-size: 12pt", "color: #000000"]

> - **myProp.newValue(prop, value, valueType)**
>
> **Descrição:** Edita uma propriedade no "appView" (Se não tiver esta propriedade então ela será adicionada ao fim da lista).
> **Observações:** O ultimo parâmetro só é necessário quando o valor da propriedade tem um sufixo *(Ex: px, pt, %, vw, vh, etc)*.
> **Exemplo:**
> 
>     myProp.newValue("font-size", "30", "px")
 

> - **myProp.removeValue(prop)**
>
> **Descrição:** Remove uma propriedade do "appView" e "cssCodeTextarea".
> **Observações:** O ultimo parâmetro só é necessário quando o valor da propriedade tem um sufixo *(Ex: px, pt, %, vw, vh, etc)*.
> **Exemplo:**
>
>     myProp.removeValue("font-size")

  

> - **colorConverter.hexToRgb(value)**
>
> **Descrição:** Converte um valor de cor "Hexadecimal" para "RGB".
> **Observações:** Pode ser com ou sem Hashtag "#".
> **Exemplo:** 
> 
>     colorConverter.hexToRgb("#FF1919")
> **Retorno:** "rgb(255,025,025)"

> - **colorConverter.rgbToHex(value)**
>
> **Descrição:** Converte um valor de cor "RGB" para "Hexadecimal".
> **Observações:** O valor pode ser uma string com ou sem espaços (Ex: *"rgb(123, 231, 122)"*) ou um array com os 3 valores R, G, B (Ex: *[123, 456, 789]*).
> Se for array os números podem ser String ou Number mas os valores tem que ser entre 0 e 255.
> **Exemplo:** 
>
>     colorConverter.rgbToHex("rgb(255,025,025)");
>     colorConverter.rgbToHex([255, "025", 025]);
> **Retorno:** "#FF1919"

  

> - **colorConverter.inverter(value)**
>
> **Descrição:** Caso o valor inserido seja "RGB" então será convertido para "Hexadecimal", mas caso seja um valor "Hexadecimal" então será convertido para "RGB".
> **Observações:** As regras são as mesmas aplicadas nos métodos "*colorConverter.rgbToHex()*" e "colorConverter.hexToRgb()".
> **Exemplo:** 
>     
>     colorConverter.hexToRgb("#FF1919")
>**Retorno:** "rgb(255,025,025)"

  

## Planos a longo prazo

1. Incluir ferramentas que permitam criar e editar os componentes do Bootstrap.

