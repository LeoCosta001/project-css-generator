
// Input do textApp.values.currentShadowNumber
let shadowSelectNumberInput = $('#property-text-shadow-multiply-value');

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
        // Aplicar os valores padrões
        let inputValueConcat = textApp.attMultipleTextShadow(textApp.values.currentShadowNumber - 1);
        myProp.newValue(textShadowStr, inputValueConcat);
        // Ativar o Display lateral esquerdo para inserir valores
        asideDisplay.slideDown();
        // Ativar o tipo de valor "Livre"
        allApp.buttonAndDisplayOff('#button-predefined-value-text-shadow', '.predefined__value__container__text-shadow');
        allApp.buttonAndDisplayOn('#button-free-value-text-shadow', '.free__value__container__text-shadow');
    } else {
        // Garantir que será exibido o conteudo das propriedades
        $('.content__text-shadow').slideDown(200);
        // Desativar o Display lateral direito e remover o atributo do CSS
        asideDisplay.slideUp();
        // Reset de valores
        allApp.inputValueReset([
            '#property-text-shadow-multiply-value', '1',
            '#property-text-shadow-color-value', '#000000',
            '#property-text-shadow-color-value-type', 'colorTypeHex',
            '#property-text-shadow-color-value-predefined', 'nenhum',
            '#property-text-shadow-horizontal-value', '0',
            '#property-text-shadow-horizontal-value-type', 'px',
            '#property-text-shadow-vertical-value', '0',
            '#property-text-shadow-vertical-value-type', 'px',
            '#property-text-shadow-blur-value', '0',
            '#property-text-shadow-blur-value-type', 'px'
        ]);
        $('#text-shadow-total-shadow').text(1);
        textApp.shadowValuesReset();

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
    let colorValPredefined = $('#property-text-shadow-color-value-predefined').val();
    // Selecionando o Input de cor e o Select
    const colorValueType = $('#property-text-shadow-color-value-type').val();
    const colorInput = $('#property-text-shadow-color-value');

    let colorValue = undefined;

    // Verificar o tipo de valor que o usuário selecionou
    switch (colorValueType) {
        case 'colorTypeHex':
            colorValue = picker.toHEXString();
            colorInput.val(colorValue);
            break;
        case 'colorTypeRGB':
            colorValue = picker.toRGBString();
            colorInput.val(colorValue);
            break;
        default:
            console.log(`ERRO! "${colorValueType}" Não é um tipo de valor válido para cores.`)
    };

    // Aplicando novos valores no "shadowNumber"
    let shadowNumberSelect = textApp.values.shadowPropertiesContainer[textApp.values.currentShadowNumber - 1];
    let newValueConcat = {
        status: shadowNumberSelect.status,
        color: colorValue,
        colorType: shadowNumberSelect.colorType,
        horizontalValue: shadowNumberSelect.horizontalValue,
        horizontalType: shadowNumberSelect.horizontalType,
        verticalValue: shadowNumberSelect.verticalValue,
        verticalType: shadowNumberSelect.verticalType,
        blurValue: shadowNumberSelect.blurValue,
        blurType: shadowNumberSelect.blurType,
        colorPredefined: shadowNumberSelect.colorPredefined
    };
    // Verificando se esta sendo usado uma cor pré-definida
    if (colorValPredefined == 'nenhum') {
        newValueConcat.colorPredefined = 'nenhum'
    };
    let inputValueConcat = textApp.attMultipleTextShadow(textApp.values.currentShadowNumber - 1, newValueConcat);

    // Aplicando novo valor
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

    // Aplicando novos valores no "shadowNumber"
    let shadowNumberSelect = textApp.values.shadowPropertiesContainer[textApp.values.currentShadowNumber - 1];
    let inputValueConcat = textApp.attMultipleTextShadow(textApp.values.currentShadowNumber - 1, {
        status: shadowNumberSelect.status,
        color: valueTypeIdentfy,
        colorType: valueType,
        horizontalValue: shadowNumberSelect.horizontalValue,
        horizontalType: shadowNumberSelect.horizontalType,
        verticalValue: shadowNumberSelect.verticalValue,
        verticalType: shadowNumberSelect.verticalType,
        blurValue: shadowNumberSelect.blurValue,
        blurType: shadowNumberSelect.blurType,
        colorPredefined: shadowNumberSelect.colorPredefined
    });

    // Aplicando novo valor
    myProp.newValue(textShadowStr, inputValueConcat);
    // Reseta o valor pré-definido
    $('#property-text-shadow-color-value-predefined').val('nenhum');
});

