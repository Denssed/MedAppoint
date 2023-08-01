import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';

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

interface Appoiment {
  specialty: string,
  med: number,
  date: string,
  cost: number
}

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  appoiments: any = []
  appoint: any = []
  dataSource: any = []

  constructor(
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    // this.api.getAppoimentsByPatient(localStorage)
    this._userService.getAppoimentsByPatient(1)
    .subscribe(appoiment => {
      console.log(appoiment)
      this.appoiments = appoiment
      this.dataSource = this.appoiments;
    })
  console.log("appoiments",this.appoiments)

  }

  displayedColumns: string[] = ['speciality', 'med', 'date', 'costo'];

}
