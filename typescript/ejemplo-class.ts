class Persona {
    nombre: string;
    edad: number;
    mascotas: any[];
    static mensaje: string = 'Paga tu cuota'
    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }
    agregaMascota(mascota: string) {
        this.mascotas.push(mascota)
    }

}

class Alumno extends Persona {
    noCuenta: number
    materias: string[]
    constructor(noCuenta: number, nombre: string, edad: number) {
        super(nombre, edad)
        this.noCuenta = noCuenta 
    }
}

let ralex = new Persona('Ralex',29)


ralex.agregaMascota('Perro')
ralex.agregaMascota('Gato')
ralex.mascotas // ['Perro', 'Gato']

let chava = new Alumno(123456,'Chava', 30)
chava.agregaMascota('Pato')
// Porque además de ser Alumno, es Persona


console.log(Persona.mensaje)


abstract class FiguraGeomtrica2D {
    abstract area(): void
    abstract perimetro(): void
}

class Circulo extends FiguraGeomtrica2D{
    radio: number
    constructor(radio: number){
        super()
        this.radio = radio
    }
    area() {
        return Math.PI * this.radio * this.radio 
    }
    perimetro() {
        return Math.PI * 2 * this.radio
    }
}

class Cuadrado extends FiguraGeomtrica2D{
    lado: number
    constructor(lado: number){
        super()
        this.lado = lado
    }
    area () {
        return this.lado * this.lado
    }
    perimetro () {
        return this.lado * 4
    }
}


