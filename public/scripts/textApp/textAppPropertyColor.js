// Propriedade em uso
const colorStr = 'color';

/* ################################################################# */
/* ######################   MENU DA ESQUERDA   ##################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\/\/\  Uso de funções unicas  \/\/\/\/\/\/\/\/\/\/ */

// Seleção da Propriedade "color"
$('#properties-change-color').click(() => {
    let propertiesChecked = $('#properties-change-color').prop('checked');
    if (propertiesChecked) {
        let inputValue = $('#property-color-value').val();
        let inputValueType = $('#property-color-value-type').val();
        // Garantir que será exibido o conteudo das propriedades
        $('.textApp-properties-content').slideDown(200);
        // Ativar o Display lateral esquerdo para inserir valores
        $('.textApp-aside-menu-right-properties-color').slideDown();
        // Ativar o tipo de valor "Livre"
        colorValueFree();
        // Aplicar os valores padrões
        textAppView.css(colorStr, inputValue + inputValueType);
        propertiesInTextarea(colorStr, inputValue);
    } else {
        // Desativar o Display lateral direito e remover o atributo do CSS
        $('.textApp-aside-menu-right-properties-color').slideUp();
        textAppView.css(colorStr, "");
        // Reset de valores
        inputValueReset('#property-color-value', '#000000', '#property-color-value-type', 'colorTypeHex', '#property-color-value-predefined', 'nenhum');
        textareaPropertiesRemove(colorStr);
    }
});

/* ################################################################# */
/* ######################   MENU DA DIREITA   ###################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/  ATT Propriedades de "color"  /\/\/\/\/\/\/\/ */

//////////// Esconder/Exibir Aba de valores
$('.textApp-properties-title-color').click(() => {
    $('.textApp-properties-content-color').slideToggle(200);
});

//////////// Aplicar os valores assim que eles forem alterados
// Input de inserir Cores
function textAppTextColor(picker) {
    let colorSelected = undefined;
    // Selecionando o Input de cor e o Select
    const valueType = $('#property-color-value-type').val();
    const inputColor = $('#property-color-value');

    // Verificar o tipo de valor que o usuário selecionou
    switch (valueType) {
        case 'colorTypeHex':
            colorSelected = picker.toHEXString();
            textAppView.css(colorStr, colorSelected);
            inputColor.val(colorSelected);
            break;
        case 'colorTypeRGB':
            colorSelected = picker.toRGBString();
            textAppView.css(colorStr, colorSelected);
            inputColor.val(colorSelected);
            break;
    };
    propertiesInTextarea(colorStr, colorSelected);
};

// Select de tipo de valor (Livre)
$('#property-color-value-type').change(() => {
    const valueType = $('#property-color-value-type').val();
    let inputColor = $('#property-color-value');

    // Identificar e converter (se necessário) o valor do input
    let colorSelected = colorValueTypeIdentify(valueType, inputColor);

    propertiesInTextarea(colorStr, colorSelected);

});

// Select de inserir valor (Pré-definido)
$('#property-color-value-predefined').change(() => {
    let predefinedValue = $('#property-color-value-predefined');
    let freeValue = $('#property-color-value');
    propertiesApplyPredefinedColorValue(colorStr, '#property-color-value-predefined', '#property-color-value', '#property-color-value-type');
    propertiesInTextarea(colorStr, freeValue.val(), predefinedValue.val());

    // Aplicar cor na div de Exemplo
    let colorExample = $('#property-color-value-example');
    colorExample.css('background-color', predefinedValue.val());
});

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\/\/\  Uso de funções unicas  \/\/\/\/\/\/\/\/\/\/ */

//////////// Ativando o botão de valores "Pré-Definidos"
$('#button-predefined-value-color').click(() => {
    colorValuePredefined();
});

//////////// Ativando o botão de valores "Livre"
$('#button-free-value-color').click(() => {
    colorValueFree();
});


/* ################################################################# */
/* ########################  F U N Ç Õ E S  ######################## */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\/  Propriedade "color"  /\/\/\/\/\/\/\/\/ */

//////////// Ativando tipo de valores de color para "livre" 
function colorValueFree() {
    buttonActiveValueType(
        '#button-free-value-color',
        '.properties-input-free-value-color',
        '#button-predefined-value-color',
        '.properties-input-predefined-value-color'
    );
};

//////////// Ativando o tipo de valores de color para "livre" 
function colorValuePredefined() {
    buttonActiveValueType(
        '#button-predefined-value-color',
        '.properties-input-predefined-value-color',
        '#button-free-value-color',
        '.properties-input-free-value-color'
    );
};

