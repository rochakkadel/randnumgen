

let guess, attempts, answer,h1;
const min = 1;
const max = 50;




h1 = document.getElementById("h11").textContent = "Enter a guess from " +min+ " to " +max+ "";




function startGame() {


answer = Math.floor(Math.random() * max) + min;
console.log(answer);


attempts = 0;


document.getElementById("btnenter").onclick = function(){
 
  guess = document.getElementById("input1").value;
  guess = Number(guess);




 if(isNaN(guess) || guess > max || guess < min){
  document.getElementById("h12").textContent = "Please enter a valid number";
 }
 else if(guess == answer){
    document.getElementById("h12").textContent = "Correct guess, It took you " +attempts+ " attempts!";
    attempts++;
 }
 else if(guess - answer <= 3 && guess - answer >= -3 ){
    document.getElementById("h12").textContent = "Close, Try Again!";
    attempts++;
 }
 else if(guess > answer){
    document.getElementById("h12").textContent = "Too high, Try again!";
    attempts++;
 }
 else if (guess < answer){
    document.getElementById("h12").textContent = "Too low, Try again!";
    attempts++;
 }


}
}


startGame();


document.getElementById("btnrestart").onclick = function() {
  startGame();
  document.getElementById("input1").value = "";
  document.getElementById("h12").textContent = "Game Restarted";


} 
