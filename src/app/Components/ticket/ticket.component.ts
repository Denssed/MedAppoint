import { Component } from '@angular/core';

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

}
