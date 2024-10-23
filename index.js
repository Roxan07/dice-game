var randomNumber = Math.floor((Math.random() * 6)+1);
var randomimage="dice"+randomNumber+".png";
var srcF="./images/"+randomimage;
var imgage =document.querySelectorAll("img")[0];
imgage.setAttribute("src",srcF);



var randomNumber2=Math.floor((Math.random()*6)+1);
var randomimage2="dice"+randomNumber2+".png";
var srcf = "./images/"+randomimage2;
var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src",srcf) ;

if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins";
}else if(randomNumber<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 wins";
}else{
    document.querySelector("h1").innerHTML="draw";
}