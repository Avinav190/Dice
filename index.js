//generating randoms between 1-6
var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);

//selecting elements
var image1 = document.querySelector('.img1');
var image2 = document.querySelector('.img2');
var heading = document.querySelector('h1');
var buttonPlay = document.querySelector('#buttonPlay');
var buttonRestart = document.querySelector('#buttonRestart');
var player1 = document.querySelector('#player1');
var player2 = document.querySelector('#player2');

function changeDice(){

    player1.innerText = prompt("Player 1: ").toUpperCase();
    player2.innerText = prompt("Player 2: ").toUpperCase();
    
    // changing image
    image1.setAttribute("src","images/dice"+randomNumber1.toString()+".png");
    image2.setAttribute("src","images/dice"+randomNumber2.toString()+".png");

    // cheking who won
    if (randomNumber1 > randomNumber2){
        heading.innerText = player1.innerHTML+" Won";
    } else if(randomNumber1 < randomNumber2){
        heading.innerHTML = player2.innerHTML  +" Won!!!";
    } else {
        heading.innerHTML = "Draw!!";
    }

}

buttonPlay.addEventListener("click", changeDice);

buttonRestart.addEventListener("click", function (){
    //Refreshing page
    window.location.reload();
});