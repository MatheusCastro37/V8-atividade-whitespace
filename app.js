const overlay = document.querySelector('.overlay')
const menu = document.querySelector('.menu')
const menuHamburguer = document.querySelector('.menu-hamburguer')
const closeMenu = document.querySelector('.close-menu')

// 1. quando eu clicar no menu hamburguer deve abrir o menu mobile

menuHamburguer.addEventListener("click", onOpenMenu)

// 1. quando eu clicar no overlay ou no x deve fechar o menu mobile
overlay.addEventListener("click", onCloseMenu)
closeMenu.addEventListener("click", onCloseMenu)


// abrir menu
function onOpenMenu() {
    overlay.classList.add('open')
    menu.classList.add('open')
}

// fecha menu
function onCloseMenu() {
    overlay.classList.remove('open')
    menu.classList.remove('open')
}