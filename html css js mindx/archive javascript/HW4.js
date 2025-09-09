var a, b, c, delta;
a = Number.parseInt(input("What's a"));
b = Number.parseInt(input("What's b"));
c = Number.parseInt(input("What's c"));
delta = (Math.pow(b, 2) - ((4 * a) * c));
if ((((a === b) && (b === 0)) && (c !== 0))) {
    console.log("phuong trinh vo nghiem");
} else {
    if (((a === 0) && (b !== 0))) {
        console.log("phuong trinh co 1 nghiem :"(((- c) / b)));
    } else {
        if ((((a === b) && (b === c)) && (c === 0))) {
            console.log("Phuong trinh vo so nghiem");
        } else {
            if ((delta < 0)) {
                console.log("phuong trinh vo nghiem");
            } else {
                console.log("phuong trinh co 2 nghiem phan biet:");
                console.log("xl=", (((- b) + Math.pow(delta, (1 / 2))) / (2 * a)));
                console.log("x2=", (((- b) - Math.pow(delta, (1 / 2))) / (2 * a)));
            }
        }
    }
}


