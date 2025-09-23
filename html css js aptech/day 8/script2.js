let kwh = 50;

let calculateElectricBill = (kwh) => {
  if (kwh < 0) {
    console.log("Số điện sai nhập lại");
  } else {
    if (kwh <= 50) {
      console.log("1.500 đ/kWh");
    } else if (kwh <= 100) {
      console.log("2.000 đ/kWh");
    } else {
      console.log("3.000 đ/kWh");
    }
  }
};
