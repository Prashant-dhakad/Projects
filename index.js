
var randomNumber1 = (Math.floor(Math.random()*6)+1); //Generating random number from 1 to 6.

var randomImageSource1 = "images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumber2 =  (Math.floor(Math.random()*6)+1); //Generating random number from 1 to 6.

var randomImageSource2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

var resultMessage = document.querySelector("h1");

if(randomNumber1>randomNumber2){
   resultMessage.innerHTML = "🚩Player1Wins!";
}

else if(randomNumber2>randomNumber1){ 
    resultMessage.innerHTML = "Player2Wins!🚩"

}

else{
    resultMessage.innerHTML ="Draw!";
}