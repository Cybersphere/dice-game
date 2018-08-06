let scores =  [0,0];
let roundScore = 0;

let activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

function btn() {
    let dice = Math.floor(Math.random()*6) + 1;
    let diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
}

document.querySelector('.btn-roll').addEventListener('click', btn);