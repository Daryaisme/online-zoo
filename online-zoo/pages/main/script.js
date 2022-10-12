let brg = document.getElementsByClassName('burger')
let head = document.getElementsByClassName('header')
let cont = document.getElementsByClassName('container')
let nav = document.getElementsByClassName('text_of_header')
let log = document.getElementsByClassName('logo');
let image = document.getElementsByClassName('bamboo');

brg[0].addEventListener('click', check)

function check () {
    head[0].classList.contains("white_container") ? closeBurgerMenu() : openBurgerMenu()
}

function openBurgerMenu () {
    nav[0].classList.add("nav_of_burger")
    head[0].classList.add("white_container")
    cont[0].classList.add("burger_container")
    image[0].src = "../../assets/images/bamboo_orange.svg"
}

function closeBurgerMenu () {
    nav[0].classList.remove("nav_of_burger")
    head[0].classList.remove("white_container")
    cont[0].classList.remove("burger_container")
    image[0].src = "../../assets/images/bamboo.svg"
}
