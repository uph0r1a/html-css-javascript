const productListEl = document.getElementById("product-list");
productListEl.innerHTML = "";

const products = JSON.parse(localStorage.getItem("product")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" style="border-style:solid" />
    <span>${product.name}</span>
    <span>${product.price}</span>
    <span>${product.description}</span>
    <button class="add" data-id="${product.id}">Thêm</button>
  `;

  productListEl.appendChild(card);
});

const addButtons = document.querySelectorAll(".add");
const tbody = document.getElementById("tbody");

addButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const productId = Number(e.currentTarget.dataset.id);
    const products = JSON.parse(localStorage.getItem("product"));
    const product = products.find((p) => p.id === productId);

    if (!product) return;

    if (cart.some(item => item.id === productId)) return;

    product.quantity = 1;
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    btn.textContent = "Đã thêm vào giỏ hàng";
    btn.setAttribute("disabled", "true");

    const tr = document.createElement("tr");
    tr.setAttribute("data-id", product.id);

    const tdName = document.createElement("td");
    tdName.innerHTML = `
      <img src="${product.image}" alt="${product.name}" /><span>${product.name}</span>
    `;

    const tdPrice = document.createElement("td");
    tdPrice.textContent = product.price;

    const tdQuantity = document.createElement("td");
    tdQuantity.innerHTML = `
      <input type="number" class="quantity" min="1" value="1" style="width: 40px;" />
      <button class="del">Bỏ</button>
    `;

    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tr.appendChild(tdQuantity);
    tbody.appendChild(tr);

    const quantityInput = tdQuantity.querySelector(".quantity");
    quantityInput.addEventListener("input", (event) => {
      const newQuantity = parseInt(event.target.value, 10) || 1;
      const cartIndex = cart.findIndex(item => item.id === product.id);
      cart[cartIndex].quantity = newQuantity;
      localStorage.setItem("cart", JSON.stringify(cart));
    });

    const deleteBtn = tdQuantity.querySelector(".del");
    deleteBtn.addEventListener("click", () => {
      tr.remove();
      cart = cart.filter(item => item.id !== product.id);
      localStorage.setItem("cart", JSON.stringify(cart));

      btn.textContent = "Thêm";
      btn.removeAttribute("disabled");
    });
  });
});

const logout = document.getElementById("logout");
logout.addEventListener("click", () => {
  localStorage.setItem("login-status", false);
  localStorage.setItem("role", "");
  window.location.href = "login.html";
});
