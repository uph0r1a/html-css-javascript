const form = document.getElementById("form");
const list = document.getElementById("list");
let todos = [];
let count = 1;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("value").value;

    todos.push({
        id: count,
        text: input
    });

    const li = document.createElement("li");
    li.textContent = input;
    list.appendChild(li);

    input.value = "";

    count++;
});
