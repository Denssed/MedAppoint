import { Persona } from "./Persona";

export class Medico extends Persona{
    id: number;
    especializacion: string;
    constructor(id:number,cedula: string, nombre: string, apellido: string, edad: number, genero: string, direccion: string, email: string, telefono: string, estado: boolean, especializacion:string){
        super(cedula,nombre,apellido,edad,genero,direccion,email,telefono,estado);
        this.id=id;
        this.especializacion = especializacion;
    }

}