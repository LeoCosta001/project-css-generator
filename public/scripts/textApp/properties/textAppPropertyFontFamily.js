// Propriedade em uso
const fontFamilyStr = 'font-family';

/* ################################################################# */
/* ######################   MENU DA ESQUERDA   ##################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\  Ativar/Desativar a propriedade  /\/\/\/\/\/\/\/ */

// Seleção da Propriedade "font-family"
$('#properties-change-font-family').click(() => {
    let propertiesChecked = $('#properties-change-font-family').prop('checked');
    let asideDisplay = $('.prop__container__font-family');
    if (propertiesChecked) {
        // Ativar o Display lateral esquerdo para inserir valores
        asideDisplay.slideDown();
        // Aplicar os valores padrões
        myProp.newValue(fontFamilyStr, 'none');
    } else {
        // Garantir que será exibido o conteudo das propriedades
        $('.content__font-family').slideDown();
        // Desativar o Display lateral direito e remover o atributo do CSS
        asideDisplay.slideUp();
        // Reset de valores
        allApp.inputValueReset(['#property-font-family-value-predefined', 'none']);
        myProp.removeValue(fontFamilyStr);
    }
});

/* ################################################################# */
/* ######################   MENU DA DIREITA   ###################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/  ATT Propriedades de "font-family"  /\/\/\/\/\/\/\/ */

//////////// Esconder/Exibir Aba de valores
$('.title__font-family').click(() => {
    $('.content__font-family').slideToggle(200);
});

//////////// Aplicar os valores assim que eles forem alterados

// Select de inserir valor (Pré-definido)
$('#property-font-family-value-predefined').change(() => {
    let propVal = $('#property-font-family-value').val();
    let propValType = $('#property-font-family-value-type').val();
    let propValPredefined = $('#property-font-family-value-predefined').val();

    if (propValPredefined == 'nenhum') {
        myProp.newValue(fontFamilyStr, propVal, propValType);

    } else {
        myProp.newValue(fontFamilyStr, propValPredefined);
    };
});