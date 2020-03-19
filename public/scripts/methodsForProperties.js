/* ################################################################################
########### Descrição dos Métodos Globais ##########
OBS: "prop" é abreviação de "property" (propriedade).
OBS: "Métodos internos" são os métodos que foram criados para serem usados por outros métodos.

========== Objeto: "allApp" ==========
Descrição: Possui uma variedade de métodos que envolvem manipular objetos DOM e seus valores.
Lista de Valores:
    - "multipleTextShadowContainer": DContainer com todos os "shadowNumber".
Lista de Métodos:
    - "inputValueReset(oddIDEvenValue)": Reseta valores dos input.
    - "buttonAndDisplayOn(buttonID, ElementID)": Coloca o botão em estado de ativado e liga um display.
    - "buttonAndDisplayOff(buttonID, ElementID)": Coloca o botão em estado de desativado e desliga um display.
    - "attMultiplyTextShadow(object)": Este método é responsavel pelas configurações das sombras adicionais.

========== Objeto: "myProp" ==========
Descrição: Os métodos aqui encontrados estão relacionados a manipulação das propriedades do "appView" e exibição destas propriedades no "cssCodeTextarea"
Lista de Valores:
    - "value": Descrição: Esta array tem que conter todas as propriedades atualizadas do "appView", porque as propriedades que estiverem aqui serão exibidas no "cssCodeTextarea".
Lista de Métodos:
    - "newValue(prop, value, valueType)": Edita uma propriedade no "appView" (Caso não tenha então esta propriedade será adicionada ao fim da lista).
    - "removeValue(prop)": Remove uma propriedade do "appView".
    - "invalidInputNumberValue(inputID)": Acrecenta a classe "invalid--value" quando alguen insere um valor numérico invalido no input e retorna um boolean "true" idicando que o valor é invalido.
Métodos Internos:
    - "propCssAtt(prop, value)": Adiciona um novo valor de propriedade CSS no "appView".

========== Objeto: "colorConverter" ==========
Descrição: Possui uma variedade de métodos usados para converter códigos de cores RGB e Hexadecimal
Lista de Métodos:
    - "inverter(value)": Caso o valor inserido seja "RGB" então será convertido para "Hexadecimal", mas caso seja um valor "Hexadecimal" então será convertido para "RGB"
    - "hexToRgb(value)": Converte um valor de cor "Hexadecimal" para "RGB".
    - "rgbToHex(value)": Converte um valor de cor "RGB" para "Hexadecimal".
    - "valueTypeIdentify(value)": Define pelo "valueType" se o tipo de valor que deve ser retornado é RGB ou Hexadecimal.
    - "inputAtt(string, string): Atualiza os valores do input com 'jscolor' de acordo com o tipo de valor de cor.
    Métodos Internos:
    - "isHexadecimal(value)": Identifica se o valor informado é um código de cores em Hexadecimal válido (sendo string com ou sem Hashtag).
    - "isRGB(value)": Identifica se o valor informado é um código RGB válido (sendo string ou array de 3 index).
    - "sliceRgb(value)": Recortar valores de uma sintaxe RGB em string (Ex: "rgb(012,345,678)") e transforma em uma array com posições numéricas (Ex: [012,345,678])

========== Objeto: "cssCodeTextarea" ==========
OBS: Estes métodos serão usados dentro dos métodos do objeto "myProp"
Descrição: Os métodos aqui encontrados estão relácionados a manipulação das propriedades do "appView" e exibição destas propriedades no "cssCodeTextarea"
Lista de Métodos:
    - "textEdit(string)": Adiiciona uma String no conteúdo do cssCodeTextarea.
    - "propAtt(prop, value)": Edita uma propriedade no "cssCodeTextarea" (Caso não tenha então esta propriedade será adicionada ao fim da lista).
    - "propRemove(prop)": Remove uma propriedade do "cssCodeTextarea".

################################################################################ */


