let score = 50;

if (score < 0 || score > 100) {
  console.log("Điểm sai hãy nhập lại");
} else {
  if (score >= 85) {
    console.log("A");
  } else if (score >= 70) {
    console.log("B");
  } else if (score >= 50) {
    console.log("C");
  } else {
    console.log("D");
  }
}
