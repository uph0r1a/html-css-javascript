const nameinp = document.getElementById("name");
const emailinp = document.getElementById("email");
const roleinp = document.getElementById("role");
const form = document.getElementById("form");
const tbody = document.getElementById("tbody");

let user = [];
let count = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newUser = {
    id: count,
    name: nameinp.value,
    email: emailinp.value,
    role: roleinp.value,
  };

  user.push(newUser);
  const tr = document.createElement("tr");
  tr.setAttribute("data-id", newUser.id);

  const tdname = document.createElement("td");
  tdname.textContent = newUser.name;
  const tdemail = document.createElement("td");
  tdemail.textContent = newUser.email;
  const tdrole = document.createElement("td");
  tdrole.textContent = newUser.role;
  const tdbtn = document.createElement("td");
  tdbtn.innerHTML = `
    <button class="change">Sửa</button><button class="del">Xóa</button>
  `;

  tr.appendChild(tdname);
  tr.appendChild(tdemail);
  tr.appendChild(tdrole);
  tr.appendChild(tdbtn);
  tbody.appendChild(tr);

  tdbtn.querySelector(".del").addEventListener("click", () => {
    tbody.removeChild(tr);
    user = user.filter((item) => item.id !== newUser.id);
    localStorage.setItem("user", JSON.stringify(user));
  });

  tdbtn.querySelector(".change").addEventListener("click", (e) => {
    const btn = e.target;
    const tds = tr.querySelectorAll("td");

    if (btn.textContent === "Sửa") {
      for (let i = 0; i < tds.length - 1; i++) {
        const currentText = tds[i].textContent;
        const input = document.createElement("input");
        input.value = currentText;
        tds[i].textContent = "";
        tds[i].appendChild(input);
      }
      btn.textContent = "Lưu";
    } else {
      for (let i = 0; i < tds.length - 1; i++) {
        const input = tds[i].querySelector("input");
        if (input) {
          tds[i].textContent = input.value;
        }
      }
      btn.textContent = "Sửa";

      const id = parseInt(tr.getAttribute("data-id"));
      const index = user.findIndex((item) => item.id === id);
      if (index > -1) {
        user[index].name = tds[0].textContent;
        user[index].email = tds[1].textContent;
        user[index].role = tds[2].textContent;
        localStorage.setItem("user", JSON.stringify(user));
      }
    }
  });

  localStorage.setItem("user", JSON.stringify(user));

  nameinp.value = "";
  emailinp.value = "";
  roleinp.value = "";
  count++;
});
