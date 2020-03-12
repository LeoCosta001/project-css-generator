const textAppViewJs = document.querySelector('#textAppView');
const textAppResultJS = document.querySelector('#textApp-footer-css-result');
let currentProperties = [];

//////////// Montando a estrutura de CSS para ser exibida no Textarea
// Adicionar e Editar valores no Textarea (Esta é uma função de base para outras funções)
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
    textAppResultJS.innerHTML = cssAllProperties;
};

// Remover valores do Textarea
function propertiesRemove(searchProperty) {

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
        console.log('Final')

        // Etapa final: Adicionando a string no textarea
        textAppResultJS.innerHTML = cssAllProperties;
    };
};

//////////// Exibir as propriedades de CSS no textarea do rodapé 
function propertiesInTextarea(property) {
    let propertyValue = undefined;
    switch (property) {
        // Letra: C
        case 'color':
            propertyValue = `${property}: ${textAppViewJs.style.color};`;
            propertiesAtt(property, propertyValue);
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