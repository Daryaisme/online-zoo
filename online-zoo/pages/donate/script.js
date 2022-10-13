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

let cont_of_points = document.querySelector('.points')
let points = document.getElementsByClassName('point')
let numbers = document.querySelectorAll('#money p')
let input = document.querySelector('#number1')

cont_of_points.addEventListener('click', function(e) {
    let i = Array.from(points).indexOf(e.target)
    Array.from(points).forEach(point => {
        point.classList.remove('active_point')
    });
    points[i].classList.add('active_point')
    Array.from(numbers).forEach(number => {
        number.classList.remove('active_number')
    });
    numbers[i].classList.add('active_number')
    input.value = parseInt(numbers[i].innerHTML.replace('$', ''))
})

input.oninput = function() {
    if (input.value.length > 4)
        input.value = input.value.substr(0, 4)
    let qua = 0;
    numbers.forEach(number => {
        if (parseInt(number.innerHTML.replace('$', '')) == input.value) {
            numbers.forEach(number => {
                number.classList.remove('active_number')
            });
            number.classList.add('active_number')
            Array.from(points).forEach(point => {
                point.classList.remove('active_point')
            });
            points[qua].checked = true
        }
        qua++
    })
}
