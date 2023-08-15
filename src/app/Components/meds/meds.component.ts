import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-meds',
  templateUrl: './meds.component.html',
  styleUrls: ['./meds.component.css']
})
export class MedsComponent {
  nombre: string = '';
  email: string = '';
  telefono: string = '';
  cedula:string='';
  especialidad:string='';
  fechaSeleccionada: string='';

  datos: MatTableDataSource<any>;
  columnas: string[] = ['nombre', 'email', 'telefono','cedula','especialidad','eliminar'];

  constructor() {
    this.datos = new MatTableDataSource<any>([]);
  }
  eliminarFila(dato: any) {
    const indice = this.datos.data.indexOf(dato);
    if (indice > -1) {
      this.datos.data.splice(indice, 1);
      this.datos._updateChangeSubscription();
    }
  }

  registrar() {
    const nuevoDato = { nombre: this.nombre, email: this.email, telefono: this.telefono,cedula:this.cedula,especialidad: this.especialidad,fecha:this.fechaSeleccionada };
    this.datos.data.push(nuevoDato);
    this.datos._updateChangeSubscription();
    this.nombre = '';
    this.email = '';
    this.telefono = '';
    this.cedula='';
    this.especialidad = '';
    this.fechaSeleccionada = '';

  }

}
