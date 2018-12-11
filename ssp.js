// var arrayOfGameValues = ["scissors", "paper", "stone"]; //постоянная с массивом значений

// function computerNumber() {
//     random = Math.round(Math.random() * 2) // калькуляция рандомного значения из массива
//     return random;
// }
// function playerValue(value) {
//     var playerValue = value;
//     computerValue = arrayOfGameValues[computerNumber()]
//     return gameBrain(playerValue, computerValue);
// }
// function gameBrain(playerValue, computerValue) {
//     var result = '';
//     if (playerValue === computerValue) {
//         result = 'Nichya';
//         alert(`Итог игры: ${result}\n
//          Ваш выбор: ${playerValue}\n 
//          Выбор противника: ${computerValue}`);
//         return
//     }


//     if (playerValue === 'scissors' && computerValue === 'paper'
//         || playerValue === 'stone' && computerValue === 'scissors'
//         || playerValue === 'paper' && computerValue === 'stone') {
//         result = 'win'
//     } else {
//         result = 'loose';
//     }
//     alert(`Итог игры: ${result}\n 
//     Ваш выбор: ${playerValue}\n 
//     Выбор противника: ${computerValue}`)
// }


// var arrayOfGameValues = ["scissors", "paper", "stone"];

// class Computer {
//     constructor(random) {
//         this.random = random;
//     }
//     randomMethod() {
//         random = Math.round(Math.random() * 2); // калькуляция рандомного значения из массива
//         return random;
//     }
// }

// class Player {
//     constructor() {

//     }
// }

var arrayOfGameValues = ["scissors", "paper", "stone"];

class Game {
    constructor(playerValue, computerValue) {
        this.playerValue = playerValue,
            this.computerValue = computerValue
    }

    generateComputerValue() {
        //рандомно выбрать одно значение из трех

        var random = Math.round(Math.random() * 2);
        let computerValue = arrayOfGameValues[random];
        console.log(computerValue);
        this.computerValue = computerValue;
    }

    onClick(value) {
        // присвоить значение в зависимости от того какая кнопка была нажата
        // проверка на победителя

        var result = '';

        if (value === this.computerValue) {
            result = 'Ничья';
            alert(`Итог игры: ${result}\n
          Ваш выбор: ${value}\n 
          Выбор противника: ${this.computerValue}`);
            return
        }
        if (value === 'scissors' && this.computerValue === 'paper'
            || value === 'stone' && this.computerValue === 'scissors'
            || value === 'paper' && this.computerValue === 'stone') {
            result = 'Победа'
        } else {
            result = 'Проигрыш';
        }
        alert(`Итог игры: ${result}\n 
            Ваш выбор: ${value}\n 
             Выбор противника: ${this.computerValue}`)

        // console.log(value);
    }

    generateButtons() {
        // создать три кнопки
        // добавить им value и onclick
        // добавить их на экран


        for (let i = 0; i < arrayOfGameValues.length; i++) {
            var button = document.createElement('button');
            button.innerHTML = arrayOfGameValues[i];
            button.onclick = this.onClick.bind(this, arrayOfGameValues[i]);
            document.body.appendChild(button);
        }
    }
}

const newGame = new Game(null, null);
newGame.generateButtons();
newGame.generateComputerValue();