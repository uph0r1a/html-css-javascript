let isFail = false;
let taiTaiLieu = new Promise((resolve, reject) => {
  if (isFail == false) {
    setTimeout(() => {
      resolve("Tải thành công!");
    }, 2000);
  } else {
    reject("Tải thất bại");
  }
});

async function main() {
  try {
    let result = await taiTaiLieu;
    console.log("✅", result);
  } catch (error) {
    console.log("❌", error);
  }
}

main();