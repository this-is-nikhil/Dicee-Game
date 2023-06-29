var randomNum1 = Math.floor(Math.random()*6)+1;
var randomNum2 = Math.floor(Math.random()*6)+1;

var randomimage1 = "dice" + randomNum1 + ".png"
var randomimage2 = "dice" + randomNum2 + ".png"

var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomimage1)

var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src", randomimage2)

if(randomNum1>randomNum2){
    document.getElementById("head").innerHTML = "Player 1 Wins👑"
}
else if(randomNum1<randomNum2){
    document.getElementById("head").innerHTML = "Player 2 Wins👑"
}
else if(randomNum1==randomNum2){
    document.getElementById("head").innerHTML = "No One Wins🗿"
}



