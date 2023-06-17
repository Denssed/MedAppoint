export class Persona {
    cedula: string;
    nombre: string;
    apellido: string;
    edad: number;
    genero: string;
    direccion: string;
    email: string;
    telefono: string;
    estado: boolean;

    constructor(cedula: string, nombre: string, apellido: string, edad: number, genero: string, direccion: string, email: string, telefono: string, estado: boolean) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.genero = genero;
        this.direccion = direccion;
        this.email = email;
        this.telefono = telefono;
        this.estado = estado;
    }
}