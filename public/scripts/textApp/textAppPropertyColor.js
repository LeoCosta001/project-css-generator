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
    let asideDisplay = $('.prop__container__color');
    if (propertiesChecked) {
        let inputValue = $('#property-color-value').val();
        // Ativar o Display lateral esquerdo para inserir valores
        asideDisplay.slideDown();
        // Ativar o tipo de valor "Livre"
        allApp.buttonAndDisplayOff('#button-predefined-value-color', '.predefined__value__container__color');
        allApp.buttonAndDisplayOn('#button-free-value-color', '.free__value__container__color');
        // Aplicar os valores padrões
        myProp.newValue(colorStr, inputValue)
    } else {
        // Garantir que será exibido o conteudo das propriedades
        $('.content__color').slideDown(200);
        // Desativar o Display lateral direito e remover o atributo do CSS
        asideDisplay.slideUp();
        // Reset de valores
        allApp.inputValueReset(['#property-color-value', '#000000', '#property-color-value-type', 'colorTypeHex', '#property-color-value-predefined', 'nenhum']);
        myProp.removeValue(colorStr);
    }
});

/* ################################################################# */
/* ######################   MENU DA DIREITA   ###################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/  ATT Propriedades de "color"  /\/\/\/\/\/\/\/ */

//////////// Esconder/Exibir Aba de valores
$('.title__color').click(() => {
    $('.content__color').slideToggle(200);
});

//////////// Aplicar os valores assim que eles forem alterados
// Input de inserir Cores
function textAppTextColor(picker) {
    let value = undefined;
    // Selecionando o Input de cor e o Select
    const valueType = $('#property-color-value-type').val();
    const inputSelect = $('#property-color-value');

    // Verificar o tipo de valor que o usuário selecionou
    switch (valueType) {
        case 'colorTypeHex':
            value = picker.toHEXString();
            inputSelect.val(value);
            break;
        case 'colorTypeRGB':
            value = picker.toRGBString();
            inputSelect.val(value);
            break;
        default:
            console.log(`ERRO! "${valueType}" Não é um tipo de valor válido para cores.`)
    };
    myProp.newValue(colorStr, value);

    // Aplicar cor na div de Exemplo
    $('#predefined-example-color').css('background-color', value);

    // Reseta o valor pré-definido
    $('#property-color-value-predefined').val('nenhum');
};

// Select de tipo de valor (Livre)
$('#property-color-value-type').change(() => {
    // Selecionando o Input de cor e o Select
    const valueType = $('#property-color-value-type').val();
    const inputvalue = $('#property-color-value');

    // Identificando e convertendo o valor se necessário
    let valueTypeIdentfy = colorConverterTemp.valueTypeIdentify(inputvalue.val(), valueType);
    myProp.newValue(colorStr, valueTypeIdentfy);

    // Alterar o valor do input
    inputvalue.val(valueTypeIdentfy);

    // Reseta o valor pré-definido
    $('#property-color-value-predefined').val('nenhum');

});

// Select de inserir valor (Pré-definido)
$('#property-color-value-predefined').change(() => {
    let propVal = $('#property-color-value').val();
    let propValType = $('#property-color-value-type').val();
    let propValPredefined = $('#property-color-value-predefined').val();

    if (propValPredefined == 'nenhum') {
        // Identificando e convertendo o valor se necessário
        let valueTypeIdentfy = colorConverterTemp.valueTypeIdentify(propVal, propValType);
        myProp.newValue(colorStr, valueTypeIdentfy);
        // Aplicar cor na div de Exemplo
        $('#predefined-example-color').css('background-color', valueTypeIdentfy);

    } else {
        myProp.newValue(colorStr, propValPredefined);
        // Aplicar cor na div de Exemplo
        $('#predefined-example-color').css('background-color', propValPredefined);
    };

});

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\/\/\  Uso de funções unicas  \/\/\/\/\/\/\/\/\/\/ */

//////////// Ativando o botão de valores "Pré-Definidos"
$('#button-predefined-value-color').click(() => {
    allApp.buttonAndDisplayOff('#button-free-value-color', '.free__value__container__color');
    allApp.buttonAndDisplayOn('#button-predefined-value-color', '.predefined__value__container__color');
});

//////////// Ativando o botão de valores "Livre"
$('#button-free-value-color').click(() => {
    allApp.buttonAndDisplayOff('#button-predefined-value-color', '.predefined__value__container__color');
    allApp.buttonAndDisplayOn('#button-free-value-color', '.free__value__container__color');
});