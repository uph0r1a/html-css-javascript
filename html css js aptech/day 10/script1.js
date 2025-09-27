const p = document.getElementById("content");
const btn = document.getElementById("btn");

btn.addEventListener("click",() => {
    p.textContent = "Chào bạn đến với JavaScript DOM";
})