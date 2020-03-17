// Propriedade em uso
const fontWeightStr = 'font-weight';

/* ################################################################# */
/* ######################   MENU DA ESQUERDA   ##################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\  Ativar/Desativar a propriedade  /\/\/\/\/\/\/\/ */

// Seleção da Propriedade "font-weight"
$('#properties-change-font-weight').click(() => {
    let propertiesChecked = $('#properties-change-font-weight').prop('checked');
    let asideDisplay = $('.prop__container__font-weight');
    if (propertiesChecked) {
        // Ativar o Display lateral esquerdo para inserir valores
        asideDisplay.slideDown();
        // Aplicar os valores padrões
        myProp.newValue(fontWeightStr, 'normal');
    } else {
        // Garantir que será exibido o conteudo das propriedades
        $('.content__font-weight').slideDown();
        // Desativar o Display lateral direito e remover o atributo do CSS
        asideDisplay.slideUp();
        // Reset de valores
        allApp.inputValueReset(['#property-font-weight-value-predefined', 'normal']);
        myProp.removeValue(fontWeightStr);
    }
});

/* ################################################################# */
/* ######################   MENU DA DIREITA   ###################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/  ATT Propriedades de "font-weight"  /\/\/\/\/\/\/\/ */

//////////// Esconder/Exibir Aba de valores
$('.title__font-weight').click(() => {
    $('.content__font-weight').slideToggle(200);
});

//////////// Aplicar os valores assim que eles forem alterados

// Select de inserir valor (Pré-definido)
$('#property-font-weight-value-predefined').change(() => {
    let propVal = $('#property-font-weight-value').val();
    let propValType = $('#property-font-weight-value-type').val();
    let propValPredefined = $('#property-font-weight-value-predefined').val();

    if (propValPredefined == 'nenhum') {
        myProp.newValue(fontWeightStr, propVal, propValType);

    } else {
        myProp.newValue(fontWeightStr, propValPredefined);
    };
});