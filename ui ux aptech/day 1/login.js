const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
let login = false;
localStorage.setItem("login-status", login);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value == "admin@example.com" && password.value == "123456") {
    window.location.href = "admin.html";
    login = true;
    localStorage.setItem("login-status", login);
  } else {
    alert("Nhập sai email hoặc mật khẩu");
  }
});
