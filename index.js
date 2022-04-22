document.querySelector(".card-text").innerHTML="Current color: rgb(240,255,240)";

document.querySelector(".btn").addEventListener("click", function() {
    let RGB = "rgb(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) +")";
    console.log(RGB)
    document.body.style.backgroundColor = RGB;
    document.querySelector(".card-text").innerHTML="Current color: " +RGB;
});

$("h1").css("color","red");