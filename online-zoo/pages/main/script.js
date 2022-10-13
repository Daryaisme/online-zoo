let brg = document.getElementsByClassName('burger');
let head = document.getElementsByClassName('header');
let cont = document.getElementsByClassName('container');
let nav = document.getElementsByClassName('text_of_header');
let log = document.getElementsByClassName('logo');
let image = document.getElementsByClassName('bamboo');

brg[0].addEventListener('click', function() {
    head[0].classList.contains("white_container") ? closeBurgerMenu() : openBurgerMenu()
})

function openBurgerMenu () {
    nav[0].classList.add("nav_of_burger")
    head[0].classList.add("white_container")
    cont[0].classList.add("burger_container")
    image[0].src = "../../assets/images/bamboo_orange.svg"
    document.documentElement.style.overflowY = "hidden"
}

function closeBurgerMenu () {
    nav[0].classList.remove("nav_of_burger")
    head[0].classList.remove("white_container")
    cont[0].classList.remove("burger_container")
    image[0].src = "../../assets/images/bamboo.svg"
    document.documentElement.style.overflowY = "visible"
}

// let pet = document.querySelectorAll('.pet');
// let cor = document.querySelector('#pets .content')

// document.querySelector('#left').addEventListener('click', clickLeftButton)
// document.querySelector('#right').addEventListener('click', clickRightButton)

// function generatePage() {
//     let cont = document.createElement('div')
//     cont.classList.add('content_of_generate')
//     let row1 = document.createElement('div')
//     row1.classList.add('row_of_pets')
//     let row2 = document.createElement('div')
//     row2.classList.add('row_of_pets')
//     row1.append(pet[0].cloneNode(true), pet[1].cloneNode(true), pet[2].cloneNode(true))
//     row2.append(pet[3].cloneNode(true), pet[4].cloneNode(true), pet[5].cloneNode(true))
//     cont.append(row1, row2)
//     return cont
// }

// function clickLeftButton () {
//     let newPage = generatePage()
//     cor.append(newPage)
//     newPage.addEventListener('')
// }

// function clickRightButton () {

// }

let comms = document.getElementById('reviews')
let comm = document.querySelectorAll('.review')

comm.forEach(com => com.addEventListener('click', addActiveComm))

function addActiveComm() {
    if (window.screen.width > 999) {
        return
    }
    let d = document.createElement('div')
    let review = this.cloneNode(true)
    d.append(review)
    document.body.prepend(d)
    d.classList.add('active_comm')
    d.addEventListener('click', function(e) {
        d.remove()
        document.documentElement.style.overflowY = "visible"
    })
    document.documentElement.style.overflowY = "hidden"
}

let range = document.getElementById('range');
let rev = document.getElementById('reviews');
let comments = document.querySelectorAll('.review');

let gap = 28

range.addEventListener('input', rangeComment)

function rangeComment() {
    let offset = this.value * (comments[0].offsetWidth + gap)
    let str = `${-offset}` + 'px'
    rev.style.marginLeft = str;
}
