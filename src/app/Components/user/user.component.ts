import { Component, OnInit  } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User,} from '../types';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: number = 0

  patient: User = {
    id: 0,
    cedula: '',
    name: '',
    password: '',
    surName: '',
    email: '',
    age: 0,
    role: ''
  }

  constructor (private _userService: UserService) {

  }

  ngOnInit() {
    this.id = parseInt(localStorage['id'])
    this._userService.getUser(this.id).subscribe(patient => this.patient = patient)
    console.log(this.patient)
  }

  modifyPatient() {
    this._userService.ModifyUser(this.id, this.patient).subscribe(data => console.log(data))
  }

}
