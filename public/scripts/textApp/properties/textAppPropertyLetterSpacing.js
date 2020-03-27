// Propriedade em uso
const letterSpacingStr = 'letter-spacing';

/* ################################################################# */
/* ######################   MENU DA ESQUERDA   ##################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\  Ativar/Desativar a propriedade  /\/\/\/\/\/\/\/ */

// Seleção da Propriedade "letter-spacing
$('#properties-change-letter-spacing').click(() => {
    let propertiesChecked = $('#properties-change-letter-spacing').prop('checked');
    let asideDisplay = $('.prop__container__letter-spacing');
    if (propertiesChecked) {
        // Ativar o Display lateral esquerdo para inserir valores
        asideDisplay.slideDown();
        // Ativar o tipo de valor "Livre"
        allApp.buttonAndDisplayOff('#button-predefined-value-letter-spacing', '.predefined__value__container__letter-spacing');
        allApp.buttonAndDisplayOn('#button-free-value-letter-spacing', '.free__value__container__letter-spacing');
        // Aplicar os valores padrões
        myProp.newValue(letterSpacingStr, '0', 'px');
    } else {
        // Garantir que será exibido o conteudo das propriedades
        $('.content__letter-spacing').slideDown();
        // Desativar o Display lateral direito e remover o atributo do CSS
        asideDisplay.slideUp();
        // Reset de valores
        allApp.inputValueReset(['#property-letter-spacing-value', 0, '#property-letter-spacing-value-type', "px", '#property-letter-spacing-value-predefined', 'nenhum']);
        myProp.removeValue(letterSpacingStr);
    }
});

/* ################################################################# */
/* ######################   MENU DA DIREITA   ###################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/  ATT Propriedades de "letter-spacing"  /\/\/\/\/\/\/\/ */

//////////// Esconder/Exibir Aba de valores
$('.title__letter-spacing').click(() => {
    $('.content__letter-spacing').slideToggle(200);
});

//////////// Aplicar os valores assim que eles forem alterados
// Input de inserir Números
$('#property-letter-spacing-value').keyup(() => {
    let propVal = $('#property-letter-spacing-value').val();
    let propValType = $('#property-letter-spacing-value-type').val();

    // Verificar se é um valor numérico válido
    if (isNaN(propVal) == true) {
        $('#property-letter-spacing-value').addClass('invalid--value');
    } else {
        $('#property-letter-spacing-value').removeClass('invalid--value');
        myProp.newValue(letterSpacingStr, propVal, propValType);
        // Reseta o valor pré-definido
        $('#property-letter-spacing-value-predefined').val('nenhum');
    };
});

// Select de tipo de valor (Livre)
$('#property-letter-spacing-value-type').change(() => {
    let propVal = $('#property-letter-spacing-value').val();
    let propValType = $('#property-letter-spacing-value-type').val();
    myProp.newValue(letterSpacingStr, propVal, propValType);
    // Reseta o valor pré-definido
    $('#property-letter-spacing-value-predefined').val('nenhum');
});

// Select de inserir valor (Pré-definido)
$('#property-letter-spacing-value-predefined').change(() => {
    let propVal = $('#property-letter-spacing-value').val();
    let propValType = $('#property-letter-spacing-value-type').val();
    let propValPredefined = $('#property-letter-spacing-value-predefined').val();

    if (propValPredefined == 'nenhum') {
        myProp.newValue(letterSpacingStr, propVal, propValType);

    } else {
        myProp.newValue(letterSpacingStr, propValPredefined);
    };
});

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\/\/\  Uso de funções unicas  \/\/\/\/\/\/\/\/\/\/ */

//////////// Ativando o botão de valores "Pré-Definidos"
$('#button-predefined-value-letter-spacing').click(() => {
    allApp.buttonAndDisplayOff('#button-free-value-letter-spacing', '.free__value__container__letter-spacing');
    allApp.buttonAndDisplayOn('#button-predefined-value-letter-spacing', '.predefined__value__container__letter-spacing');
});

//////////// Ativando o botão de valores "Livre"
$('#button-free-value-letter-spacing').click(() => {
    allApp.buttonAndDisplayOff('#button-predefined-value-letter-spacing', '.predefined__value__container__letter-spacing');
    allApp.buttonAndDisplayOn('#button-free-value-letter-spacing', '.free__value__container__letter-spacing');
});

