// Propriedade em uso
const fontSizeStr = 'font-size';

/* ################################################################# */
/* ######################   MENU DA ESQUERDA   ##################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\  Ativar/Desativar a propriedade  /\/\/\/\/\/\/\/ */

// Seleção da Propriedade "font-size
$('#properties-change-font-size').click(() => {
    let propertiesChecked = $('#properties-change-font-size').prop('checked');
    let asideDisplay = $('.prop__container__font-size');
    if (propertiesChecked) {
        // Ativar o Display lateral esquerdo para inserir valores
        asideDisplay.slideDown();
        // Ativar o tipo de valor "Livre"
        allApp.buttonAndDisplayOff('#button-predefined-value-font-size', '.predefined__value__container__font-size');
        allApp.buttonAndDisplayOn('#button-free-value-font-size', '.free__value__container__font-size');
        // Aplicar os valores padrões
        myProp.newValue(fontSizeStr, '12', 'pt');
    } else {
        // Garantir que será exibido o conteudo das propriedades
        $('.content__font-size').slideDown();
        // Desativar o Display lateral direito e remover o atributo do CSS
        asideDisplay.slideUp();
        // Reset de valores
        allApp.inputValueReset([
            '#property-font-size-value', 12,
            '#property-font-size-value-type', "pt",
            '#property-font-size-value-predefined', 'nenhum'
        ]);
        myProp.removeValue(fontSizeStr);
    }
});

/* ################################################################# */
/* ######################   MENU DA DIREITA   ###################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/  ATT Propriedades de "font-size"  /\/\/\/\/\/\/\/ */

//////////// Esconder/Exibir Aba de valores
$('.title__font-size').click(() => {
    $('.content__font-size').slideToggle(200);
});

//////////// Aplicar os valores assim que eles forem alterados
// Input de inserir Números
$('#property-font-size-value').keyup(() => {
    let propVal = $('#property-font-size-value').val();
    let propValType = $('#property-font-size-value-type').val();

    // Verificar se é um valor numérico válido
    if (isNaN(propVal) == true) {
        $('#property-font-size-value').addClass('invalid--value');
    } else {
        $('#property-font-size-value').removeClass('invalid--value');
        myProp.newValue(fontSizeStr, propVal, propValType);
        // Reseta o valor pré-definido
        $('#property-font-size-value-predefined').val('nenhum');
    };
});

// Select de tipo de valor (Livre)
$('#property-font-size-value-type').change(() => {
    let propVal = $('#property-font-size-value').val();
    let propValType = $('#property-font-size-value-type').val();
    myProp.newValue(fontSizeStr, propVal, propValType);
    // Reseta o valor pré-definido
    $('#property-font-size-value-predefined').val('nenhum');
});

// Select de inserir valor (Pré-definido)
$('#property-font-size-value-predefined').change(() => {
    let propVal = $('#property-font-size-value').val();
    let propValType = $('#property-font-size-value-type').val();
    let propValPredefined = $('#property-font-size-value-predefined').val();

    if (propValPredefined == 'nenhum') {
        myProp.newValue(fontSizeStr, propVal, propValType);

    } else {
        myProp.newValue(fontSizeStr, propValPredefined);
    };
});

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\/\/\  Uso de funções unicas  \/\/\/\/\/\/\/\/\/\/ */

//////////// Ativando o botão de valores "Pré-Definidos"
$('#button-predefined-value-font-size').click(() => {
    allApp.buttonAndDisplayOff('#button-free-value-font-size', '.free__value__container__font-size');
    allApp.buttonAndDisplayOn('#button-predefined-value-font-size', '.predefined__value__container__font-size');
});

//////////// Ativando o botão de valores "Livre"
$('#button-free-value-font-size').click(() => {
    allApp.buttonAndDisplayOff('#button-predefined-value-font-size', '.predefined__value__container__font-size');
    allApp.buttonAndDisplayOn('#button-free-value-font-size', '.free__value__container__font-size');
});

