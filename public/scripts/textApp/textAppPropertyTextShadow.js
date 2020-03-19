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
        // Concatenando valores dos input
        let inputValueConcat = textShadowInputFreeConcat()
        // Ativar o Display lateral esquerdo para inserir valores
        asideDisplay.slideDown();
        // Ativar o tipo de valor "Livre"
        allApp.buttonAndDisplayOff('#button-predefined-value-text-shadow', '.predefined__value__container__text-shadow');
        allApp.buttonAndDisplayOn('#button-free-value-text-shadow', '.free__value__container__text-shadow');
        // Aplicar os valores padrões
        myProp.newValue(textShadowStr, inputValueConcat)
    } else {
        // Garantir que será exibido o conteudo das propriedades
        $('.content__text-shadow').slideDown(200);
        // Desativar o Display lateral direito e remover o atributo do CSS
        asideDisplay.slideUp();
        // Reset de valores
        allApp.inputValueReset([
            '#property-text-shadow-color-value', '#000000',
            '#property-text-shadow-color-value-type', 'colorTypeHex',
            '#property-text-shadow-color-value-predefined', 'nenhum',
            '#property-text-shadow-horizontal-value', '0',
            '#property-text-shadow-horizontal-value-type', 'px',
            '#property-text-shadow-vertical-value', '0',
            '#property-text-shadow-vertical-value-type', 'px'
        ]);
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
// Cor da sombra (Livre)
function textAppTextShadow(picker) {
    // Concatenando valores dos input
    let inputValueConcat = textShadowInputFreeConcat(false, picker);
    // Aplicar novo valor
    myProp.newValue(textShadowStr, inputValueConcat);

    // Aplicar cor na div de Exemplo
    $('#predefined-example-text-shadow').css('background-color', colorValue);
    // Reseta o valor pré-definido
    $('#property-text-shadow-color-value-predefined').val('nenhum');
};

// Tipo de cor da sombra (Livre)
$('#property-text-shadow-color-value-type').change(() => {
    // Selecionando o Input de cor e o Select
    const valueType = $('#property-text-shadow-color-value-type').val();
    const inputvalue = $('#property-text-shadow-color-value');
    // Identificando e convertendo o valor se necessário
    let valueTypeIdentfy = colorConverter.valueTypeIdentify(inputvalue.val(), valueType);
    // Alterar o valor do input para o tipo de cor identificada
    inputvalue.val(valueTypeIdentfy);
    // Concatenando valores dos input
    let inputValueConcat = textShadowInputFreeConcat();
    // Aplicando novo valor
    myProp.newValue(textShadowStr, inputValueConcat);
    // Reseta o valor pré-definido
    $('#property-text-shadow-color-value-predefined').val('nenhum');
});

// Movimento Horizontal (Livre)
$('#property-text-shadow-horizontal-value').keyup(() => {
    // Mantendo o valor da cor com base no tipo de valor
    colorConverter.inputAtt('#property-text-shadow-color-value', '#property-text-shadow-color-value-type');
    // Concatenando valores dos input
    let inputValueConcat = textShadowInputFreeConcat();

    // Verificando caracteres invalidos
    let invalidInput = myProp.invalidInputNumberValue('#property-text-shadow-horizontal-value');

    if (!invalidInput) {
        // Aplicando novo valor
        myProp.newValue(textShadowStr, inputValueConcat);
    };
});

// Tipo de Movimento Horizontal (Livre)
$('#property-text-shadow-horizontal-value-type').change(() => {
    // Mantendo o valor da cor com base no tipo de valor
    colorConverter.inputAtt('#property-text-shadow-color-value', '#property-text-shadow-color-value-type');
    // Concatenando valores dos input
    let inputValueConcat = textShadowInputFreeConcat();

    // Aplicando novo valor
    myProp.newValue(textShadowStr, inputValueConcat);
});

// Movimento Vertical (Livre)
$('#property-text-shadow-vertical-value').keyup(() => {
    // Mantendo o valor da cor com base no tipo de valor
    colorConverter.inputAtt('#property-text-shadow-color-value', '#property-text-shadow-color-value-type');
    // Concatenando valores dos input
    let inputValueConcat = textShadowInputFreeConcat();

    // Verificando caracteres invalidos
    let invalidInput = myProp.invalidInputNumberValue('#property-text-shadow-vertical-value');

    if (!invalidInput) {
        // Aplicando novo valor
        myProp.newValue(textShadowStr, inputValueConcat);
    };
});

// Tipo de Movimento Vertical (Livre)
$('#property-text-shadow-vertical-value-type').change(() => {
    // Mantendo o valor da cor com base no tipo de valor
    colorConverter.inputAtt('#property-text-shadow-color-value', '#property-text-shadow-color-value-type');
    // Concatenando valores dos input
    let inputValueConcat = textShadowInputFreeConcat();

    // Aplicando novo valor
    myProp.newValue(textShadowStr, inputValueConcat);
});

// Nível de desfoque (Livre)
$('#property-text-shadow-blur-value').keyup(() => {
    // Mantendo o valor da cor com base no tipo de valor
    colorConverter.inputAtt('#property-text-shadow-color-value', '#property-text-shadow-color-value-type');
    // Concatenando valores dos input
    let inputValueConcat = textShadowInputFreeConcat();

    // Verificando caracteres invalidos
    let invalidInput = myProp.invalidInputNumberValue('#property-text-shadow-blur-value');

    if (!invalidInput) {
        // Aplicando novo valor
        myProp.newValue(textShadowStr, inputValueConcat);
    };
});

// Tipo de Nível de desfoque (Livre)
$('#property-text-shadow-blur-value-type').change(() => {
    // Mantendo o valor da cor com base no tipo de valor
    colorConverter.inputAtt('#property-text-shadow-color-value', '#property-text-shadow-color-value-type');
    // Concatenando valores dos input
    let inputValueConcat = textShadowInputFreeConcat();

    // Aplicando novo valor
    myProp.newValue(textShadowStr, inputValueConcat);
});

// Select de inserir valor (Pré-definido)
$('#property-text-shadow-color-value-predefined').change(() => {
    let colorValPredefined = $('#property-text-shadow-color-value-predefined').val();

    // Verifica se o uso do valor Pré-Definido foi cancelado
    if (colorValPredefined == 'nenhum') {
        // Mantendo o valor do input de cor com base no tipo de valor
        colorConverter.inputAtt('#property-text-shadow-color-value', '#property-text-shadow-color-value-type');
        // Concatenando valores dos input
        let inputValueConcat = textShadowInputFreeConcat();
        // Aplicando novo valor
        myProp.newValue(textShadowStr, inputValueConcat);
        
        // Aplicar cor na div de Exemplo
        $('#predefined-example-text-shadow').css('background-color', valueTypeIdentfy);

    } else {
        // Mantendo o valor do input de cor com base no tipo de valor
        colorConverter.inputAtt('#property-text-shadow-color-value', '#property-text-shadow-color-value-type');
        // Concatenando valores dos input
        let inputValueConcat = textShadowInputFreeConcat(colorValPredefined);
        // Aplicando novo valor
        myProp.newValue(textShadowStr, inputValueConcat);
        
        // Aplicar cor na div de Exemplo
        $('#predefined-example-text-shadow').css('background-color', colorValPredefined);
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

//////////// Concatenar o valor de todos os input "Livre"
function textShadowInputFreeConcat(colorPredefined, pickerAtt) {
    let colorValue = undefined;
    // Selecionar os valores dos input
    const colorInput = $('#property-text-shadow-color-value');
    const colorValueType = $('#property-text-shadow-color-value-type').val();
    const horizontalValue = $('#property-text-shadow-horizontal-value').val();
    const horizontalValueType = $('#property-text-shadow-horizontal-value-type').val();
    const verticalValue = $('#property-text-shadow-vertical-value').val();
    const verticalValueType = $('#property-text-shadow-vertical-value-type').val();
    const blurValue = $('#property-text-shadow-blur-value').val();
    const blurValueType = $('#property-text-shadow-blur-value-type').val();


    // Verificando se o color 'picker' esta sento atualizado
    if (pickerAtt) {
        // Verificar o tipo de valor que o usuário selecionou
        switch (colorValueType) {
            case 'colorTypeHex':
                colorValue = pickerAtt.toHEXString();
                colorInput.val(colorValue);
                break;
            case 'colorTypeRGB':
                colorValue = pickerAtt.toRGBString();
                colorInput.val(colorValue);
                break;
            default:
                console.log(`ERRO! "${colorValueType}" Não é um tipo de valor válido para cores.`)
        };

        return `${horizontalValue}${horizontalValueType} ${verticalValue}${verticalValueType} ${blurValue}${blurValueType} ${colorValue}`
    };

    // Verificando se o valor é uma cor pré-definida
    if (colorPredefined) {
        return `${horizontalValue}${horizontalValueType} ${verticalValue}${verticalValueType} ${blurValue}${blurValueType} ${colorPredefined}`

    } else {
        // Identificando e convertendo o valor se necessário
        let valueTypeIdentfy = colorConverter.valueTypeIdentify(colorInput.val(), colorValueType);
        return `${horizontalValue}${horizontalValueType} ${verticalValue}${verticalValueType} ${blurValue}${blurValueType} ${valueTypeIdentfy}`
    };
};