const frutas = [];

const fruta = prompt("🍎Mercat Yena🍌 ¿qué fruta desea comprar?");

frutas.push(fruta);

while (confirm('¿Desea agregar otro elemento al 🛒?')) {
    const fruta = prompt('¿qué fruta desea comprar?');
    frutas.push(fruta);
}

console.log("Compraste:");
// for (const fruta of frutas) {
//     console.log(fruta);
// }

frutas.forEach( fruta => console.log(fruta));

// let frutas = ["manzana", "sandía", "pera"];

// frutas.forEach((fruta, index, array) => {
//     console.log(`${index}: ${fruta}`);
//     console.log(array);
// })