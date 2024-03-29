const p1 = {
    id: 1,
    score: 0,
    h1: document.querySelector('#playerh1'),
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    id: 2,
    score: 0,
    h1: document.querySelector('#playerh2'),
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent){
    if(!isGameOver){
        player.score += 1;
        player.display.textContent = player.score;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
            player.h1.textContent = "Winner!";
            player.h1.classList.add('has-text-success');
        }
    }
}

p1Button.addEventListener('click', function(){
    updateScores(p1, p2);
})

p2Button.addEventListener('click', function(){
    updateScores(p2, p1);
})

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset(){
    for(let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
        p.h1.textContent = `Player ${p.id}`;
        p.h1.classList.remove('has-text-success');
    }
    isGameOver = false;
}