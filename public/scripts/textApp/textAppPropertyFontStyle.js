// Propriedade em uso
const fontStyleStr = 'font-style';

/* ################################################################# */
/* ######################   MENU DA ESQUERDA   ##################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\  Ativar/Desativar a propriedade  /\/\/\/\/\/\/\/ */

// Seleção da Propriedade "font-style"
$('#properties-change-font-style').click(() => {
    let propertiesChecked = $('#properties-change-font-style').prop('checked');
    let asideDisplay = $('.prop__container__font-style');
    if (propertiesChecked) {
        // Ativar o Display lateral esquerdo para inserir valores
        asideDisplay.slideDown();
        // Aplicar os valores padrões
        myProp.newValue(fontStyleStr, 'normal');
    } else {
        // Garantir que será exibido o conteudo das propriedades
        $('.content__font-style').slideDown();
        // Desativar o Display lateral direito e remover o atributo do CSS
        asideDisplay.slideUp();
        // Reset de valores
        allApp.inputValueReset(['#property-font-style-value-predefined', 'normal']);
        myProp.removeValue(fontStyleStr);
    }
});

/* ################################################################# */
/* ######################   MENU DA DIREITA   ###################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/  ATT Propriedades de "font-style"  /\/\/\/\/\/\/\/ */

//////////// Esconder/Exibir Aba de valores
$('.title__font-style').click(() => {
    $('.content__font-style').slideToggle(200);
});

//////////// Aplicar os valores assim que eles forem alterados

// Select de inserir valor (Pré-definido)
$('#property-font-style-value-predefined').change(() => {
    let propVal = $('#property-font-style-value').val();
    let propValType = $('#property-font-style-value-type').val();
    let propValPredefined = $('#property-font-style-value-predefined').val();

    if (propValPredefined == 'nenhum') {
        myProp.newValue(fontStyleStr, propVal, propValType);

    } else {
        myProp.newValue(fontStyleStr, propValPredefined);
    };
});