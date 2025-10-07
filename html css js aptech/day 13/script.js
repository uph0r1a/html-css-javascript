async function loadData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const table = document.querySelector("#table tbody");

    data.forEach(user => {
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.address.suite}, ${user.address.street}, ${user.address.city}</td>
        <button id="btn${user.id}">Detail</button>
        `
        table.appendChild(row);
    });
  } catch (err) {
    console.error('Lỗi:', err);
  }
}

loadData();