/* ################################################################# */
/* ##########################   allApp   ########################### */
/* ################################################################# */
let allApp = {
    // Selecionando o style do "appView"
    appView: document.querySelector('#textAppView'),

    // Container com todos os "shadowNumber"
    multipleTextShadowContainer: [{
        status: true,
        color: '#000000',
        horizontalValue: '0',
        horizontalType: 'px',
        verticalValue: '0',
        verticalType: 'px',
        blurValue: '00',
        blurType: 'px'
    },
    {
        status: true,
        color: '#000000',
        horizontalValue: '0',
        horizontalType: 'px',
        verticalValue: '0',
        verticalType: 'px',
        blurValue: '00',
        blurType: 'px'
    }],
    /* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
    /* /\/\/\/\/\/\/\/\/\/\/\/  Métodos de Reset  /\/\/\/\/\/\/\/\/\/\/\ */

    /* Descrição: Reseta valores dos input.
    Valores Válidos: 
        - Array (os valores nas posições Pares deverão ser os IDs dos Inputs e nas posições impares deverá ser os novos valore (OBS: Começa a contar do 0). */
    inputValueReset(oddIDEvenValue) {
        oddIDEvenValue.forEach((value, index) => {
            if (index % 2 == 0) {
                $(value).val(oddIDEvenValue[index + 1]);
            }
        });
    },

    /* Descrição: Deixa um botão no estado de ativado e ativa também um display.
    Valores Válidos para "buttonActiveID": 
        - String (ID do botão que será ativado).
    Valores Válidos para "displayActiveID": 
        - String (ID do display que será ativado). */
    buttonAndDisplayOn(buttonActiveID, displayActiveID) {
        $(buttonActiveID).addClass('input--type--button--active');
        $(displayActiveID).slideDown();
    },

    /* Descrição: Deixa um botão no estado de desativado e desativa também um display.
    Valores Válidos para "buttonActiveID": 
        - String (ID do botão que será ativado).
    Valores Válidos para "displayActiveID": 
        - String (ID do display que será ativado). */
    buttonAndDisplayOff(buttonDisableID, displayDisableID) {
        $(buttonDisableID).removeClass('input--type--button--active')
        $(displayDisableID).slideUp();
    },

    /* Descrição: Este método é responsavel pelas configurações das sombras adicionais.
    Valores Válidos: 
        - Object (Veja abaixo quais são as propriedades aceitas neste parâmetro).
    Parâmetros e valores validos: 
        - "shadowNumber" Number (Número do index que será alterado).
        - "shadowConfig" Object (Objeto com todos os valores que substituiram o index escolhido). */
    attMultipleTextShadow(shadowNumber, shadowConfig) {
        // Verificar se é para acrescentar um novo valor ou apenas para ativar o "shadowNumber"
        if (typeof shadowConfig == 'boolean') {
            // Aplicando o valor do boolean "shadowConfig" na propriedade "status" do "shadowNumber"
            this.multipleTextShadowContainer[shadowNumber].status = shadowConfig;
        } else if (typeof shadowConfig == 'object') {
            // String que conterá a concatenação final
            let fullConcat = 'text-shadow: ';
            // Container com o os valores concatenados de cada "shadowNumber"
            let shadowNumberConcatContainer = [];

            // ###### Aplicando as modificações nos valores das propriedades da array "multipleTextShadowContainer" com base no "shadowNumber" passado (o "shadowNumber" representa o index da array)
            this.multipleTextShadowContainer[shadowNumber] = shadowConfig;

            // ###### Separando os valores concatenados de cada "shadowNumber" e colocando na array "shadowNumberConcatContainer"
            this.multipleTextShadowContainer.forEach((value) => {
                if (value.status == true) {
                    shadowNumberConcatContainer.push(`${value.horizontalValue}${value.horizontalType} ${value.verticalValue}${value.verticalType} ${value.blurValue}${value.blurType} ${value.color}`)
                };
            });

            // ###### Pegando os valores concatenados da array"shadowNumberConcatContainer" e criando uma string final na variavel "fullConcat"
            fullConcat += shadowNumberConcatContainer.join(', ');

            return fullConcat;
        };
    }
};


/* ################################################################# */
/* ##########################   myProp   ########################### */
/* ################################################################# */

