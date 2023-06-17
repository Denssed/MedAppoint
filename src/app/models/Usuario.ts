import { Persona } from "./Persona";

export class Usuario extends Persona{
    id: number;
    constructor(id:number,cedula: string, nombre: string, apellido: string, edad: number, genero: string, direccion: string, email: string, telefono: string, estado: boolean){
        super(cedula,nombre,apellido,edad,genero,direccion,email,telefono,estado);
        this.id=id;
    } 
}