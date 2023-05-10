var randnum1 = (Math.floor(Math.random() * 6)) + 1;
var randiceimg1 = "images/dice-" + randnum1 + ".png"; 
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randiceimg1); 

var randnum2 = (Math.floor(Math.random() * 6)) + 1;
var randiceimg2 = "images/dice-" + randnum2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randiceimg2);

if(randnum1 > randnum2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if(randnum2 > randnum1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!" 
}
else{
    document.querySelector("h1").innerHTML = "Draw!"  
}