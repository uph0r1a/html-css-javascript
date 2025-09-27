const box = document.getElementById("box");
const red = document.getElementById("red");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");

red.addEventListener("click",() => {
    box.style.background = "red";
})

green.addEventListener("click",() => {
    box.style.background = "green";
})

yellow.addEventListener("click",() => {
    box.style.background = "yellow";
})