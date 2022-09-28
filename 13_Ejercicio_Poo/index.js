class Estudiante{

    nombre
    asignatura

    constructor(nombre, asignatura){
        this.nombre = nombre
        this.asignatura = asignatura
    }

    obtenDatos(){
        console.log(`${this.nombre} ${this.asignatura}`);

    }
}

const estudent = new Estudiante("jhon","Javascript,html,css")

estudent.obtenDatos()