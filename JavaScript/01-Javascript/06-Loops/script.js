// while

let i = 0;

// while (i < 10) {
//     i++
//     console.log(i);
// }

// do-while

// do{
//     i++
//     console.log(i);
// }
// while(i < 10)


// for


// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


let citys = ['Istanbul', 'Bursa', 'Izmir','Ankara'];

let users = [
    {firsname:'Firat', lastname:'Akkoc'},
    {firsname:'Max', lastname:'Müller'},
    {firsname:'Lorent', lastname:'Aldi'}
]
// for (let i = 0; i < city.length; i++) {
//     console.log(city[i]);
// }

// for (const key in city) {
//     if (city.hasOwnProperty.call(city, key)) {
//         console.log(city[key]);
        
//     }
// }


citys.forEach(function(item) {
    console.log(item);
});

console.log(" ");

for (let i = 0; i < users.length; i++) {
    console.log(users[i].firsname);
    
}

console.log(" ");

for (const key in users) {
    if (users.hasOwnProperty.call(users, key)) {
        console.log(users[key].lastname);
        
    }
}