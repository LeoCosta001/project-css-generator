// Texto de visualização
const textAppView = $('#textAppView');

$('.textApp-properties-title').click(() => {
    $('.textApp-properties-content').slideToggle(200);
})

/* ################################################################# */
/* ######################   MENU DA ESQUERDA   ##################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/   Seleção da Propriedade "font-size"  /\/\/\/\/\/\/ */

$('#properties-change-font-size').click(() => {
    let propertiesChecked = $('#properties-change-font-size').prop('checked');
    if (propertiesChecked == true) {
        let inputValue = $('#property-font-size-value').val();
        let inputValueType = $('#property-font-size-value-type').val();
        // Ativar o Display lateral esquerdo para inserir valores
        $('.textApp-aside-menu-right-properties-font-size').slideDown();
        // Ativar o tipo de valor "Livre"
        fontSizeValueFree();
        // Aplicar os valores padrões
        textAppView.css('font-size', inputValue + inputValueType);
    } else {
        // Desativar o Display lateral direito e remover o atributo do CSS
        $('.textApp-aside-menu-right-properties-font-size').slideUp();
        textAppView.css('font-size', "");
        // Reset de valores
        propertiesReset('#property-font-size-value', 12, '#property-font-size-value-type', "pt", '#property-font-size-value-predefined', 'nenhum');
    }
});

/* ################################################################# */
/* ######################   MENU DA DIREITA   ###################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\/  ATT Propriedade "font-size"  /\/\/\/\/\/\/\/\/ */

//////////// Ativando o botão de valores "Pré-Definidos"
$('#button-predefined-value-font-size').click(() => {
    fontSizeValuePredefined()
});

//////////// Ativando o botão de valores "Livre"
$('#button-free-value-font-size').click(() => {
    fontSizeValueFree()
});

//////////// Aplicar os valores assim que eles forem alterados
// Input de inserir Números
$('#property-font-size-value').keyup(() => {
    propertiesApplyFreeValue('font-size', '#property-font-size-value', '#property-font-size-value-type');
});

// Select de tipo de valor (Livre)
$('#property-font-size-value-type').change(() => {
    propertiesApplyFreeValue('font-size', '#property-font-size-value', '#property-font-size-value-type');
});

// Select de inserir valor (Pré-definido)
$('#property-font-size-value-predefined').change(() => {
    propertiesApplyPredefinedValue('font-size', '#property-font-size-value-predefined', '#property-font-size-value', '#property-font-size-value-type');
});

/* ################################################################# */
/* ########################  F U N Ç Õ E S  ######################## */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\/  Para todas as Propriedades  /\/\/\/\/\/\/\/\/\ */

//////////// Aplicar valores ao serem alterados
// Valor "livre" (com "valor" e "tipo de valor")
function propertiesApplyFreeValue(property, value, valueType) {
    let inputValue = $(value).val();
    let inputValueType = $(valueType).val();

    // Verificar se foi inserido um valor numérico válido
    if (isNaN(inputValue) === false) {
        textAppView.css(property, inputValue + inputValueType);
        $(value).removeClass('invalidValue');
    } else {
        $(value).addClass('invalidValue');
    };
}

// Valor "pré-definido" (com "valor" e "tipo de valor")
function propertiesApplyPredefinedValue(property, valuePredefined, value, valueType) {
    let inputValue = $(value).val();
    let inputValueType = $(valueType).val();
    let inputValuePredefined = $(valuePredefined).val();

    if (inputValuePredefined != 'nenhum') {
        textAppView.css(property, inputValuePredefined);
    } else {
        textAppView.css(property, inputValue + inputValueType);
    }
}

//*****////////// Editar texto do Container Central
$('#textApp-footer-text-edit').keyup(() => {
    console.log("teste");
    textAppView.text(`${$('#textApp-footer-text-edit').val()}`);
});

//////////// Aplicar CSS no textarea do rodapé

//////////// Resetar Propriedades
function propertiesReset(input01, newValue01, input02, newValue02, input03, newValue03, input04, newValue04, input05, newValue05) {
    if (input01 != false) {
        $(input01).val(newValue01);
    };

    if (input02 != false) {
        $(input02).val(newValue02);
    };

    if (input03 != false) {
        $(input03).val(newValue03);
    };

    if (input04 != false) {
        $(input04).val(newValue04);
    };

    if (input05 != false) {
        $(input05).val(newValue05);
    };
};

//////////// Alternar entre valores "livres" ou "Pré-Definidos" (Esta é uma função de base para outras funções)
function buttonActiveValueType(buttonActive, displayActive, buttonEnable, displayEnable) {
    // Botão que será ativado
    if (buttonActive != false) {
        $(buttonActive).addClass('properties-input-button-type-active')
    };

    // Display que será ativado
    if (displayActive != false) {
        $(displayActive).slideDown();
    };

    // Botão que será desativado
    if (buttonEnable != false) {
        $(buttonEnable).removeClass('properties-input-button-type-active')
    };

    // Display que será desativado
    if (displayEnable != false) {
        $(displayEnable).slideUp();
    };
};

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

