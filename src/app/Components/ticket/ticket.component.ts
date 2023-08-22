import { Component } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs=pdfFonts.pdfMake.vfs;
const ticktes = [
  {
    speciality: "Pediatria",
    med: "Duran",
    date: "2023-6-24 08:00",
    costo: 200
  },
  {
    speciality: "Pediatria",
    med: "Duran",
    date: "2023-6-25 08:00",
    costo: 300
  },
  {
    speciality: "Pediatria",
    med: "Duran",
    date: "2023-6-26 08:00",
    costo: 400
  },
  {
    speciality: "Pediatria",
    med: "Duran",
    date: "2023-6-27 08:00",
    costo: 500
  },
  {
    speciality: "Pediatria",
    med: "Duran",
    date: "2023-6-28 08:00",
    costo: 200
  },
  {
    speciality: "Pediatria",
    med: "Duran",
    date: "2023-6-30 08:00",
    costo: 100
  },
]

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {

  displayedColumns: string[] = ['speciality', 'med', 'date', 'costo'];
  dataSource = ticktes;
  createPDF1() {
    const pdfDefinition = {
      content: [
        
        { text: 'Reporte de Tickets', style: 'titulo' },
        {
          
          table: {
            widths: ['auto', '*', 'auto', 'auto'], // Define los anchos de las columnas
            body: [
              ['Especialidad', 'Médico', 'Fecha', 'Costo'],
              ...ticktes.map(ticket => [ticket.speciality, ticket.med, ticket.date, ticket.costo]) // Agregar filas de datos
            ],
          },
        },
      ],
      styles: {
        titulo: {
            fontSize: 24,
            bold: true,
            alignment: 'center',
            margin: [0, 0, 0, 10], // Margen inferior
        },
    },
    };
  
    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }
  
}
