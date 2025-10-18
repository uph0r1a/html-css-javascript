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

const nameproductinp = document.getElementById("nameproduct");
const priceproductinp = document.getElementById("priceproduct");
const descriptionproductinp = document.getElementById("descriptionproduct");
const imageproductinp = document.getElementById("imageproduct");
const formproduct = document.getElementById("formproduct");
const tbodyproduct = document.getElementById("tbodyproduct");

let product = [];
let countproduct = 0;

formproduct.addEventListener("submit", (e) => {
  e.preventDefault();

  const newProduct = {
    id: countproduct,
    name: nameproductinp.value,
    price: "$" + priceproductinp.value,
    description: descriptionproductinp.value,
    image: imageproductinp.value,
  };

  product.push(newProduct);

  const tr = document.createElement("tr");
  tr.setAttribute("data-id", newProduct.id);

  const tdname = document.createElement("td");
  tdname.textContent = newProduct.name;

  const tdprice = document.createElement("td");
  tdprice.textContent = newProduct.price;

  const tddescription = document.createElement("td");
  tddescription.textContent = newProduct.description;

  const tdimage = document.createElement("td");
  tdimage.innerHTML = `<img src="${newProduct.image}" alt="${newProduct.name}" width="50">`;

  const tdbtn = document.createElement("td");
  tdbtn.innerHTML = `
    <button class="change">Sửa</button><button class="del">Xóa</button>
  `;

  tr.appendChild(tdname);
  tr.appendChild(tdprice);
  tr.appendChild(tddescription);
  tr.appendChild(tdimage);
  tr.appendChild(tdbtn);
  tbodyproduct.appendChild(tr);

  tdbtn.querySelector(".del").addEventListener("click", () => {
    tbodyproduct.removeChild(tr);
    product = product.filter((item) => item.id !== newProduct.id);
    localStorage.setItem("product", JSON.stringify(product));
  });

  tdbtn.querySelector(".change").addEventListener("click", (e) => {
    const btn = e.target;
    const tds = tr.querySelectorAll("td");

    if (btn.textContent === "Sửa") {
      for (let i = 0; i < 3; i++) {
        const input = document.createElement("input");
        if (i === 1) {
          input.value = tds[i].textContent.replace("$", "");
        } else {
          input.value = tds[i].textContent;
        }
        tds[i].textContent = "";
        tds[i].appendChild(input);
      }
      btn.textContent = "Lưu";
    } else {
      for (let i = 0; i < 3; i++) {
        const input = tds[i].querySelector("input");
        if (input) {
          if (i === 1) {
            tds[i].textContent = "$" + input.value;
          } else {
            tds[i].textContent = input.value;
          }
        }
      }

      const id = parseInt(tr.getAttribute("data-id"));
      const index = product.findIndex((item) => item.id === id);
      if (index > -1) {
        product[index].name = tds[0].textContent;
        product[index].price = tds[1].textContent;
        product[index].description = tds[2].textContent;
        localStorage.setItem("product", JSON.stringify(product));
      }

      btn.textContent = "Sửa";
    }
  });

  localStorage.setItem("product", JSON.stringify(product));

  nameproductinp.value = "";
  priceproductinp.value = "";
  descriptionproductinp.value = "";
  imageproductinp.value = "";
  countproduct++;
});

const logout = document.getElementById("log-out");

logout.addEventListener("click", () => {
  localStorage.setItem("login-status", false);
  localStorage.setItem("role", "");
  window.location.href = "login.html";
});
