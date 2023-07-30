let names = ["Firat", "Ozan","Ugurkan"];

console.log(names.length);
names.forEach(element => {
    console.log(element);
});
console.log("\n");
let ages = [1994, 1998,2006];
ages.forEach(element => {
    console.log(element);
});
console.log("\n");
let info = ["Firat", "Akkoc", 1994];

info.forEach(element => {
    console.log(element);
});

console.log("\n");

// add item

names.push("Nur Selin")

names.forEach(element => {
    console.log(element);
});

console.log("\n");

// delete

names.pop()

names.forEach(element => {
    console.log(element);
});

console.log("\n");
names.shift()

names.forEach(element => {
    console.log(element);
});

console.log("\n");

let index = names.indexOf("Ozan");
console.log(index);