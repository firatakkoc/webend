// Primitive Typs

let firstName = "Firat";
console.log(typeof firstName);

// number 

let age = 29;

console.log(typeof age);


// Boolean

let creditUse = true;
console.log(typeof creditUse);


// Reference Types: Object

// Array

let list = ["Firat","Ozan","Ugurkan"];

console.log(typeof list);

for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
    
}

let address = {
    city: "Hamburg",
    country: "Deutschland"
}

for(let key in address) {
    console.log(key);
}


var calc = function() {
    console.log("Funktion");
}

calc();