const datos = {
    nombre: "jhon",
    apellido: "Hernandez",
    edad: 22,
    altura: 1.65,
    eresDesarrollador: "true"

};

const edadd = datos.edad;
console.log(edadd);

const misdatos = [{ ...datos }
];
console.log(misdatos);

const mejoresAmigos = [
    { nombre: "mateo", edad: 28 },
    { nombre: "marcos", edad: 25 }
];

const ordenando = mejoresAmigos.sort((a,b)=>a.edad - b.edad);
console.log(ordenando);