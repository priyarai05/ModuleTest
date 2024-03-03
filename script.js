const header = document.querySelector('header')

const images = document.querySelector('.images')
const image = document.querySelectorAll('.image')

var user_score = document.querySelector('.user p')
var computer_score = document.querySelector('.computer p')

if (localStorage.getItem('score1') !== null && localStorage.getItem('score2') !== null) {
    user_score.innerHTML = localStorage.getItem('score1')
    computer_score.innerHTML = localStorage.getItem('score2')
} else {
    localStorage.setItem('score1', user_score.innerHTML)
    localStorage.setItem('score2', computer_score.innerHTML)
}
console.log(localStorage.getItem('score1'))
console.log(localStorage.getItem('score2'))
console.log(user_score)
console.log(computer_score)

var user_choice = document.querySelector('#user')
var pc_choice = document.querySelector('#computer')

const icons = document.querySelectorAll('.icon')

const rules = document.querySelector('footer span')
const rule_desc = document.querySelector('footer section')
const close = document.querySelector('section #close')
const next = document.querySelector('.next')
const hurray_page = document.querySelector('.hurray')
const results = document.querySelector('.results')


var game_result_h1 = document.querySelector('.game_result h1')
var game_result_p = document.querySelector('.game_result p')

var play_again = document.querySelector('footer button')

function updateScore(score) {
    score.innerHTML = parseInt(score.innerHTML) + 1
    console.log('s1= ', localStorage.getItem('score1'))
    console.log('s2= ', localStorage.getItem('score2'))
}

rules.addEventListener('click', function () {
    rule_desc.style.display = 'block'
})

close.addEventListener('click', function () {
    if (rule_desc.style.display === 'block') {
        rule_desc.style.display = 'none'
    }
})

play_again.addEventListener('click', function () {
    images.classList.remove('tgl')
    results.classList.add('tgl')
    if (!(next.classList.contains('tgl'))) {
        next.classList.add('tgl')
    }
    if (!(hurray_page.classList.contains('tgl'))) {
        hurray_page.classList.add('tgl')
    }
    if (header.classList.contains('tgl')) {
        header.classList.remove('tgl')
    }
    play_again.classList.add('tgl')
})

next.addEventListener('click', function () {
    images.classList.add('tgl')
    results.classList.add('tgl')
    header.classList.add('tgl')
    if (!(next.classList.contains('tgl'))) {
        next.classList.add('tgl')
    }
    hurray_page.classList.remove('tgl')
})

icons.forEach(icon => {
    icon.addEventListener('click', function () {
        var computer_choice = getRandomItem(icons)

        let rock = document.createElement('img')
        rock.src = './Images/rock_icon.png'
        let rock2 = rock.cloneNode(true)

        let scissor = document.createElement('img')
        scissor.src = './Images/scissor_icon.png'

        let scissor2 = scissor.cloneNode(true)

        let paper = document.createElement('img')
        paper.src = './Images/paper_icon.png'
        let paper2 = paper.cloneNode(true)
        // console.log(user_choice)
        common()
        if (icon.classList.contains('rock') && computer_choice.classList.contains('rock')) {
            console.log('Tie Up')
            tieUp('rock', 'rock')
            user_choice.appendChild(rock)
            pc_choice.appendChild(rock2)
        }
        else if (icon.classList.contains('rock') && computer_choice.classList.contains('scissor')) {
            console.log('You win against PC')
            updateScore(user_score)
            localStorage.setItem('score1', user_score.innerHTML);
            wins('rock', 'scissor')
            user_choice.appendChild(rock)
            pc_choice.appendChild(scissor)
        }
        else if (icon.classList.contains('rock') && computer_choice.classList.contains('paper')) {
            console.log('You lost against PC')
            updateScore(computer_score)
            localStorage.setItem('score2', computer_score.innerHTML);
            loss('rock', 'paper')
            user_choice.appendChild(rock)
            pc_choice.appendChild(paper)
        }
        else if (icon.classList.contains('scissor') && computer_choice.classList.contains('scissor')) {
            console.log('Tie Up')
            tieUp('scissor', 'scissor')
            user_choice.appendChild(scissor)
            pc_choice.appendChild(scissor2)
        }
        else if (icon.classList.contains('scissor') && computer_choice.classList.contains('rock')) {
            console.log('You lost against PC')
            updateScore(computer_score)
            localStorage.setItem('score2', computer_score.innerHTML);
            loss('scissor', 'rock')
            user_choice.appendChild(scissor)
            pc_choice.appendChild(rock)
        }
        else if (icon.classList.contains('scissor') && computer_choice.classList.contains('paper')) {
            console.log('You win against PC')
            updateScore(user_score)
            localStorage.setItem('score1', user_score.innerHTML);
            wins('scissor', 'paper')
            user_choice.appendChild(scissor)
            pc_choice.appendChild(paper)
        }
        else if (icon.classList.contains('paper') && computer_choice.classList.contains('scissor')) {
            console.log('You lost against PC')
            updateScore(computer_score)
            localStorage.setItem('score2', computer_score.innerHTML);
            loss('paper', 'scissor')
            user_choice.appendChild(paper)
            pc_choice.appendChild(scissor)
        }
        else if (icon.classList.contains('paper') && computer_choice.classList.contains('rock')) {
            console.log('You win against PC')
            updateScore(user_score)
            localStorage.setItem('score1', user_score.innerHTML);
            wins('paper', 'rock')
            user_choice.appendChild(paper)
            pc_choice.appendChild(rock)
        }
        else if (icon.classList.contains('paper') && computer_choice.classList.contains('paper')) {
            console.log('Tie Up')
            tieUp('paper', 'paper')
            user_choice.appendChild(paper)
            pc_choice.appendChild(paper2)
        }
    })
})


function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
}



function common() {
    user_choice.innerHTML = ''
    pc_choice.innerHTML = ''
    images.classList.add('tgl')
    user_choice.classList.remove('rock', 'scissor', 'paper')
    pc_choice.classList.remove('rock', 'scissor', 'paper')
}

function wins(user_icon, computer_icon) {
    user_choice.classList.add('win')
    pc_choice.classList.remove('win')
    play_again.classList.remove('tgl')
    game_result_h1.textContent = 'YOU WIN'
    game_result_p.textContent = 'AGAINST PC'
    play_again.innerHTML = 'PLAY AGAIN'
    results.classList.remove('tgl')
    next.classList.remove('tgl')
    user_choice.classList.add(user_icon)
    pc_choice.classList.add(computer_icon)
}
function loss(user_icon, computer_icon) {
    user_choice.classList.remove('win')
    pc_choice.classList.add('win')
    play_again.classList.remove('tgl')
    game_result_h1.textContent = 'YOU LOST'
    game_result_p.textContent = 'AGAINST PC'
    play_again.innerHTML = 'PLAY AGAIN'
    results.classList.remove('tgl')
    user_choice.classList.add(user_icon)
    pc_choice.classList.add(computer_icon)
}
function tieUp(user_icon, computer_icon) {
    user_choice.classList.remove('win')
    pc_choice.classList.remove('win')
    play_again.classList.remove('tgl')
    game_result_h1.textContent = 'TIE UP'
    game_result_p.textContent = ''
    play_again.innerHTML = 'REPLAY'
    results.classList.remove('tgl')
    user_choice.classList.add(user_icon)
    pc_choice.classList.add(computer_icon)
}

