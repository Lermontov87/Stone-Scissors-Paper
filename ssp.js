var array = ["scissors", "paper", "stone"]; //постоянная с массивом значений

function computerNumber() {
    random = (Math.round(Math.random() *2)) // калькуляция рандомного значения из массива
    return random;
}
function stone() { // функция камень
    var randomIndex = computerNumber(); // переменная для исполнения одного значения 
    console.log(`computer has ${array[randomIndex]}`); // консолька-фасолька
    if (array[randomIndex] === "stone") { // сравнение
        alert ('Ничья')
    }
    if (array[randomIndex] === "paper") {
        alert ('Проигрыш')
    }
    if (array[randomIndex] === "scissors") {
        alert ('Победа')
    }
}
function scissors() { 
    var randomIndex = computerNumber();
    console.log(`computer has ${array[randomIndex]}`);
    if (array[randomIndex] === "scissors") {
        alert ('Ничья')
    }

    if (array[randomIndex] === "stone") {
        alert ('Проигрыш')
    }
    if (array[randomIndex] === "paper") {
        alert ('Победа')
    }
}
function paper() {
    var randomIndex = computerNumber();
    console.log(`computer has ${array[randomIndex]}`);
    if (array[randomIndex] === "paper") {
        alert ('Ничья')
    }

    if (array[randomIndex] === "stone") {
        alert ('Победа')
    }
    if (array[randomIndex] === "scissors") {
        alert ('Проигрыш')
    }
}