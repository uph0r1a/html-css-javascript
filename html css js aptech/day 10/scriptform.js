const add = document.getElementById("add");
const show = document.getElementById("show");
const change = document.getElementById("change");
const del = document.getElementById("del");
const body = document.getElementById("body");
const user = [];
let count = 1;
const changefunc = () => {
  
}

cha

const delfunc = () => {

}
const mainhtml = `
  <button id="add">Thêm nhân viên mới</button>
  <button id="show">Hiển thị danh sách nhân viên trong bảng</button>
  <button id="change">Sửa thông tin nhân viên</button>
  <button id="del">Xoá nhân viên khỏi danh sách</button>
`;

add.addEventListener("click", () => {
  body.innerHTML = `
    <form class="register-form" action="#" method="post">
      <h1>Thông tin đăng ký</h1>
      <label for="name">Họ tên</label>
      <input type="text" id="name" name="name" placeholder="Nhập họ tên" maxlength="255" required>

      <label for="age">Nhập tuổi</label>
      <input type="number" name="age" id="age" placeholder="Nhập tuổi" max="65" min="18" required>

      <label>Giới tính:
        <input type="radio" id="male" name="gender" value="male" required> <label for="male">Nam</label>
        <input type="radio" id="female" name="gender" value="female"> <label for="female">Nữ</label>
      </label>

      <label for="position">Vị trí</label>
      <select name="position" id="position" required>
          <option value="ke-toan">Kế toán</option>
          <option value="lap-trinh-vien">Lập trình viên</option>
          <option value="quan-ly">Quản lý</option>
      </select>

      <label for="note">Ghi chú</label>
      <textarea name="note" id="note" maxlength="300"></textarea>

      <button type="submit" id="submit">Thêm nhân viên mới</button>

      <input type="reset" id="reset" value="Nhập lại">
    </form>
    <style>
      .register-form {
        display: grid;
        grid-template-columns: 1fr;
        gap: 15px;
        max-width: 400px;
        margin: 20px auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
      }
      .register-form input, .register-form textarea, .register-form button {
        padding: 10px;
        border: 1px solid #aaa;
        border-radius: 5px;
      }
      .register-form button {
        background: #007bff;
        color: white;
        border: none;
        cursor: pointer;
      }

      #reset {
        cursor: pointer;
      }
      .register-form button:hover {
        background: #0056b3;
      }

      #reset:hover {
        background: rgb(203, 200, 200);
      }
    </style>
  `;

  const userInput = {
    id: count,
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    position: document.getElementById("position").value,
    note: document.getElementById("note").value.trim(),
  };

  document.getElementById("submit").addEventListener("click", () => {
    user.push(userInput);
    alert("Thêm nhân viên mới thành công");
    body.innerHTML = mainhtml;
    count++;
  });
});

show.addEventListener("click",() => {
  body.innerHTML = `
  
  `;
})