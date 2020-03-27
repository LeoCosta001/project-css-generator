// Propriedade em uso
const wordSpacingStr = 'word-spacing';

/* ################################################################# */
/* ######################   MENU DA ESQUERDA   ##################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\  Ativar/Desativar a propriedade  /\/\/\/\/\/\/\/ */

// Seleção da Propriedade "word-spacing
$('#properties-change-word-spacing').click(() => {
    let propertiesChecked = $('#properties-change-word-spacing').prop('checked');
    let asideDisplay = $('.prop__container__word-spacing');
    if (propertiesChecked) {
        // Ativar o Display lateral esquerdo para inserir valores
        asideDisplay.slideDown();
        // Ativar o tipo de valor "Livre"
        allApp.buttonAndDisplayOff('#button-predefined-value-word-spacing', '.predefined__value__container__word-spacing');
        allApp.buttonAndDisplayOn('#button-free-value-word-spacing', '.free__value__container__word-spacing');
        // Aplicar os valores padrões
        myProp.newValue(wordSpacingStr, '0', 'px');
    } else {
        // Garantir que será exibido o conteudo das propriedades
        $('.content__word-spacing').slideDown();
        // Desativar o Display lateral direito e remover o atributo do CSS
        asideDisplay.slideUp();
        // Reset de valores
        allApp.inputValueReset(['#property-word-spacing-value', 0, '#property-word-spacing-value-type', "px", '#property-word-spacing-value-predefined', 'nenhum']);
        myProp.removeValue(wordSpacingStr);
    }
});

/* ################################################################# */
/* ######################   MENU DA DIREITA   ###################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/  ATT Propriedades de "word-spacing"  /\/\/\/\/\/\/\/ */

//////////// Esconder/Exibir Aba de valores
$('.title__word-spacing').click(() => {
    $('.content__word-spacing').slideToggle(200);
});

//////////// Aplicar os valores assim que eles forem alterados
// Input de inserir Números
$('#property-word-spacing-value').keyup(() => {
    let propVal = $('#property-word-spacing-value').val();
    let propValType = $('#property-word-spacing-value-type').val();

    // Verificar se é um valor numérico válido
    if (isNaN(propVal) == true) {
        $('#property-word-spacing-value').addClass('invalid--value');
    } else {
        $('#property-word-spacing-value').removeClass('invalid--value');
        myProp.newValue(wordSpacingStr, propVal, propValType);
        // Reseta o valor pré-definido
        $('#property-word-spacing-value-predefined').val('nenhum');
    };
});

// Select de tipo de valor (Livre)
$('#property-word-spacing-value-type').change(() => {
    let propVal = $('#property-word-spacing-value').val();
    let propValType = $('#property-word-spacing-value-type').val();
    myProp.newValue(wordSpacingStr, propVal, propValType);
    // Reseta o valor pré-definido
    $('#property-word-spacing-value-predefined').val('nenhum');
});

// Select de inserir valor (Pré-definido)
$('#property-word-spacing-value-predefined').change(() => {
    let propVal = $('#property-word-spacing-value').val();
    let propValType = $('#property-word-spacing-value-type').val();
    let propValPredefined = $('#property-word-spacing-value-predefined').val();

    if (propValPredefined == 'nenhum') {
        myProp.newValue(wordSpacingStr, propVal, propValType);

    } else {
        myProp.newValue(wordSpacingStr, propValPredefined);
    };
});

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\/\/\  Uso de funções unicas  \/\/\/\/\/\/\/\/\/\/ */

//////////// Ativando o botão de valores "Pré-Definidos"
$('#button-predefined-value-word-spacing').click(() => {
    allApp.buttonAndDisplayOff('#button-free-value-word-spacing', '.free__value__container__word-spacing');
    allApp.buttonAndDisplayOn('#button-predefined-value-word-spacing', '.predefined__value__container__word-spacing');
});

//////////// Ativando o botão de valores "Livre"
$('#button-free-value-word-spacing').click(() => {
    allApp.buttonAndDisplayOff('#button-predefined-value-word-spacing', '.predefined__value__container__word-spacing');
    allApp.buttonAndDisplayOn('#button-free-value-word-spacing', '.free__value__container__word-spacing');
});

