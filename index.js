const botaoMenu = document.querySelector('.header_menu')
const menu = document.querySelector('.menu-side')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-side--ativo')
})