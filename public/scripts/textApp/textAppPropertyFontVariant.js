// Propriedade em uso
const fontVariantStr = 'font-variant';

/* ################################################################# */
/* ######################   MENU DA ESQUERDA   ##################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\  Ativar/Desativar a propriedade  /\/\/\/\/\/\/\/ */

// Seleção da Propriedade "font-variant"
$('#properties-change-font-variant').click(() => {
    let propertiesChecked = $('#properties-change-font-variant').prop('checked');
    let asideDisplay = $('.prop__container__font-variant');
    if (propertiesChecked) {
        // Ativar o Display lateral esquerdo para inserir valores
        asideDisplay.slideDown();
        // Aplicar os valores padrões
        myProp.newValue(fontVariantStr, 'normal');
    } else {
        // Garantir que será exibido o conteudo das propriedades
        $('.content__font-variant').slideDown();
        // Desativar o Display lateral direito e remover o atributo do CSS
        asideDisplay.slideUp();
        // Reset de valores
        allApp.inputValueReset(['#property-font-variant-value-predefined', 'normal']);
        myProp.removeValue(fontVariantStr);
    }
});

/* ################################################################# */
/* ######################   MENU DA DIREITA   ###################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/  ATT Propriedades de "font-variant"  /\/\/\/\/\/\/\/ */

//////////// Esconder/Exibir Aba de valores
$('.title__font-variant').click(() => {
    $('.content__font-variant').slideToggle(200);
});

//////////// Aplicar os valores assim que eles forem alterados

// Select de inserir valor (Pré-definido)
$('#property-font-variant-value-predefined').change(() => {
    let propVal = $('#property-font-variant-value').val();
    let propValType = $('#property-font-variant-value-type').val();
    let propValPredefined = $('#property-font-variant-value-predefined').val();

    if (propValPredefined == 'nenhum') {
        myProp.newValue(fontVariantStr, propVal, propValType);

    } else {
        myProp.newValue(fontVariantStr, propValPredefined);
    };
});