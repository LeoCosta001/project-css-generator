const indexContainerMiddle = document.querySelector('.index-container-middle');

window.addEventListener('DOMContentLoaded', () => {
    let windowWidth = window.innerWidth;
    indexContainerMiddle.style.width = `${windowWidth - 590}px`;
});

window.addEventListener('resize', () => {

    let windowWidth = window.innerWidth;
    indexContainerMiddle.style.width = `${windowWidth - 590}px`;
});


