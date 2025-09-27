// console.log(document.getElementById("btn").innerHTML);

// console.log(document.getElementsByClassName("para"));

// console.log(document.getElementsByClassName("para")[1].innerHTML);

// console.log(document.getElementsByTagName("h1"));

// console.log(document.querySelector("#btn").innerHTML);

// console.log(document.querySelectorAll(".para"));

// let element = document.getElementById("h1");
// element.textContent = "Hello";
// element.style.color = "blue";

// document.getElementById("para").innerHTML = `
//     <p>aaaaaaaaaaaaa</p>
// `;

// const p = document.createElement("p");
// p.textContent = "Đây là đoạn mới";

// document.getElementById("para").appendChild(p);


// let count = 0;
const btn = document.getElementById("btn");
// const result = document.getElementById("result");

btn.addEventListener("click", () => {
    // count++;
    // result.innerText = "Times: " + count;
    localStorage.setItem("name","ten");
})  