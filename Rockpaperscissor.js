var scores = {
    wins: 0,
    looses: 0,
    ties: 0
}

var result = ''
var userMove = ''
var computermove = ''

function updatescores() {
    document.querySelector('.jsscores').innerHTML = `wins : ${scores.wins} looses : ${scores.looses} ties : ${scores.ties}`
}

function resultt() {
    document.querySelector('.jsresult').innerHTML = `${result}`
}

function playGame(userMove) {
    computermove = getComputervalue();
    if (userMove === computermove) {
        result = 'tie'

    } else if (userMove === 'Rock') {
        if (computermove === 'Paper') {
            result = 'you lost'
        } else if (computermove === 'Scissor') {
            result = 'You won'
        }
    } else if (userMove === 'Paper') {
        if (computermove === 'Rock') {
            result = 'You won'
        } else if (computermove === 'Scissor') {
            result = 'You lost'
        }
    } else if (userMove === 'Scissor') {
        if (computermove === 'Rock') {
            result = 'You lost'
        } else if (computermove === 'Paper') {
            result = 'You won'
        }
    }
    if (result === 'You won') {
        scores.wins += 1
    } else if (result === 'You lost') {
        scores.looses += 1
    } else if (result === 'tie') {
        scores.ties += 1
    }
    updatescores();
    document.querySelector('.jsmove').innerHTML = ` You <img src="./${userMove}.png" class="imgs"><img src="./${computermove}.png" class="imgs">  Computer`

    resultt();



}

function getComputervalue() {
    var val1 = Math.random()
    var computervalue = ''
    if (val1 >= 0 && val1 < 1 / 3) {
        computervalue = 'Rock'
    } else if (val1 >= 1 / 3 && val1 < 2 / 3) {
        computervalue = 'Paper'
    } else if (val1 >= 2 / 3 && val1 < 1) {
        computervalue = 'Scissor'
    }
    return computervalue;
}

function reset() {
    scores.wins = 0,
        scores.looses = 0,
        scores.ties = 0
    updatescores();
}
let intervalId;
let isAutoplaying = false;

function autoplay() {
    if (!isAutoplaying) {

        intervalId = setInterval(function() {
            const userMove = getComputervalue();
            playGame(userMove);
        }, 1000)
        isAutoplaying = true;
    } else {
        clearInterval(intervalId);
        isAutoplaying = false;
    }

}