// let randomNumber = parseInt(Math.random()*100 + 1);

// const submit = document.querySelector('#submit');
// const userInput = document.querySelector('#guessField');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParas');


// const p = document.createElement('p');

// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if(playGame){
//     submit.addEventListener('click' , function(e){
//         e.preventDefault()
//         const guess = parseInt(userInput.value)
//         validateGuess(guess)
//     })
// }


// function validateGuess(guess){
//     if(isNaN(guess)){
//         alert("please enter a valid number")
//     }else if(guess < 1){
//         alert("please enter a number more than 0")
//     }else if(guess > 100){
//         alert("please enter a number upto 100")
//     }else{
//         prevGuess.push(guess)
//         if(numGuess === 11){
//             displayguess(guess)
//             displayMessage(`Game over. actual number was ${randomNumber}`)
//             endGame()
//         }else{
//             displayguess(guess)
//             checkGuess(guess)
//         }

//     }
// }



// function checkGuess(guess){
//     if(guess === randomNumber){
//         displayMessage(`you guessed it right`)
//         endGame()
//     }else if(guess < randomNumber){
//         displayMessage(`Number is TOO low`)
//     }else if(guess > randomNumber){
//         displayMessage(`Number is TOO high`)
//     }
// }

// function displayguess(guess){
//     userInput.value = ''
//     guessSlot.innerHTML += `${guess}, `
//     numGuess++;
//     remaining.innerHTML = `${11 - numGuess}`
// }

// function displayMessage(message){
//     lowOrHi.innerHTML = `<h2>${message}</h2>`
// }

// function endGame(){
//     userInput.value = ''
//     userInput.setAttribute('disabled', '')
//     p.classList.add('button')
//     p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//     startOver.appendChild(p)
//     playGame = false
//     newGame()
// }

// function newGame(){
//     const newGameButton = document.querySelector('#newGame')
//     newGameButton.addEventListener('click' , function(e){
//         randomNumber = parseInt(Math.random()*100 + 1);
//         prevGuess = []
//         numGuess = 1
//         guessSlot.innerHTML = ''
//         remaining.innerHTML = `${11 - numGuess}`
//         userInput.removeAttribute('disabled')
//         startOver.removeChild(p)
//         playGame = true
//     })
// }





let randomNumber = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector('#submit')
const result = document.querySelector('.lowOrHi')
const userInput = document.querySelector('#guessField')
const remaining = document.querySelector('.lastResult')
const ansBox = document.querySelector('.resultParas')
const previousGuesses = document.querySelector('.guesses')
const heading = document.createElement('p')
const button = document.createElement('button')
let attempts = 1;
let guesses = []



submit.addEventListener('click' , function(e){
    e.preventDefault()
    const userInput = parseInt(document.querySelector('#guessField').value)
    validateInput(userInput)
})


function validateInput(guess){
    if(attempts === 10){
        userInput.setAttribute('disabled' , '')
        heading.innerHTML = `'Game Over' the actual number was ${randomNumber}`
        document.querySelector('form').appendChild(heading)
        restartGame()
    }
    else if(isNaN(guess)){
        alert("please give a valid input")
    }
    else if(guess < 0){
        alert("number must be greater than 0")
    }
    else if(guess > 100){
        alert("please enter a number upto 100")
    }
    else{
        checkInput(guess)
    }
}



function checkInput(guess){
    attempts++;
    remaining.innerHTML = `${11-attempts}`
    guesses.push(guess)
    previousGuesses.innerHTML = guesses
    if(guess === randomNumber){
        result.innerHTML = '<h2>you guessed it right</h2>'
        userInput.setAttribute('disabled' , '')
        restartGame()
    }
    else if(guess < randomNumber){
        result.innerHTML = '<h2>Number is TOO low</h2>'
    }
    else if(guess > randomNumber){
        result.innerHTML = '<h2>Number is TOO high</h2>'
    }
    userInput.value = ''
}


function restartGame(){
    userInput.value = '' 
    button.id = ('button')
    button.innerHTML = "RESTART"
   const classes =  document.querySelectorAll('.hidden')
   classes.forEach(function(item){
    item.style.display = 'none'
   })
    ansBox.appendChild(button)
}

button.addEventListener('click', function(e){
    window.location.reload()
})
