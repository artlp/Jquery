let BG = $("body").css("background-color");
$(".card-text").text("Current color: " + BG);
// document.querySelector(".card-text").innerHTML="Current color: " + BG;

document.querySelector(".btn").addEventListener("click", function() {
    let RGB = "rgb(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) +")";
    // console.log(RGB)
    $("body").css("background-color", RGB)
    // document.body.style.backgroundColor = RGB;
    $(".card-text").text("Current color: " + RGB);
    // document.querySelector(".card-text").innerHTML="Current color: " +RGB;
});

$("h1").css("color","red");