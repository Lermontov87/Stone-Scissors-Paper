var arrayOfGameValues = ["scissors", "paper", "stone"]; //постоянная с массивом значений

function computerNumber() {
    random = Math.round(Math.random() *2) // калькуляция рандомного значения из массива
    return random;
}
function playerValue(value){
    var playerValue = value;
    computerValue = arrayOfGameValues[computerNumber()]
    return gameBrain(playerValue, computerValue);
}
function gameBrain(playerValue, computerValue) {
    var result = '';
    if (playerValue === computerValue) 
        {result = 'Nichya'; 
        alert(`Итог игры: ${result}\n
         Ваш выбор: ${playerValue}\n 
         Выбор противника: ${computerValue}`);
        return}
        
    
    if (playerValue === 'scissors' && computerValue === 'paper'
     || playerValue === 'stone' && computerValue === 'scissors' 
     || playerValue === 'paper' && computerValue === 'stone') {
        result = 'win'
    } else {
        result = 'loose';
    }     
    alert(`Итог игры: ${result}\n 
    Ваш выбор: ${playerValue}\n 
    Выбор противника: ${computerValue}`) 
}