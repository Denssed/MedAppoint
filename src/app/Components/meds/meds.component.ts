import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/models/Medico';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-meds',
  templateUrl: './meds.component.html',
  styleUrls: ['./meds.component.css']
})
export class MedsComponent implements OnInit {
medico: Medico = new Medico(0,'','','',0,'','','','',false,'');
  radioButtonSeleccionado = 'Todos';
listMedico: Medico[]=[
  {id:1,cedula: '0955843941', nombre: 'Joan', apellido: 'Gracia', edad: 30, genero: 'M', direccion: 'Guayaquil', email: 'reangel97@gmail.com', telefono: '0959576515', estado: false, especializacion:'Psicologo'},
  {id:1,cedula: '0955843942', nombre: 'Milena', apellido: 'Toala', edad: 23, genero: 'F', direccion: 'Guayaquil', email: 'Milena.toalal@gmail.com', telefono: '0959576517', estado: true, especializacion:'Pediatra'},
  {id:1,cedula: '0955843943', nombre: 'Giovanni', apellido: 'Bauz', edad: 23, genero: 'M', direccion: 'Quito', email: 'Giovanni.bauz@gmail.com', telefono: '0959576588', estado: false, especializacion:'Neurologo'},
  {id:1,cedula: '0955843944', nombre: 'Jeremy', apellido: 'Rodriguez', edad: 22, genero: 'M', direccion: 'Guayaquil', email: 'jeremy.rodriguez@gmail.com', telefono: '0959576572', estado: true, especializacion:'Gastroenterologo'},
  {id:1,cedula: '0955843945', nombre: 'Ximena', apellido: 'Sanchez', edad: 23, genero: 'F', direccion: 'Quito', email: 'Ximena.Reyes@gmail.com', telefono: '0959576594', estado: false, especializacion:'Obstreticia'},
]
obtenerTotalPersonas(): number {
  return this.listMedico.length;
}

obtenerTotalActivo(): number {
  return this.listMedico.filter(list => list.estado ===true).length;
}

obtenerTotalInactivo(): number {
  return this.listMedico.filter(list => list.estado=== false).length;
}

ngOnInit(): void {

}

}
