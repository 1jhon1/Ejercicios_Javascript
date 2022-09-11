const compra = ["Arroz","Azucar","Frijol","Lentejs","Pan"];

compra.push("Aceite de Girasol");
console.log(compra);

compra.pop();
console.log(compra);

const peliculas = [
    {titulo:"Dios no está muerto",director:" Michael Mason",dia:21, mes:03, anio:2014},
    {titulo:"Cuarto de Guerra",director:" Michael Mason",dia:28, mes:08, anio:2015},
    {titulo:"Infinity War",director: "Anthony Russo ",dia:21, mes:05, anio:2019}
]

const peli = peliculas.filter(valor =>valor.dia >=1 &valor.mes > 01 & valor.anio > 2010);
console.log(peli);

const directores = peliculas.map(valor => valor.director);
console.log(directores);

const titulo = peliculas.map(valor => valor.titulo);
console.log(titulo);

const directores_Titulos = directores.concat(titulo);
console.log(directores_Titulos);

const directores_Titulos2 = [...directores,...titulo]
console.log(directores_Titulos2);