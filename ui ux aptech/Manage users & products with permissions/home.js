const productListEl = document.getElementById("product-list");
productListEl.innerHTML = "";

const products = JSON.parse(localStorage.getItem("product")) || [];
let count = 0;

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `

      <img src="${product.image}" alt="${product.name}" style="border-style:solid" />
      <span>${product.name}</span>
      <span>${product.price}</span>
      <span>${product.description}</span>
      <button class="add" id="${count}">Thêm</button>

  `; //later

  productListEl.appendChild(card);
  count++;
});

const add = document.querySelectorAll(".add");
const tbody = document.getElementById("tbody");
const cart = [];
add.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btnId = e.currentTarget.id;

    const a = localStorage.getItem("product");
    const products = JSON.parse(a);
    const product = products.find((p) => p.id === Number(btnId));
    cart.push(product);

    btn.textContent = "Đã thêm vào giỏ hàng";
    btn.setAttribute("disabled", "true");

    const tr = document.createElement("tr");

    const tdname = document.createElement("td");
    tdname.innerHTML = `
      <img src="${cart[btnId].image || ""}" alt="${cart[btnId].name}"><span>${
      cart[btnId].name
    }</span>
    `;

    const tdprice = document.createElement("td");
    tdprice.innerHTML = `
      <span>${cart[btnId].price}</span>
    `;

    const tdquantity = document.createElement("td");
    tdquantity.innerHTML = `
      <input type="number" class="quantity" min="1" style="width: 40px;"><button class="del">Bỏ</button>
    `;
    tr.appendChild(tdname);
    tr.appendChild(tdprice);
    tr.appendChild(tdquantity);
    tbody.appendChild(tr);

    const quantityInput = tr.querySelector(".quantity");

    quantityInput.addEventListener("input", (event) => {
      const newQuantity = parseInt(event.target.value, 10);
      if (newQuantity >= 1) {
        cart[btnId].quantity = newQuantity;
      }
    });

    const del = document.querySelectorAll(".del");

    del.addEventListener("click", () => {
      tbody.removeChild(tr);
      product = product.filter((item) => item.id !== product.id);
      localStorage.setItem("product", JSON.stringify(product));
    });
  });
});

const logout = document.getElementById("logout");

logout.addEventListener("click", () => {
  localStorage.setItem("login-status", false);
  localStorage.setItem("role", "");
  window.location.href = "login.html";
});
