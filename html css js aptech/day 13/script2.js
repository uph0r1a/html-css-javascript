const form = document.getElementById("form");
const list = document.getElementById("list");
let todos = [];
let count = 1;
let temp;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputElement = document.getElementById("value");
  const input = inputElement.value;

  todos.push({
    id: count,
    text: input,
  });

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = input;
  const changebtn = document.createElement("button");
  changebtn.textContent = "Sửa";
  const changeinput = document.createElement("input");

  changebtn.addEventListener("click", () => {
    if (changebtn.textContent == "Sửa") {
      changeinput.value = span.textContent;
      span.parentNode.replaceChild(changeinput, span);
      changebtn.textContent = "Cập nhật";
    } else if (changebtn.textContent == "Cập nhật") {
      span.textContent = changeinput.value;
      changeinput.parentNode.replaceChild(span, changeinput);
      changebtn.textContent = "Sửa";
    }
  });
  const delbtn = document.createElement("button");
  delbtn.textContent = "Xóa";

  delbtn.addEventListener("click", () => {
    li.parentNode.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(changebtn);
  li.appendChild(delbtn);
  list.appendChild(li);

  inputElement.value = "";

  count++;
});
