const fecha = new Date();
console.log("Fecha de hoy: "+fecha);

const nacimiento =  new Date('01 10 2000');
console.log("Fecha de nacimiento: "+nacimiento);

const compara = fecha > nacimiento;
console.log(compara);

//dia 
console.log("Dia: "+fecha.getDate());


//mes 
console.log("Mes: ".concat(fecha.getMonth() +1));

//anio 
console.log("Año: ".concat(fecha.getFullYear()));