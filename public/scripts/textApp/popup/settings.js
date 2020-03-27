/* ################################################################# */
/* ###################  Menu de Configurações  ##################### */
/* ################################################################# */

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\/\/\/\/\/\/  Métodos  /\/\/\/\/\/\/\/\/\/\/\/\/\/ */

let popupSettingsDisplay = {
    // Seleção dos elementos da popup
    openButton: $('#setButSettings'),
    closeButton: $('#popupSettingsCloseButton'),
    background: $('#popupSettingsBackground'),
    container: $('#popupSettingsContainer'),
    backgroundId: '#popupSettingsBackground',

    // Ativar display
    on() {
        this.container.slideDown('fast');
        this.background.fadeIn('fast');
        this.background.css('display', 'flex');
    },

    // Desativar display
    off() {
        this.container.slideUp('fast');
        this.background.fadeOut('fast');
    },

    /* Descrição: Verificar se o click foi dentro ou fora do container.
    Valores válidos:
        - A mesma variável que vem do parãmetro da função.
    Return: Boolean ("true" paraquando clicar fora de container e "false para quando clicar dentro do container). */
    backgroundClick(event) {
        return event.target.matches(this.backgroundId);
    },
};

/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* /\/\/\/\/\/\/\/\/\/\/\/\/\/  Eventos  /\/\/\/\/\/\/\/\/\/\/\/\/\/ */
popupSettingsDisplay.off();

// Abrir ao clicar no Botão de configurações
popupSettingsDisplay.openButton.click(() => {
    popupSettingsDisplay.on();
});

// Fechar ao clicar no Botão de fechar Popup
popupSettingsDisplay.closeButton.click(() => {
    popupSettingsDisplay.off();

});

// Fechar ao clicar no Background do popup
popupSettingsDisplay.background.click((event) => {

    // Verifica se o click foi fora do container
    if (popupSettingsDisplay.backgroundClick(event)) {
        popupSettingsDisplay.off();
    };
});