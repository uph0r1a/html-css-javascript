const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const newlist = document.createElement("li");
    newlist.textContent = "Item mới";
    document.getElementById("list").appendChild(newlist);
})