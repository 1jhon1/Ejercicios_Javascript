function verdad() {
    console.log(true);
}
verdad();

function pro() {
    console.log("Hola soy una promesa");
}

setTimeout(pro, 5000);

function* generaId() {
    let id = 0;
    while (true) {
        id++;
        if (id == 10) {
            return id;
        }
        yield id; //es como un return pero no sale de la funcion es hasta que se vuelva a llamar la funcion
    }
}
const generar2 = generaId();

console.log(generar2.next().value * 2);
console.log(generar2.next().value * 2);
console.log(generar2.next().value * 2);
console.log(generar2.next().value * 2);
console.log(generar2.next().value * 2);
console.log(generar2.next().value * 2);
console.log(generar2.next().value * 2);
console.log(generar2.next().value * 2);
console.log(generar2.next().value * 2);
console.log(generar2.next().value * 2);