let myProp = {
    /* Descrição: Esta array tem que conter todas as propriedades atualizadas do "appView", porque as propriedades que estiverem aqui serão exibidas no "cssCodeTextarea" */
    value: [],

    /* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
    /* /\/\/\/\/\/\/\/\/\/\/\  Métodos Externos  /\/\/\/\/\/\/\/\/\/\/\/ */

    /* Descrição: Edita uma propriedade do "appView" e no "cssCodeTextarea" (Caso não tenha então esta propriedade será adicionada ao fim da lista).
    Valores Válidos para "propName": 
        - String (nome da propriedade, ex: "font-size").
    Valores Válidos para "propValue": 
        - String (nome da propriedade, ex: "20").
    Valores Válidos para "propValueType": 
        - String (nome da propriedade, ex: "pt").
    Return: Altera as propriedades  CSS do "appView" e o innerHTML do "cssCodeTextarea" */
    newValue(propName, propValue, propValueType) {
        let concatAllProp = '';
        let concatPropValue = '';

        // Verificar a existencia do "propValueType"
        if (!propValueType) {
            concatAllProp = `${propName}: ${propValue}`;
            this.propCssAtt(propName, propValue);
            cssCodeTextarea.propAtt(propName, concatAllProp)
        } else {
            concatAllProp = `${propName}: ${propValue}${propValueType}`;
            concatPropValue = `${propValue}${propValueType}`;
            this.propCssAtt(propName, concatPropValue);
            cssCodeTextarea.propAtt(propName, concatAllProp)
        };
    },

    /* Descrição: Remove uma propriedade do "appView" e do "cssCodeTextarea".
    Valores Válidos para "propName": 
        - String (nome da propriedade, ex: "font-size").*/
    removeValue(propName) {
        this.propCssAtt(propName, '');
        cssCodeTextarea.propRemove(propName)

        // Verificar se esta propriedade ja esta na array de listagem de propriedades
        myProp.value.forEach((value, index) => {

            // Recortando os valores da array para fazer a pesquisa
            function sliceProcess() {
                let fullString = value;
                let endPosition = fullString.indexOf(':') + 1;
                return fullString.slice(0, endPosition);
            };

            // Fazendo a comparação de propriedades para apagar a propriedade encontrada
            if (sliceProcess() == `${propName}:`) {
                myProp.value.slice(index, 1)[index];
            };
        });
    },

    /* Descrição: Edita uma propriedade do "appView" e no "cssCodeTextarea" (Caso não tenha então esta propriedade será adicionada ao fim da lista).
    Valores Válidos para "propName": 
        - String (nome da propriedade, ex: "font-size").
    Valores Válidos para "propValue": 
        - String (nome da propriedade, ex: "20").
    Valores Válidos para "propValueType": 
        - String (nome da propriedade, ex: "pt").
    Return: Altera as propriedades  CSS do "appView" e o innerHTML do "cssCodeTextarea" */
    newValue(propName, propValue, propValueType) {
        let concatAllProp = '';
        let concatPropValue = '';

        // Verificar a existencia do "propValueType"
        if (!propValueType) {
            concatAllProp = `${propName}: ${propValue}`;
            this.propCssAtt(propName, propValue);
            cssCodeTextarea.propAtt(propName, concatAllProp)
        } else {
            concatAllProp = `${propName}: ${propValue}${propValueType}`;
            concatPropValue = `${propValue}${propValueType}`;
            this.propCssAtt(propName, concatPropValue);
            cssCodeTextarea.propAtt(propName, concatAllProp)
        };
    },

    /* Descrição: Acrecenta a classe "invalid--value" quando alguen insere um valor numérico invalido no input e retorna um boolean "true" idicando que o valor é invalido.
    Valores Válidos: 
      - String (ID do Input).
    Return: Boolean ("true" em caso de valor INVALIDO e "false" em caso de valor VALIDO)*/
    invalidInputNumberValue(inputID) {
        // Verificar se é um valor numérico válido
        let propVal = $(inputID).val();
        if (isNaN(propVal) == true) {
            $(inputID).addClass('invalid--value');
            return true
        } else {
            $(inputID).removeClass('invalid--value');
            return false
        };
    },
    /* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
    /* /\/\/\/\/\/\/\/\/\/\/\  Métodos Internos  /\/\/\/\/\/\/\/\/\/\/\/ */

    /* Descrição: Adiciona um novo valor de propriedade CSS no "appView".
  Valores Válidos para "propName": 
      - String (nome da propriedade, ex: "font-size").
  Valores Válidos para "propNewValue": 
      - String (valor da propriedade, ex: "30pt").
  Return: Alterar valor e propriedade CSS de "viewApp*/
    propCssAtt(propName, propNewValue) {
        switch (propName) {
            // Letra: C
            case 'color':
                allApp.appView.style.color = propNewValue;
                break;
            // Letra: F
            case 'font-size':
                allApp.appView.style.fontSize = propNewValue;
                break;
            case 'font-style':
                allApp.appView.style.fontStyle = propNewValue;
                break;
            case 'text-shadow':
                allApp.appView.style.textShadow = propNewValue;
                break;
            case 'font-family':
                allApp.appView.style.fontFamily = propNewValue;
                break;
            case 'font-variant':
                allApp.appView.style.fontVariant = propNewValue;
                break;
            case 'font-weight':
                allApp.appView.style.fontWeight = propNewValue;
                break;
            case 'font-stretch':
                allApp.appView.style.fontStretch = propNewValue;
                break;
            // Letra: L
            case 'letter-spacing':
                allApp.appView.style.letterSpacing = propNewValue;
                break;
            // Letra: W
            case 'word-spacing':
                allApp.appView.style.wordSpacing = propNewValue;
                break;
            default:
                console.log(`ERRO! "${propName}" Não é o nome válido de propriedade.`)
        }
    }

};

