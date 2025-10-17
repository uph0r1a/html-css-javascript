const nameinput = document.getElementById("name");
const priceinput = document.getElementById("price");
const amountinput = document.getElementById("amount");
const descriptioninput = document.getElementById("description");
const form = document.getElementById("product-form");
const btn = document.getElementById("btn")
let products = [];
let count = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  products.push({
    name: nameinput.value,
    price: priceinput.value,
    amount: amountinput.value,
    description: descriptioninput.value,
  });

  const tbody = document.getElementById("product-tbody");
  tbody.innerHTML = `
    <tr>
        <td><span>${products[count].name}</span></td>
        <td><span>${products[count].price}</span></td>
        <td><span>${products[count].amount}</span></td>
        <td><span>${products[count].description}</span></td>
        <td><button id="change">Sửa</button> <button id="del">Xóa</button></td>
    </tr>
    `;
  const change = document.getElementById("change");
  change.addEventListener("click", () => {
    nameinput.value = products[count].name;
    priceinput.value = products[count].price;
    amountinput.value = products[count].amount;
    descriptioninput.value = products[count].description;
  })
    count++;
    
});
