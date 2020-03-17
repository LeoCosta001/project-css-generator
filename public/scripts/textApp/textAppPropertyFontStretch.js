// Propriedade em uso
const fontStretchStr = 'font-stretch';

/* ################################################################# */
/* ######################   MENU DA ESQUERDA   ##################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\  Ativar/Desativar a propriedade  /\/\/\/\/\/\/\/ */

// Seleção da Propriedade "font-stretch"
$('#properties-change-font-stretch').click(() => {
    let propertiesChecked = $('#properties-change-font-stretch').prop('checked');
    let asideDisplay = $('.prop__container__font-stretch');
    if (propertiesChecked) {
        // Ativar o Display lateral esquerdo para inserir valores
        asideDisplay.slideDown();
        // Aplicar os valores padrões
        myProp.newValue(fontStretchStr, 'normal');
    } else {
        // Garantir que será exibido o conteudo das propriedades
        $('.content__font-stretch').slideDown();
        // Desativar o Display lateral direito e remover o atributo do CSS
        asideDisplay.slideUp();
        // Reset de valores
        allApp.inputValueReset(['#property-font-stretch-value-predefined', 'normal']);
        myProp.removeValue(fontStretchStr);
    }
});

/* ################################################################# */
/* ######################   MENU DA DIREITA   ###################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/  ATT Propriedades de "font-stretch"  /\/\/\/\/\/\/\/ */

//////////// Esconder/Exibir Aba de valores
$('.title__font-stretch').click(() => {
    $('.content__font-stretch').slideToggle(200);
});

//////////// Aplicar os valores assim que eles forem alterados

// Select de inserir valor (Pré-definido)
$('#property-font-stretch-value-predefined').change(() => {
    let propVal = $('#property-font-stretch-value').val();
    let propValType = $('#property-font-stretch-value-type').val();
    let propValPredefined = $('#property-font-stretch-value-predefined').val();

    if (propValPredefined == 'nenhum') {
        myProp.newValue(fontStretchStr, propVal, propValType);

    } else {
        myProp.newValue(fontStretchStr, propValPredefined);
    };
});

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\/\/\  Uso de funções unicas  \/\/\/\/\/\/\/\/\/\/ 

//////////// Ativando o botão de valores "Pré-Definidos"
$('#button-predefined-value-font-stretch').click(() => {
    allApp.buttonAndDisplayOff('#button-free-value-font-stretch', '.free__value__container__font-stretch');
    allApp.buttonAndDisplayOn('#button-predefined-value-font-stretch', '.predefined__value__container__font-stretch');
});

//////////// Ativando o botão de valores "Livre"
$('#button-free-value-font-stretch').click(() => {
    allApp.buttonAndDisplayOff('#button-predefined-value-font-stretch', '.predefined__value__container__font-stretch');
    allApp.buttonAndDisplayOn('#button-free-value-font-stretch', '.free__value__container__font-stretch');
});*/