/* ################################################################# */
/* ######################   colorConverter   ####################### */
/* ################################################################# */

let colorConverter = {
    /* Descrição: Caso o valor inserido seja "RGB" então será convertido para "Hexadecimal", mas caso seja um valor "Hexadecimal" então será convertido para "RGB".
    Valores Válidos para Hexadecimal: 
        - String (hashtag + 6 digitos) (OBS: A Hashtag é opcional).
    Return: String (Ex: "rgb(123,456,789)").
    Valores Válidos para RGB:
        - Array (com 3 index numéricos que sejam >= 0 e <= 255 (podem ser números em string)).
        - String (com 2 virgulas e a palavra 'rgb' escrita no inicio (não verifica a validação dos valores), Ex: 'rgb(123,456,890)').
    Return: String (Ex: "#F0F0F0")*/
    inverter(codeColor) {
        if (this.isRGB(codeColor)) {
            return this.rgbToHex(codeColor);
        };

        if (this.isHexadecimal(codeColor)) {
            return this.hexToRgb(codeColor);
        };
    },

    /* Descrição: Converte um valor de cor "Hexadecimal" para "RGB".
    Valores Válidos: 
        - String (hashtag + 6 digitos) (OBS: A Hashtag é opcional).
    Return: String (Ex: "rgb(123,456,789)")*/
    hexToRgb(hexadecimalColorCode) {
        if (this.isHexadecimal(hexadecimalColorCode)) {
            // Verificar se a String contém Hashtag
            if (hexadecimalColorCode.indexOf('#') == -1) {
                hexadecimalColorCode = hexadecimalColorCode.slice(1);
            };
            // Converte de Hexadecimal para RGB
            let containerRGB = [];
            hexadecimalColorCode.toLowerCase().match(/[0-9a-f]{2}/g).forEach(function (arr) {
                containerRGB.push(('000' + parseInt(arr, 16)).slice(-3));
            });
            // Criando a sintaxe RGB
            hexadecimalColorCode = `rgb(${containerRGB[0]},${containerRGB[1]},${containerRGB[2]})`;
            return hexadecimalColorCode;
        };
        console.log(`ERRO! "${hexadecimalColorCode}" Não é um código Hexadecimal válido.`);
    },

    /* Descrição: Converte um valor de cor "RGB" para "Hexadecimal".
    Valores Válidos: 
        - Array (com 3 index numéricos que sejam >= 0 e <= 255 (podem ser números em string)).
        - String (com 2 virgulas e a palavra 'rgb' escrita no inicio (não verifica a validação dos valores), Ex: 'rgb(123,456,890)').
    Return: String (Ex: "#F2F2F2")*/
    rgbToHex(rgbColorCode) {
        if (this.isRGB(rgbColorCode)) {
            // Verificando se o RGB é uma Sintaxe em String
            if (typeof rgbColorCode == 'string' && rgbColorCode.indexOf('rgb') >= 0) {
                rgbColorCode = this.sliceRgb(rgbColorCode)
            };
            // Convertendo Array de valores RGB em Hexadecimal
            let strHexadecimal;
            rgbColorCode.forEach((arr) => {
                strHexadecimal = (strHexadecimal || '') + ('00' + parseInt(arr, 10).toString(16)).slice(-2);
            });
            return `#${strHexadecimal.toUpperCase()}`;
        } else {
            console.log(`ERRO! "${rgbColorCode}" Não é um código RGB válido.`);
        };
    },

    /* Descrição: Define pelo "valueType" se o tipo de valor que deve ser retornado é RGB ou Hexadecimal.
    Valores Válidos: 
        - String ("colorTypeHex" para retornar Hexadecimal e "colorTypeRGB" para retornar RGB).
    Return: String (Ex: "#F2F2F2" ou "rgb(123,231,102)") */
    valueTypeIdentify(value, valueType) {
        switch (valueType) {
            case 'colorTypeHex':
                // Converter o valor se for RGB
                if (this.isRGB(value) == true) {
                    value = this.rgbToHex(value);
                };
                break;
            case 'colorTypeRGB':
                // Converter o valor se for Hexadecimal
                if (this.isHexadecimal(value) == true) {
                    value = this.hexToRgb(value);
                };
                break;
            default:
                console.log(`ERRO! "${valueType}" Não é um tipo de valor válido para cores.`);
        };
        return value;
    },

    /* Descrição: Atualiza os valores do input com 'jscolor' de acordo com o tipo de valor de cor.
    Valores Válidos: 
        - String ("inputColorID" é o ID do input de palheta de cores e "valueTypeID" é o ID do tipo de valor de cor).*/
    inputAtt(inputColorID, valueTypeID) {
        // Selecionando o Input de cor e o Select
        let valueType = $(valueTypeID).val();
        let inputvalue = $(inputColorID);
        // Identificando e convertendo o valor se necessário
        let valueTypeIdentfy = colorConverter.valueTypeIdentify(inputvalue.val(), valueType);
        // Alterar o valor do input para o tipo de cor identificada
        inputvalue.val(valueTypeIdentfy);
    },
    /* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
    /* /\/\/\/\/\/\/\/\/\/\/\  Métodos Internos  /\/\/\/\/\/\/\/\/\/\/\/ */

    /* Descrição: Identifica se o valor informado é um código de cores em Hexadecimal válido.
    Valores Válidos: 
        - String (hashtag + 6 digitos) (OBS: A Hashtag é opcional).
    Return: Boolean*/
    isHexadecimal(hexadecimalColorCode) {
        if (typeof hexadecimalColorCode == 'string') {
            if (hexadecimalColorCode.indexOf('#') == 0) { hexadecimalColorCode = hexadecimalColorCode.substr(1) };
            return hexadecimalColorCode.length == 6;
        } else {
            return false;
        };
    },

    /* Descrição: Identifica se o valor informado é um código de cores RGB válido.
    Valores Válidos:
        - Array (com 3 index numéricos que sejam >= 0 e <= 255 (podem ser números em string)).
        - String (com 2 virgulas e a palavra 'rgb' escrita no inicio (não verifica a validação dos valores), Ex: 'rgb(123,456,890)').
    Return: Boolean */
    isRGB(rgbColorCode) {

        // Se for string
        if (typeof rgbColorCode === 'string' && rgbColorCode.indexOf('rgb') >= 0) {
            rgbColorCode = this.sliceRgb(rgbColorCode)
        };

        // Se for array
        if (typeof rgbColorCode === 'object' && rgbColorCode.length === 3) {
            for (let item of rgbColorCode) {
                let validValue = parseInt(item) >= 0 && parseInt(item) <= 255 ? true : false;
                if (!validValue) {
                    return false;
                };
            };
            return true;
        };
        return false;
    },

    /* Descrição: Recortar valores de uma sintaxe RGB em string (Ex: "rgb(012,345,678)")
    Valores Válidos:
        - String (No formato 'rgb(123,456,890)' com letras maiusculas ou minusculas e com cada sequencia numérica sendo de 1 á 3 digitos)(OBS: Todos os espaços serão tirados).
    Return: Array (Com 3 index de valores numéricos no formato [123, 456, 789]) */
    sliceRgb(rgbColorCode) {
        if (rgbColorCode != 'string') {
            rgbColorCode = rgbColorCode.replace(/ /g, '');
            rgbColorCode = rgbColorCode.match(/([0-9]{1,3}),([0-9]{1,3}),([0-9]{1,3})/i);

            // Verficar se o recorte funcionou
            if (rgbColorCode != null) {
                rgbColorCode.shift();

                // Testar os valores encontrados
                rgbColorCode.forEach((currentValue, currentIndex) => {
                    rgbColorCode[currentIndex] = parseInt(rgbColorCode[currentIndex]);
                    let testValue = currentValue >= 0 && currentValue <= 255 ? true : false;
                    if (!testValue) {
                        return console.log(`ERRO! Estes valores não corresponde a um RGB válido "${rgbColorCode}".`)
                    };
                });
                return rgbColorCode;
            } else {
                console.log(`ERRO! Este valor "${rgbColorCode}" não pode ser recortado corretamente.`);
            };
            console.log(`ERRO! Este valor "${rgbColorCode}" não pode ser recortado corretamente.`);
        };
    }
};


