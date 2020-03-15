const textAppViewJs = document.querySelector('#textAppView');
const appView = document.querySelector('#textApp-footer-css-result');

// Texto do container central
const textAppView = $('#textAppView');

// Container de propriedades que estão em uso atualmente
let currentProperties = [];

/* ################################################################# */
/* #############  FUNÇÕES PARA TODAS AS PROPRIEDADES  ############## */
// Aplicar valores ao serem alterados
// Alternar entre valores "livres" ou "Pré-Definidos"
// Aplicar valores ao serem alterados
// Resetar Propriedades
// Adicionar/Editar Valores do Textarea
// Remover valores do Textarea

//////////// Aplicar valores ao serem alterados
// Valor "livre" (com "valor" e "tipo de valor")
function propertiesApplyFreeValue(property, value, valueType) {
    let inputValue = $(value).val();
    let inputValueType = $(valueType).val();

    // Verificar se foi inserido um valor numérico válido
    if (isNaN(inputValue) === false) {
        textAppView.css(property, inputValue + inputValueType);
        $(value).removeClass('invalidValue');
    } else {
        $(value).addClass('invalidValue');
    };
}

// Valor "pré-definido" (com "valor" e "tipo de valor")
function propertiesApplyPredefinedValue(property, valuePredefined, value, valueType) {
    let inputValue = $(value).val();
    let inputValueType = $(valueType).val();
    let inputValuePredefined = $(valuePredefined).val();

    if (inputValuePredefined != 'nenhum') {
        textAppView.css(property, inputValuePredefined);
    } else {
        textAppView.css(property, inputValue + inputValueType);
    };
};

// Valor "pré-definido" (Para cores)
function propertiesApplyPredefinedColorValue(property, valuePredefined, value, valueType) {
    let inputValue = $(value).val();
    let inputValueType = $(valueType).val();
    let inputValuePredefined = $(valuePredefined).val();

    if (inputValuePredefined != 'nenhum') {
        textAppView.css(property, inputValuePredefined);
    } else {
        // Detectar se esta sendo usado cores e se é RGB ou Hexadecimal
        let colorSelected = colorValueTypeIdentify(inputValueType, $(value))
        textAppView.css(property, inputValue);
    };
};

// Editar texto do Container Central
$('#textApp-footer-text-edit').keyup(() => {
    console.log("teste");
    textAppView.text(`${$('#textApp-footer-text-edit').val()}`);
});

//////////// Alternar entre valores "livres" ou "Pré-Definidos" (Esta é uma função de base para outras funções)
function buttonActiveValueType(buttonActive, displayActive, buttonEnable, displayEnable) {
    // Botão que será ativado
    if (buttonActive) {
        $(buttonActive).addClass('properties-input-button-type-active')
    };

    // Display que será ativado
    if (displayActive) {
        $(displayActive).slideDown();
    };

    // Botão que será desativado
    if (buttonEnable) {
        $(buttonEnable).removeClass('properties-input-button-type-active')
    };

    // Display que será desativado
    if (displayEnable) {
        $(displayEnable).slideUp();
    };
};

//////////// [1] Resetar Propriedades
// Para usar basta colocar como primeiro parâmetro o ID do input e no segundo o novo valor (esta função reseta até 5 valores, mas depois usar array para fazer com um numero indeterminado de valores)
function inputValueReset(input01, newValue01, input02, newValue02, input03, newValue03, input04, newValue04, input05, newValue05) {
    if (input01) {
        $(input01).val(newValue01);
    };

    if (input02) {
        $(input02).val(newValue02);
    };

    if (input03) {
        $(input03).val(newValue03);
    };

    if (input04) {
        $(input04).val(newValue04);
    };

    if (input05) {
        $(input05).val(newValue05);
    };
};

// [2]Remover valores do Textarea
function textareaPropertiesRemove(searchProperty) {

    // Verificar se esta propriedade ja esta na array de listagem de propriedades
    if (currentProperties.length != 0) {
        let cssAllProperties = '';

        for (i = 0; i < currentProperties.length; i++) {

            // Recortando os valores da array para fazer a pesquisa
            function sliceProcess() {
                let fullString = currentProperties[i];
                let endPosition = fullString.indexOf(':') + 1;
                return fullString.slice(0, endPosition);
            };

            // Fazendo a comparação de propriedades para remover a propriedade encontrada
            if (sliceProcess() == `${searchProperty}:`) {
                currentProperties.splice(i, 1);
            };
        };

        // Gerando a String de com as propriedades
        for (i = 0; i < currentProperties.length; i++) {
            cssAllProperties += `${currentProperties[i]};\n`;
        };

        // Etapa final: Adicionando a string no textarea
        appView.innerHTML = cssAllProperties;
    };
};

//////////// Montando a estrutura de CSS para ser exibida no Textarea
// [3]Adicionar e Editar valores no Textarea (Esta é uma função de base para outras funções)
function propertiesAtt(searchProperty, propertieNewValue) {
    let cssAllProperties = '';
    // Verificar se esta propriedade ja esta na array de listagem de propriedades
    if (currentProperties.length == 0) {
        currentProperties.push(propertieNewValue);
    } else {
        let searchPropertyStatus = false;
        for (i = 0; i < currentProperties.length; i++) {

            // Recortando os valores da array para fazer a pesquisa
            function sliceProcess() {
                let fullString = currentProperties[i];
                let endPosition = fullString.indexOf(':') + 1;
                return fullString.slice(0, endPosition);
            };

            // Fazendo a comparação de propriedades para aeditar/adicionar o novo valor
            if (sliceProcess() == `${searchProperty}:`) {
                currentProperties[i] = propertieNewValue;
                searchPropertyStatus = true;
                // Se não for encontrado nenhuma propriedade igual será adicionado um novo valor
            } else if (i == currentProperties.length - 1 && searchPropertyStatus == false) {
                currentProperties.push(propertieNewValue);
            };
        };
    };
    // Gerando a String de com as propriedades
    for (i = 0; i < currentProperties.length; i++) {
        cssAllProperties += `${currentProperties[i]};\n`;
    };

    // Etapa final: Adicionando a string no textarea
    appView.innerHTML = cssAllProperties;
};

