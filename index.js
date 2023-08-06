let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);

let randomImage1 = "./images/dice" + randomNumber1 + ".png";
let randomImage2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomImage1);
document.querySelector(".img2").setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "😀P1 Won";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "P2 Won😀";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}