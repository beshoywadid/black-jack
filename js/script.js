let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let isAlive = true;
let message = "";

if (sum <= 20){
    message = "Do you want to draw a new card? 🙂";
}
else if(sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
}
else {
    message = "You're out of the game! 😭";
    isAlive = false;
}

console.log(message);

/* 
    false
    true
    false
    false
    true
    true
    false
*/