// Movimento Horizontal (Livre)
$('#property-text-shadow-horizontal-value').keyup(() => {
    // Mantendo o valor da cor com base no tipo de valor
    colorConverter.inputAtt('#property-text-shadow-color-value', '#property-text-shadow-color-value-type');

    // Verificando caracteres invalidos
    let invalidInput = myProp.invalidInputNumberValue('#property-text-shadow-horizontal-value');

    // Varificar seos caracteres são válidos
    if (!invalidInput) {
        // Aplicando novos valores no "shadowNumber"
        let shadowNumberSelect = textApp.values.shadowPropertiesContainer[textApp.values.currentShadowNumber - 1];
        let inputValueConcat = textApp.attMultipleTextShadow(textApp.values.currentShadowNumber - 1, {
            status: shadowNumberSelect.status,
            color: shadowNumberSelect.color,
            colorType: shadowNumberSelect.colorType,
            horizontalValue: $('#property-text-shadow-horizontal-value').val(),
            horizontalType: shadowNumberSelect.horizontalType,
            verticalValue: shadowNumberSelect.verticalValue,
            verticalType: shadowNumberSelect.verticalType,
            blurValue: shadowNumberSelect.blurValue,
            blurType: shadowNumberSelect.blurType,
            colorPredefined: shadowNumberSelect.colorPredefined
        });

        // Aplicando novo valor
        myProp.newValue(textShadowStr, inputValueConcat);
    };
});

// Tipo de Movimento Horizontal (Livre)
$('#property-text-shadow-horizontal-value-type').change(() => {
    // Mantendo o valor da cor com base no tipo de valor
    colorConverter.inputAtt('#property-text-shadow-color-value', '#property-text-shadow-color-value-type');

    // Aplicando novos valores no "shadowNumber"
    let shadowNumberSelect = textApp.values.shadowPropertiesContainer[textApp.values.currentShadowNumber - 1];
    let inputValueConcat = textApp.attMultipleTextShadow(textApp.values.currentShadowNumber - 1, {
        status: shadowNumberSelect.status,
        color: shadowNumberSelect.color,
        colorType: shadowNumberSelect.colorType,
        horizontalValue: shadowNumberSelect.horizontalValue,
        horizontalType: $('#property-text-shadow-horizontal-value-type').val(),
        verticalValue: shadowNumberSelect.verticalValue,
        verticalType: shadowNumberSelect.verticalType,
        blurValue: shadowNumberSelect.blurValue,
        blurType: shadowNumberSelect.blurType,
        colorPredefined: shadowNumberSelect.colorPredefined
    });

    // Aplicando novo valor
    myProp.newValue(textShadowStr, inputValueConcat);
});

// Movimento Vertical (Livre)
$('#property-text-shadow-vertical-value').keyup(() => {
    // Mantendo o valor da cor com base no tipo de valor
    colorConverter.inputAtt('#property-text-shadow-color-value', '#property-text-shadow-color-value-type');

    // Verificando caracteres invalidos
    let invalidInput = myProp.invalidInputNumberValue('#property-text-shadow-horizontal-value');

    // Varificar seos caracteres são válidos
    if (!invalidInput) {
        // Aplicando novos valores no "shadowNumber"
        let shadowNumberSelect = textApp.values.shadowPropertiesContainer[textApp.values.currentShadowNumber - 1];
        let inputValueConcat = textApp.attMultipleTextShadow(textApp.values.currentShadowNumber - 1, {
            status: shadowNumberSelect.status,
            color: shadowNumberSelect.color,
            colorType: shadowNumberSelect.colorType,
            horizontalValue: shadowNumberSelect.horizontalValue,
            horizontalType: shadowNumberSelect.horizontalType,
            verticalValue: $('#property-text-shadow-vertical-value').val(),
            verticalType: shadowNumberSelect.verticalType,
            blurValue: shadowNumberSelect.blurValue,
            blurType: shadowNumberSelect.blurType,
            colorPredefined: shadowNumberSelect.colorPredefined
        });

        // Aplicando novo valor
        myProp.newValue(textShadowStr, inputValueConcat);
    };
});

