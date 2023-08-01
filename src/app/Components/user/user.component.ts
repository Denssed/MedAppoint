import { Component, OnInit  } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  patient = {
    name: '',
    surName: '',
    email: '',
    age: 0
  }

  constructor (private _userService: UserService) {

  }

  ngOnInit() {
    this._userService.getUser(1).subscribe(patient => this.patient = patient)
    console.log(this.patient)
  }

  modifyPatient() {
    console.log(this.patient)
  }

}
