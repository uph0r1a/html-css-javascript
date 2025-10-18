const productListEl = document.getElementById("product-list");
productListEl.innerHTML = "";

const products = JSON.parse(localStorage.getItem("product")) || [];

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <div>
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <div class="price">${product.price}</div>
      <div class="description">${product.description}</div>
    </div>
  `;

  productListEl.appendChild(card);
});

const logout = document.getElementById("logout");

logout.addEventListener("click", () => {  
  localStorage.setItem("login-status", false);
  localStorage.setItem("role", "");
  window.location.href = "login.html";
});
