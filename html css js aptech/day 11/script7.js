const arr = [1, 2, 3, 2, 4, 2, 5, 3, 3, 3, 2];

const counts = {};

for (let i = 0; i < arr.length; i++) {
  const num = arr[i];
  if (counts[num]) {
    counts[num]++;
  } else {
    counts[num] = 1;
  }
}

for (const i in counts) {
  console.log("Phần tử " + key + " xuất hiện " + counts[key] + " lần");
}