//////////// Exibir as propriedades de CSS no textarea do rodapé 
function propertiesInTextarea(property, newColorValue, newColorPredefined) {
    let propertyValue = undefined;
    switch (property) {
        // Letra: C
        case 'color':
            // Verificar se esta sendo usada uma cor prédefinida
            if (newColorPredefined) {
                if (newColorPredefined != 'nenhum') {
                    propertyValue = `${property}: ${newColorPredefined}`;
                    propertiesAtt(property, propertyValue);
                } else {
                    propertyValue = `${property}: ${newColorValue}`;
                    propertiesAtt(property, propertyValue)
                };
            } else {
                propertyValue = `${property}: ${newColorValue}`;
                propertiesAtt(property, propertyValue);
            }
            break;
        // Letra: F
        case 'font-size':
            propertyValue = `${property}: ${textAppViewJs.style.fontSize}`;
            propertiesAtt(property, propertyValue);
            break;
        case 'font-style':
            propertyValue = `${property}: ${textAppViewJs.style.fontStyle};`;
            propertiesAtt(property, propertyValue);
            break;
        case 'font-shadow':
            propertyValue = `${property}: ${textAppViewJs.style.fontShadow};`;
            propertiesAtt(property, propertyValue);
            break;
        case 'font-family':
            propertyValue = `${property}: ${textAppViewJs.style.fontFamily};`;
            propertiesAtt(property, propertyValue);
            break;
        case 'font-variant':
            propertyValue = `${property}: ${textAppViewJs.style.fontVariant};`;
            propertiesAtt(property, propertyValue);
            break;
        case 'font-weight':
            propertyValue = `${property}: ${textAppViewJs.style.fontWeight};`;
            propertiesAtt(property, propertyValue);
            break;
        case 'font-stretch':
            propertyValue = `${property}: ${textAppViewJs.style.fontStretch};`;
            propertiesAtt(property, propertyValue);
            break;
        // Letra: L
        case 'letter-spacing':
            propertyValue = `${property}: ${textAppViewJs.style.letterSpacing};`;
            propertiesAtt(property, propertyValue);
            break;
        // Letra: W
        case 'word-spacing':
            propertyValue = `${property}: ${textAppViewJs.style.wordSpacing};`;
            propertiesAtt(property, propertyValue);
            break;
    };
};

//////////// Conversor de cores RGB para Hexadecimal e de Hexadecimal para RGB
function colorConverter(colorValueCode) {
    let colorValue = colorValueCode
    if (typeof colorValue === 'string') {
        // Verificar se a String contém Hashtag
        if (colorValue.indexOf('#') == -1) {
            colorValueCode = colorValueCode.slice(1);
        };
        // Converte de Hexadecimal para RGB
        let containerRGB = [];
        colorValue.toLowerCase().match(/[0-9a-f]{2}/g).forEach(function (arr) {
            containerRGB.push(('000' + parseInt(arr, 16)).slice(-3));
        });
        // Criando a sintaxe RGB
        let rgbSyntax = `rgb(${containerRGB[0]},${containerRGB[1]},${containerRGB[2]})`;
        return rgbSyntax;
    } else {
        // Converte de RGB para Hexadecimal
        let strHexadecimal;
        colorValue.forEach(function (arr) {
            strHexadecimal = (strHexadecimal || '') + ('00' + parseInt(arr, 10).toString(16)).slice(-2);
        });
        let hexSyntax = `#${strHexadecimal}`;
        return hexSyntax;
    };
};

//////////// Identificar e converter (se necessário) o valor do input
// OBS: O 1º parâmetro tem q ser o real valor do input mas o 2º parâmetro tem queser apenas a selação do input mas não o valor
function colorValueTypeIdentify(valueType, inputColor) {
    let colorSelected = undefined;

    switch (valueType) {
        case 'colorTypeHex':
            // Converter o valor se for RGB
            if (inputColor.val().indexOf('rgb') >= 0) {
                colorSelected = colorConverter(slaceRgb(inputColor.val()));
            } else {
                colorSelected = inputColor.val();
            };

            // Aplicar valores no textAppView e no input
            textAppView.css(colorStr, colorSelected);
            inputColor.val(colorSelected);
            break;
        case 'colorTypeRGB':
            // Converter o valor se for Hexadecimal
            if (inputColor.val().indexOf('#') >= 0) {
                colorSelected = colorConverter(inputColor.val());
            } else {
                colorSelected = inputColor.val();
            };

            textAppView.css(colorStr, colorSelected);
            inputColor.val(colorSelected);
            break;
    };
    return colorSelected;
};

//////////// Recortar valores de uma sintaxe RGB (string)
function slaceRgb(strRGB) {
    let containerSliceRgb = [];
    let firstComma = strRGB.indexOf(',');
    // Encontrando a primeira sequencia de números
    containerSliceRgb[0] = strRGB.slice(firstComma - 3, firstComma);

    // Encontrando a segunda sequencia de números
    containerSliceRgb[1] = strRGB.slice(firstComma + 1, firstComma + 4);

    // Encontrando a terceira sequencia de números
    containerSliceRgb[2] = strRGB.slice(firstComma + 5, firstComma + 8);
    return containerSliceRgb;
};