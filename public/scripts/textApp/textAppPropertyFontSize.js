// Propriedade em uso
const fontSizeStr = 'font-size';

/* ################################################################# */
/* ######################   MENU DA ESQUERDA   ##################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\/\/\  Uso de funções unicas  \/\/\/\/\/\/\/\/\/\/ */

// Seleção da Propriedade "font-size
$('#properties-change-font-size').click(() => {
    let propertiesChecked = $('#properties-change-font-size').prop('checked');
    if (propertiesChecked) {
        let inputValue = $('#property-font-size-value').val();
        let inputValueType = $('#property-font-size-value-type').val();
        // Garantir que será exibido o conteudo das propriedades
        $('.textApp-properties-content').slideDown(200);
        // Ativar o Display lateral esquerdo para inserir valores
        $('.textApp-aside-menu-right-properties-font-size').slideDown();
        // Ativar o tipo de valor "Livre"
        fontSizeValueFree();
        // Aplicar os valores padrões
        textAppView.css(fontSizeStr, inputValue + inputValueType);
        propertiesInTextarea(fontSizeStr);
    } else {
        // Desativar o Display lateral direito e remover o atributo do CSS
        $('.textApp-aside-menu-right-properties-font-size').slideUp();
        textAppView.css(fontSizeStr, "");
        // Reset de valores
        inputValueReset('#property-font-size-value', 12, '#property-font-size-value-type', "pt", '#property-font-size-value-predefined', 'nenhum');
        textareaPropertiesRemove(fontSizeStr);
    }
});

/* ################################################################# */
/* ######################   MENU DA DIREITA   ###################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/  ATT Propriedades de "font-size"  /\/\/\/\/\/\/\/ */

//////////// Esconder/Exibir Aba de valores
$('.textApp-properties-title-font-size').click(() => {
    $('.textApp-properties-content-font-size').slideToggle(200);
});

//////////// Aplicar os valores assim que eles forem alterados
// Input de inserir Números
$('#property-font-size-value').keyup(() => {
    propertiesApplyFreeValue(fontSizeStr, '#property-font-size-value', '#property-font-size-value-type');
    propertiesInTextarea(fontSizeStr);

});

// Select de tipo de valor (Livre)
$('#property-font-size-value-type').change(() => {
    propertiesApplyFreeValue(fontSizeStr, '#property-font-size-value', '#property-font-size-value-type');
    propertiesInTextarea(fontSizeStr);

});

// Select de inserir valor (Pré-definido)
$('#property-font-size-value-predefined').change(() => {
    propertiesApplyPredefinedValue(fontSizeStr, '#property-font-size-value-predefined', '#property-font-size-value', '#property-font-size-value-type');
    propertiesInTextarea(fontSizeStr);

});

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\/\/\  Uso de funções unicas  \/\/\/\/\/\/\/\/\/\/ */

//////////// Ativando o botão de valores "Pré-Definidos"
$('#button-predefined-value-font-size').click(() => {
    fontSizeValuePredefined()
});

//////////// Ativando o botão de valores "Livre"
$('#button-free-value-font-size').click(() => {
    fontSizeValueFree();
});


/* ################################################################# */
/* ########################  F U N Ç Õ E S  ######################## */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\/  Propriedade "font-size"  /\/\/\/\/\/\/\/\/ */

//////////// Ativando tipo de valores de font-size para "livre" 
function fontSizeValueFree() {
    buttonActiveValueType(
        '#button-free-value-font-size',
        '.properties-input-free-value-font-size',
        '#button-predefined-value-font-size',
        '.properties-input-predefined-value-font-size'
    );
};

//////////// Ativando o tipo de valores de font-size para "livre" 
function fontSizeValuePredefined() {
    buttonActiveValueType(
        '#button-predefined-value-font-size',
        '.properties-input-predefined-value-font-size',
        '#button-free-value-font-size',
        '.properties-input-free-value-font-size'
    );
};

