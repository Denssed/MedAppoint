import { Component } from '@angular/core';
import { Speciality, Appoiment, Med, Date } from '../types';

@Component({
  selector: 'app-appoiment',
  templateUrl: './appoiment.component.html',
  styleUrls: ['./appoiment.component.css'],
})
export class AppoimentComponent {

  constructor() {
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

    console.log(this.week);
    // console.log(Date().split(' ')[0])
    // this.days_mock =
  }

  isLinear = true
  test = { id: 1, name: 'test', cost: 200 };

  speciality_mock = [
    {
      id: 1,
      name: 'test-1',
      cost: 200
    },
    {
      id: 2,
      name: 'test-2',
      cost: 200
    },
    {
      id: 3,
      name: 'test-3',
      cost: 200
    },
    {
      id: 4,
      name: 'test-4',
      cost: 200
    },
    {
      id: 5,
      name: 'test-5',
      cost: 200
    },
    {
      id: 6,
      name: 'test-6',
      cost: 200
    },
    {
      id: 7,
      name: 'test-7',
      cost: 200
    },
    {
      id: 8,
      name: 'test-8',
      cost: 200
    },
    {
      id: 9,
      name: 'test-9',
      cost: 200
    },
    {
      id: 10,
      name: 'test-10',
      cost: 200
    },
  ]

  meds_mock = [
    {
      id: 1,
      name: 'Andres',
      surName: 'Campos',
      specialityId: 1
    },
    {
      id: 2,
      name: 'Julian',
      surName: 'Campos',
      specialityId: 2
    },
    {
      id: 3,
      name: 'Andres-2',
      surName: 'Campos',
      specialityId: 3
    },
    {
      id: 4,
      name: 'Julian-2',
      surName: 'Campos',
      specialityId: 4
    },
    {
      id: 5,
      name: 'Adrian',
      surName: 'Ramos',
      specialityId: 5
    },
  ]

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

  appoiment: Appoiment | null = {
    id: 0,
    patientId: 0,
    medId: 0,
    date: '',
    specialityId: 0,
    cost: 0
  }

  // date: Date | null = {
  //   id: 0,
  //   date: ""
  // }

  getSpeciality(speciality: Speciality): void {
    console.log("speciality", speciality)
    this.appoiment!.specialityId = speciality.id
    this.appoiment!.cost = speciality.cost
    console.log("appoiment", this.appoiment)
  }

  getMed(med: Med): void {
    console.log("med", med)
    this.appoiment!.medId = med.id
    console.log("appoiment", this.appoiment)
  }

  getschedule(day: any, hour: any): void {
    console.log("schedule", day, hour)
    // console.log(this.convertformat(day, hour))
    this.appoiment!.date = this.convertformat(day, hour)
    // this.appoiment!.date = this.date?.id!
    this.appoiment!.date = this.convertformat(day,hour)
    // console.log(this.date)
    console.log("appoiment", this.appoiment)
  }

  convertformat(day: any, hour: any){
    let curr_dt = new Date()
    var h_arr = hour.name.split(":");
    let form_dt = curr_dt.getFullYear() + "-" + (curr_dt.getMonth() + 1) + "-" + String(day) + " " + h_arr[0] + ":" + h_arr[1];
    return form_dt;
  }
}
