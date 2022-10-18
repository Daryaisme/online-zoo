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

let pet = document.querySelectorAll('.pet');
let cor = document.querySelector('#pets .content')

document.querySelector('#left').addEventListener('click', clickLeftButton)
document.querySelector('#right').addEventListener('click', clickRightButton)

function generatePage(direction) {
    let cont = document.createElement('div')
    cont.classList.add('content_of_generate')
    let row1 = document.createElement('div')
    row1.classList.add('row_of_pets')
    let row2 = document.createElement('div')
    row2.classList.add('row_of_pets')
    let arr = [];
    let randomNum;
    for (let i = 0; i < 6; i++) {
        randomNum = Math.trunc(Math.random() * 6);
        if (!arr.includes(randomNum)) 
            arr.push(randomNum);
        else 
            i--;
    }
    row1.append(pet[arr[0]].cloneNode(true), pet[arr[1]].cloneNode(true), pet[arr[2]].cloneNode(true))
    row2.append(pet[arr[3]].cloneNode(true), pet[arr[4]].cloneNode(true), pet[arr[5]].cloneNode(true))
    cont.append(row1, row2)
    if (direction == right) {
        cont.classList.add('passive_pet_right')
    }
    else {
        cont.classList.add('passive_pet_left')
    }
    return cont
}

function clickRightButton () {
    cor.append(generatePage(right))
    let to_left = document.querySelector('.active_pet')
    let from_rigth = document.querySelector('.passive_pet_right')
    let offset = cor.offsetWidth
    let str = `${-offset}` + 'px'
    to_left.style.marginLeft = str
    document.querySelector('#left').style.pointerEvents = 'none'
    document.querySelector('#right').style.pointerEvents = 'none'
    setTimeout(function() {
        to_left.remove()
        from_rigth.classList.remove('passive_pet_right')
        from_rigth.classList.add('active_pet')
        document.querySelector('#left').style.pointerEvents = 'all'
        document.querySelector('#right').style.pointerEvents = 'all'
    }, 500)
}

function clickLeftButton () {
    cor.prepend(generatePage(left))
    let to_right = document.querySelector('.active_pet')
    let from_left = document.querySelector('.passive_pet_left')
    let offset = cor.offsetWidth
    let str = 0 + 'px'
    from_left.style.marginLeft = str
    document.querySelector('#left').style.pointerEvents = 'none'
    document.querySelector('#right').style.pointerEvents = 'none'
    setTimeout(function() {
        to_right.remove()
        from_left.classList.remove('passive_pet_left')
        from_left.classList.add('active_pet')
        document.querySelector('#left').style.pointerEvents = 'all'
        document.querySelector('#right').style.pointerEvents = 'all'
    }, 500)
}

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

let gap = 0

range.addEventListener('input', rangeComment)

function rangeComment() {
    if (window.screen.width > 999 && window.screen.width < 1600) {
        gap = 24
    }
    else {
        gap = 28
    }
    let offset = this.value * (comments[0].offsetWidth + gap)
    let str = `${-offset}` + 'px'
    rev.style.marginLeft = str;
}
