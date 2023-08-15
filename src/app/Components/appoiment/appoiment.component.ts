import { Component, OnInit } from '@angular/core';
import { Speciality, Appoiment, Med, Date } from '../types';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-appoiment',
  templateUrl: './appoiment.component.html',
  styleUrls: ['./appoiment.component.css'],
})
export class AppoimentComponent implements OnInit {

  constructor(private api:UserService) {
    let day = Date().split(' ')[2]
    console.log(day)
    let date = new Date();
    let today = date.getDay();
    let counter = 0

    for (let i = today; i < this.days_mock.length; i++) {
      // this.week.push(this.days_mock[i]);
      this.week.push({
        number: Number(day) + Number(counter),
        name: this.days_mock[i]
      })
      counter++
    }
    for (let i = 0; i < today; i++) {
      // this.week.push(this.days_mock[i]);
      // this.week.dayNum = day + counter
      // this.week.dayName = this.days_mock[i]
      this.week.push({
        number: Number(day) + Number(counter),
        name: this.days_mock[i]
      })
      counter++
      // this.week.push(this.days_mock[i]);
    }

    // console.log(this.week);
    // console.log(Date().split(' ')[0])
    // this.days_mock =
  }
  ngOnInit(): void {
    this.api.getSpecilities().subscribe(sp => {
      this.speciality_mock = sp
      console.log(sp)
    })


  }

  isLinear = true
  speciality_mock = []

  meds_mock:any[] = []

  hour_mock = [
    {
      name: '08:00'
    },
    {
      name: '10:00'
    },
    {
      name: '12:00'
    },
    {
      name: '14:00'
    },
    {
      name: '16:00'
    },
    {
      name: '18:00'
    },

  ]

  days_mock = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

  week: any = []

  appoiment: Appoiment = {
    id: 0,
    patient_id: 0,
    med_id: 0,
    date_timeStamp: '',
    speciality_id: 0,
    cost: 0
  }

  getSpeciality(speciality: Speciality): void {
    console.log("speciality", speciality)
    this.appoiment!.speciality_id = speciality.id
    this.appoiment!.cost = speciality.consult_cost
    console.log("appoiment", this.appoiment)
    this.api.getMedsBySpecialiyId(speciality.id).subscribe(meds => this.meds_mock = meds)
  }

  getMed(med: Med): void {
    console.log("med", med)
    this.appoiment!.med_id = med.id
    console.log("appoiment", this.appoiment)
  }

  getschedule(day: any, hour: any): void {
    console.log("schedule", day, hour)
    // console.log(this.convertformat(day, hour))
    this.appoiment!.date_timeStamp = this.convertformat(day, hour)
    // this.appoiment!.date = this.date?.id!
    this.appoiment!.date_timeStamp = this.convertformat(day,hour)
    // console.log(this.date)
    console.log("appoiment", this.appoiment)
  }

  convertformat(day: any, hour: any){
    let curr_dt = new Date()
    var h_arr = hour.name.split(":");
    let form_dt = curr_dt.getFullYear() + "-" + (curr_dt.getMonth() + 1) + "-" + String(day) + " " + h_arr[0] + ":" + h_arr[1];
    return form_dt;
  }

  toTimestamp (strDate: any) {
    return Date.parse(strDate)
  }

  submit(){
    let date = this.toTimestamp(this.appoiment?.date_timeStamp)
    console.log(date)
    this.appoiment.date_timeStamp = date

    console.log(this.appoiment)
    this.api.postAppoiment(this.appoiment).subscribe(data => console.log(data))
  //   let date = this.appoiment?.date
  //   let myDate = date?.split("-");
  //   let newDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);
  //   console.log(newDate.getTime());
  }
}