/* ################################################################# */
/* ######################   cssCodeTextarea   ###################### */
/* ################################################################# */

let cssCodeTextarea = {

    /* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
    /* /\/\/\/\/\/\/\/\/\/\/\  Métodos Internos  /\/\/\/\/\/\/\/\/\/\/\/ */

    /* Descrição: Adiiciona uma String no conteúdo do cssCodeTextarea.
        Valores Válidos: 
           - String (de preferência as propriedades CSS do "appView").*/
    textEdit(text) {
        $('#css-code-textarea').text(text);
    },

    /* Descrição: Adiciona/Altera uma das propriedades que estão na array do "myProp.value" (OBS: Este método é usado dentro dos métodos do "myProp").
        Valores Válidos para "propertyName": 
           - String (com o nome da propriedade CSS, ex: "font-size")).
        Valores Válidos para "propertieNewValue": 
           - String (com o nome da propriedade CSS, ex: "font-size: 30pt")).
       Return: Usa o innerHTML na variavel "appView" para exibir todos os valores da array "myProp.value" */
    propAtt(propertyName, propertieNewValue) {
        let cssAllProperties = '';

        // Verificar se esta propriedade ja esta na array de listagem de propriedades
        if (myProp.value.length == 0) {
            myProp.value.push(propertieNewValue);
        } else {
            let propertySearchStatus = false;
            myProp.value.forEach((value, index) => {

                // Recortando os valores da array para fazer a pesquisa
                function sliceProcess() {
                    let fullString = value;
                    let endPosition = fullString.indexOf(':') + 1;
                    return fullString.slice(0, endPosition);
                };

                // Fazendo a comparação de propriedades para editar/adicionar o novo valor
                if (sliceProcess() == `${propertyName}:`) {
                    myProp.value[index] = propertieNewValue;
                    propertySearchStatus = true;
                    // Se não for encontrado nenhuma propriedade igual será adicionado um novo valor
                } else if (index == myProp.value.length - 1 && propertySearchStatus == false) {
                    myProp.value.push(propertieNewValue);
                };
            });
        };
        // Gerando a String de com as propriedades
        myProp.value.forEach((value) => {
            cssAllProperties += `${value};\n`;
        });

        // Etapa final: Adicionando a string no textarea
        this.textEdit(cssAllProperties);
    },

    /* Descrição: Remove uma das propriedades que estão na array do "myProp.value" (OBS: Este método é usado dentro dos métodos do "myProp").
    Valores Válidos: 
        - String (com o nome da propriedade CSS)).
    Return: Usa o innerHTML na variavel "appView" para exibir todos os valores da array "myProp.value" */
    propRemove(propertyName) {
        // Verificar se esta propriedade ja esta na array de listagem de propriedades
        if (myProp.value.length != 0) {
            let cssAllProperties = '';

            myProp.value.forEach((value, index) => {

                // Recortando os valores da array para fazer a pesquisa
                function sliceProcess() {
                    let endPosition = value.indexOf(':') + 1;
                    return value.slice(0, endPosition);
                };

                // Fazendo a comparação de propriedades para remover a propriedade encontrada
                if (sliceProcess() == `${propertyName}:`) {
                    myProp.value.splice(index, 1);
                };
            });

            // Gerando a String de com as propriedades
            myProp.value.forEach((value) => {
                cssAllProperties += `${value};\n`;
            });

            // Etapa final: Adicionando a string no textarea
            this.textEdit(cssAllProperties);
        };
    }

};