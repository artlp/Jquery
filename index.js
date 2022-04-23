let BG = $("body").css("background-color");
$(".card-text").text("Current color: " + BG.toUpperCase());
// document.querySelector(".card-text").innerHTML="Current color: " + BG;

    $(".btn").click(function() {
    // document.querySelector(".btn").addEventListener("click", function() {
    let RGB = "rgb(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) +")";
    // console.log(RGB)
    $("body").animate({backgroundColor:RGB}, 500);
    // document.body.style.backgroundColor = RGB;
    $(".card-text").text("Current color: " + RGB.toUpperCase());
    // document.querySelector(".card-text").innerHTML="Current color: " +RGB;
});

$("h1").css("color","red");