const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
let login = false;
localStorage.setItem("login-status", login);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value == "admin@example.com" && password.value == "123456") {
    login = true;
    localStorage.setItem("login-status", login);
    localStorage.setItem("role", "admin");
    window.location.href = "admin.html";
  } else if (email.value == "user@example.com" && password.value == "123456") {
    login = true;
    localStorage.setItem("login-status", login);
    localStorage.setItem("role", "user");
    window.location.href = "home.html";
  } else {
    alert("Nhập sai email hoặc mật khẩu");
  }
});
