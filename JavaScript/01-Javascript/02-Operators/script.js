let veri;

const a=20;
const b=20;

veri = a+b;

console.log(veri);
console.log(typeof veri);


// atama

veri += a;
console.log(veri);
veri -= a;
console.log(veri);
veri *= a;
console.log(veri);
veri /= a;
console.log(veri);
veri %= b;
console.log(veri);


// Karsilastirma

veri = a==b;
console.log(veri);

// hem sayilar hem karater

veri = 5 ==="5";
console.log(veri);

veri = a!=b;
console.log(veri);
veri = a!==b;
console.log(veri);