// Tipo de Movimento Vertical (Livre)
$('#property-text-shadow-vertical-value-type').change(() => {
    // Mantendo o valor da cor com base no tipo de valor
    colorConverter.inputAtt('#property-text-shadow-color-value', '#property-text-shadow-color-value-type');

    // Aplicando novos valores no "shadowNumber"
    let shadowNumberSelect = textApp.values.shadowPropertiesContainer[textApp.values.currentShadowNumber - 1];
    let inputValueConcat = textApp.attMultipleTextShadow(textApp.values.currentShadowNumber - 1, {
        status: shadowNumberSelect.status,
        color: shadowNumberSelect.color,
        colorType: shadowNumberSelect.colorType,
        horizontalValue: shadowNumberSelect.horizontalValue,
        horizontalType: shadowNumberSelect.horizontalType,
        verticalValue: shadowNumberSelect.verticalValue,
        verticalType: $('#property-text-shadow-vertical-value-type').val(),
        blurValue: shadowNumberSelect.blurValue,
        blurType: shadowNumberSelect.blurType,
        colorPredefined: shadowNumberSelect.colorPredefined
    });

    // Aplicando novo valor
    myProp.newValue(textShadowStr, inputValueConcat);
});

// Nível de desfoque (Livre)
$('#property-text-shadow-blur-value').keyup(() => {
    // Mantendo o valor da cor com base no tipo de valor
    colorConverter.inputAtt('#property-text-shadow-color-value', '#property-text-shadow-color-value-type');

    // Verificando caracteres invalidos
    let invalidInput = myProp.invalidInputNumberValue('#property-text-shadow-horizontal-value');

    // Varificar seos caracteres são válidos
    if (!invalidInput) {
        // Aplicando novos valores no "shadowNumber"
        let shadowNumberSelect = textApp.values.shadowPropertiesContainer[textApp.values.currentShadowNumber - 1];
        let inputValueConcat = textApp.attMultipleTextShadow(textApp.values.currentShadowNumber - 1, {
            status: shadowNumberSelect.status,
            color: shadowNumberSelect.color,
            colorType: shadowNumberSelect.colorType,
            horizontalValue: shadowNumberSelect.horizontalValue,
            horizontalType: shadowNumberSelect.horizontalType,
            verticalValue: shadowNumberSelect.verticalValue,
            verticalType: shadowNumberSelect.verticalType,
            blurValue: $('#property-text-shadow-blur-value').val(),
            blurType: shadowNumberSelect.blurType,
            colorPredefined: shadowNumberSelect.colorPredefined
        });

        // Aplicando novo valor
        myProp.newValue(textShadowStr, inputValueConcat);
    };
});

// Tipo de Nível de desfoque (Livre)
$('#property-text-shadow-blur-value-type').change(() => {
    // Mantendo o valor da cor com base no tipo de valor
    colorConverter.inputAtt('#property-text-shadow-color-value', '#property-text-shadow-color-value-type');

    // Verificando caracteres invalidos
    let invalidInput = myProp.invalidInputNumberValue('#property-text-shadow-horizontal-value');

    // Varificar seos caracteres são válidos
    if (!invalidInput) {
        // Aplicando novos valores no "shadowNumber"
        let shadowNumberSelect = textApp.values.shadowPropertiesContainer[textApp.values.currentShadowNumber - 1];
        let inputValueConcat = textApp.attMultipleTextShadow(textApp.values.currentShadowNumber - 1, {
            status: shadowNumberSelect.status,
            color: shadowNumberSelect.color,
            colorType: shadowNumberSelect.colorType,
            horizontalValue: shadowNumberSelect.horizontalValue,
            horizontalType: shadowNumberSelect.horizontalType,
            verticalValue: shadowNumberSelect.verticalValue,
            verticalType: shadowNumberSelect.verticalType,
            blurValue: shadowNumberSelect.blurValue,
            blurType: $('#property-text-shadow-blur-value-type').val(),
            colorPredefined: shadowNumberSelect.colorPredefined
        });

        // Aplicando novo valor
        myProp.newValue(textShadowStr, inputValueConcat);
    };
});

