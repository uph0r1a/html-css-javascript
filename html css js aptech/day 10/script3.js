const p = document.getElementById("para");
const content = p.textContent;

const show = document.getElementById("show");
const gone = document.getElementById("gone");

show.addEventListener("click", () => {
    p.textContent = content;
})

gone.addEventListener("click", () => {
    p.textContent = "";
})