console.log(document.getElementById("btn").innerHTML);

console.log(document.getElementsByClassName("para"));

console.log(document.getElementsByClassName("para")[1].innerHTML);

console.log(document.getElementsByTagName("h1"));

console.log(document.querySelector("#btn").innerHTML);

console.log(document.querySelectorAll(".para"));

let element = document.getElementById("h1");
element.textContent = "Hello";
element.style.color = "blue";

document.getElementById("para").innerHTML = `
    <p>aaaaaaaaaaaaa</p>
`