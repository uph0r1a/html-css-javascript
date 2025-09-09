var x;
x = Number.parseFloat(input("What's x"));
if ((x < 0)) {
    console.log("x la so am");
} else {
    if ((x === 0)) {
        console.log("x = 0");
    } else {
        if (((((typeof x) === "number") || (x instanceof Number)) && (x > 0))) {
            console.log("x la so nguyen duong");
        } else {
            if (((((typeof x) === "number") || (x instanceof Number)) && (x > 0))) {
                console.log("x la so thap phan duong");
            }
        }
    }
}