// Select de inserir valor (Pré-definido)
$('#property-text-shadow-color-value-predefined').change(() => {
    let colorValPredefined = $('#property-text-shadow-color-value-predefined').val();

    // Mantendo o valor do input de cor com base no tipo de valor
    colorConverter.inputAtt('#property-text-shadow-color-value', '#property-text-shadow-color-value-type');

    let shadowNumberSelect = textApp.values.shadowPropertiesContainer[textApp.values.currentShadowNumber - 1];
    let newValueConcat = {
        status: shadowNumberSelect.status,
        color: shadowNumberSelect.color,
        colorType: shadowNumberSelect.colorType,
        horizontalValue: shadowNumberSelect.horizontalValue,
        horizontalType: shadowNumberSelect.horizontalType,
        verticalValue: shadowNumberSelect.verticalValue,
        verticalType: shadowNumberSelect.verticalType,
        blurValue: shadowNumberSelect.blurValue,
        blurType: shadowNumberSelect.blurType,
        colorPredefined: 'nenhum'
    };

    // Verifica se o uso do valor Pré-Definido foi cancelado
    if (colorValPredefined == 'nenhum') {
        // Aplicando novos valores no "shadowNumber"
        let inputValueConcat = textApp.attMultipleTextShadow(textApp.values.currentShadowNumber - 1, newValueConcat);
        // Aplicando novo valor
        myProp.newValue(textShadowStr, inputValueConcat);
        // Aplicar cor na div de Exemplo
        $('#predefined-example-text-shadow').css('background-color', shadowNumberSelect.color);
    } else {
        newValueConcat.colorPredefined = colorValPredefined;
        // Aplicando novos valores no "shadowNumber"
        let inputValueConcat = textApp.attMultipleTextShadow(textApp.values.currentShadowNumber - 1, newValueConcat);
        // Aplicando novo valor
        myProp.newValue(textShadowStr, inputValueConcat);
        // Aplicar cor na div de Exemplo
        $('#predefined-example-text-shadow').css('background-color', colorValPredefined);
    };
});

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/  Configurando multiplas sombras  \/\/\/\/\/\/\/\/ */

//////////// Ativando nova sombra
$('#toggle-button-text-shadow').click(() => {
    let toggleChecked = $('#toggle-button-text-shadow').prop('checked');
    if (toggleChecked) {
        // Ativando todos os input de "text-shadow"
        textApp.enableTextShadow();
        // Aplicando novos valores
        textApp.newMultipleTextShadow(textApp.values.currentShadowNumber - 1)
        // Alterando o numero total de sombras ativadas
        textApp.values.totalShadowNumber++
        $('#text-shadow-total-shadow').text(textApp.values.totalShadowNumber)
    } else {
        // Verificar se é a sombra principal que esta sendo desativada
        if (textApp.values.currentShadowNumber == 1) {
            $('#toggle-button-text-shadow').prop('checked', true);
        } else {
            // Desativando todos os input de "text-shadow"
            textApp.disableTextShadow();
            // Aplicando novos valores
            textApp.removeMultipleTextShadow(textApp.values.currentShadowNumber - 1);
            // Alterando o numero total de sombras ativadas
            textApp.values.totalShadowNumber--
            $('#text-shadow-total-shadow').text(textApp.values.totalShadowNumber);
        };
    };
});


//////////// Setas laterai de seleção da sombra

// Próxima selecção
$('#text-shadow-select-next').click(() => {
    // Valor máximo de containers é 20
    if (textApp.values.currentShadowNumber < textApp.values.shadowPropertiesContainer.length) {
        textApp.values.currentShadowNumber++
        shadowSelectNumberInput.val(textApp.values.currentShadowNumber);

        // Verificar o status do "shadowNumber".
        if (textApp.values.shadowPropertiesContainer[textApp.values.currentShadowNumber - 1].status == false) {
            // Desativando todos os input de "text-shadow"
            textApp.disableTextShadow();

        } else {
            // Ativando todos os input de "text-shadow"
            textApp.enableTextShadow();
            // Atualizando os valores dos input correspondente ao "shadowNumber"
            textApp.attAllInputTextShadow(textApp.values.currentShadowNumber - 1);
        }
    }
});

// Seleção anterior
$('#text-shadow-select-previous').click(() => {
    if (textApp.values.currentShadowNumber > 1) {
        textApp.values.currentShadowNumber--
        shadowSelectNumberInput.val(textApp.values.currentShadowNumber);

        // Verificar o status do "shadowNumber".
        if (textApp.values.shadowPropertiesContainer[textApp.values.currentShadowNumber - 1].status == false) {
            // Desativando todos os input de "text-shadow"
            textApp.disableTextShadow();

        } else {
            // Ativando todos os input de "text-shadow"
            textApp.enableTextShadow();
            // Atualizando os valores dos input correspondente ao "shadowNumber"
            textApp.attAllInputTextShadow(textApp.values.currentShadowNumber - 1);
        }
    }
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