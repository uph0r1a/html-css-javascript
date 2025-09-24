//Bai 1
let a = 3;
if (a % 2 == 0) {
  console.log("Số chẵn");
} else {
  console.log("Số lẻ");
}

//Bài 2
let diem = 50;
if (diem >= 90) {
  console.log("Giỏi");
} else if (diem < 90 && diem >= 70) {
  console.log("Khá");
} else if (diem < 69 && diem >= 50) {
  console.log("TB");
} else if (diem < 49 && diem >= 0) {
  console.log("Yếu");
} else {
  console.log("Nhập lại điểm");
}

//Bài 3
for (let i = 0; i <= 10; i++) {
  console.log("6 x ", i, " = ", 6 * i);
}

//Bài 4
let i = 1;
while (i <= 100) {
  let tong = 0;
  tong += i;
}
console.log("Tổng: ", tong);

//Bài 5
let password = 123456;
do {
  console.log("Nhập đúng mật khẩu 123456");
} while (password != 123456);

//Bài 6
let hello = function () {
  console.log("Xin chào học viên!");
};

hello();
hello();

//Bài 7
let nhanDoi = (x) => {
  return x * 2;
};
let kiemTraChanLe = (n) => {
  if (n % 2 == 0) {
    return "Chẵn";
  } else {
    return "Lẻ";
  }
};

// Bài 8
let isFalse = false;
let taiTaiLieu = new Promise((resolve, reject) => {
  if (isFalse == false) {
    setTimeout(() => {
      resolve("Tải thành công!");
    }, 2000);
  } else {
    reject("Tải thất bại");
  }
});

//Bài 9
taiTaiLieu
  .then((result) => {
    console.log("✅", result);
  })
  .catch((error) => {
    console.log("❌", error);
  });

//Bài 10
async function main() {
  try {
    let result = await taiTaiLieu;
    console.log("✅", result);
  } catch (error) {
    console.log("❌", error);
  }
}

main();
