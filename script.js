const sizeWidth = window.screen.width
const randomArea = document.getElementById('janelaGame')
const sizeHeight = randomArea.getBoundingClientRect().height
let widthtPosition, heightPosition
const difficult = sessionStorage.getItem('difficult')
const mosca = document.getElementById('mosca')
const moscaSize = mosca.getBoundingClientRect().width
const regressive = document.getElementById('regressive')
let mousePositionX = 0, mousePositionY = 0
let life = 3
let lifeSprites = document.getElementById('LifeSprites')
let inteval, time
switch (difficult) {
    case 'facil':
        time = 20
        inteval = 1500
        break;
    case 'dificil':
        time = 40
        inteval = 850
        break;
    case 'chuck Norris':
        time = 60
        inteval = 760
        break;
}
if (sizeWidth < 1000) {
    inteval = inteval - 200
}

function randomPosition(width, height, min) {
    widthtPosition = Math.abs(Math.round(Math.random() * (min - width) + min))
    heightPosition = Math.abs(Math.round(Math.random() * (min - height) + min))
}

mosca.onclick = (event) => {
    mousePositionX = event.screenX
    mousePositionY = event.screenY
    mosca.style.display = 'none'
}
function randomMoscaSize(size) {
    let min = Math.round(size - 40)
    let max = Math.round(size + 5)
    return Math.floor(Math.random() * (max - min) + min)
}

setInterval(function () {
    mosca.style.width = `${randomMoscaSize(moscaSize)}px`
    mosca.style.display = 'block'
    randomPosition(sizeWidth, sizeHeight, 45)
    mosca.style.left = `${widthtPosition}px`
    mosca.style.top = `${heightPosition}px`

    if (mousePositionX === 0 && mousePositionY === 0) {
        life--
    }
    lifeConditional()
    mousePositionX = 0, mousePositionY = 0
}, inteval)

function timer() {
    regressive.innerText = time
    setInterval(function () {
        time--
        regressive.innerText = time

        if (time === 0) {
            sessionStorage.setItem('result', 'victory')
            window.location.href = 'resultado.html'

        }
    }, 1000)
}
timer()

function lifeConditional() {
    let oneHeart = document.getElementById('oneHeart')
    let twoHeart = document.getElementById('twoHeart')
    let threeHeart = document.getElementById('threeHeart')

    if (life === 2) {
        threeHeart.setAttribute('src', "./imagens/coracao_vazio.png")
    } else if (life === 1) {
        twoHeart.setAttribute('src', "./imagens/coracao_vazio.png")
    } else if (life === 0) {
        oneHeart.setAttribute('src', "./imagens/coracao_vazio.png")
    } else if (life < 0) {
        sessionStorage.setItem('result', 'gameOver')
        window.location.href = 'resultado.html'
    }
}




