// Propriedade em uso
const textShadowStr = 'text-shadow';

/* ################################################################# */
/* ######################   MENU DA ESQUERDA   ##################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\/\/\  Uso de funções unicas  \/\/\/\/\/\/\/\/\/\/ */

// Seleção da Propriedade "text-shadow"
$('#properties-change-text-shadow').click(() => {
    let propertiesChecked = $('#properties-change-text-shadow').prop('checked');
    let asideDisplay = $('.prop__container__text-shadow');
    if (propertiesChecked) {
        let inputValue = $('#property-text-shadow-value').val();
        // Ativar o Display lateral esquerdo para inserir valores
        asideDisplay.slideDown();
        // Ativar o tipo de valor "Livre"
        allApp.buttonAndDisplayOff('#button-predefined-value-text-shadow', '.predefined__value__container__text-shadow');
        allApp.buttonAndDisplayOn('#button-free-value-text-shadow', '.free__value__container__text-shadow');
        // Aplicar os valores padrões
        myProp.newValue(textShadowStr, inputValue)
    } else {
        // Garantir que será exibido o conteudo das propriedades
        $('.content__text-shadow').slideDown(200);
        // Desativar o Display lateral direito e remover o atributo do CSS
        asideDisplay.slideUp();
        // Reset de valores
        allApp.inputValueReset(['#property-text-shadow-value', '#000000', '#property-text-shadow-value-type', 'colorTypeHex', '#property-text-shadow-value-predefined', 'nenhum']);
        myProp.removeValue(textShadowStr);
    }
});

/* ################################################################# */
/* ######################   MENU DA DIREITA   ###################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/  ATT Propriedades de "text-shadow"  /\/\/\/\/\/\/\/ */

//////////// Esconder/Exibir Aba de valores
$('.title__text-shadow').click(() => {
    $('.content__text-shadow').slideToggle(200);
});

//////////// Aplicar os valores assim que eles forem alterados
// Input de inserir Cores
function textAppTextColor(picker) {
    let value = undefined;
    // Selecionando o Input de cor e o Select
    const valueType = $('#property-text-shadow-value-type').val();
    const inputSelect = $('#property-text-shadow-value');

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
    myProp.newValue(textShadowStr, value);

    // Aplicar cor na div de Exemplo
    $('#predefined-example-text-shadow').css('background-color', value);

    // Reseta o valor pré-definido
    $('#property-text-shadow-value-predefined').val('nenhum');
};

// Select de tipo de valor (Livre)
$('#property-text-shadow-value-type').change(() => {
    // Selecionando o Input de cor e o Select
    const valueType = $('#property-text-shadow-value-type').val();
    const inputvalue = $('#property-text-shadow-value');

    // Identificando e convertendo o valor se necessário
    let valueTypeIdentfy = colorConverterTemp.valueTypeIdentify(inputvalue.val(), valueType);
    myProp.newValue(textShadowStr, valueTypeIdentfy);

    // Alterar o valor do input
    inputvalue.val(valueTypeIdentfy);

    // Reseta o valor pré-definido
    $('#property-text-shadow-value-predefined').val('nenhum');

});

// Select de inserir valor (Pré-definido)
$('#property-text-shadow-value-predefined').change(() => {
    let propVal = $('#property-text-shadow-value').val();
    let propValType = $('#property-text-shadow-value-type').val();
    let propValPredefined = $('#property-text-shadow-value-predefined').val();

    if (propValPredefined == 'nenhum') {
        // Identificando e convertendo o valor se necessário
        let valueTypeIdentfy = colorConverterTemp.valueTypeIdentify(propVal, propValType);
        myProp.newValue(textShadowStr, valueTypeIdentfy);
        // Aplicar cor na div de Exemplo
        $('#predefined-example-text-shadow').css('background-color', valueTypeIdentfy);

    } else {
        myProp.newValue(textShadowStr, propValPredefined);
        // Aplicar cor na div de Exemplo
        $('#predefined-example-text-shadow').css('background-color', propValPredefined);
    };

});

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\/\/\  Uso de funções unicas  \/\/\/\/\/\/\/\/\/\/ */

//////////// Ativando o botão de valores "Pré-Definidos"
$('#button-predefined-value-text-shadow').click(() => {
    allApp.buttonAndDisplayOff('#button-free-value-text-shadow', '.free__value__container__text-shadow');
    allApp.buttonAndDisplayOn('#button-predefined-value-text-shadow', '.predefined__value__container__text-shadow');
});

//////////// Ativando o botão de valores "Livre"
$('#button-free-value-text-shadow').click(() => {
    allApp.buttonAndDisplayOff('#button-predefined-value-text-shadow', '.predefined__value__container__text-shadow');
    allApp.buttonAndDisplayOn('#button-free-value-text-shadow', '.free__value__container__text-shadow');
});