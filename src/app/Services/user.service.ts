import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/'
import { Appoiment } from '../Components/types';

interface User {
  id: number,
  cedula: string,
  name: string,
  password: string,
  surName: string,
  email: string
  age: number
  role: string
}

interface Med {
  id: number,
  cedula: string,
  name: string,
  password: string,
  surName: string,
  email: string
  age: number
  role: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  URL = 'https://localhost:44306/api'
  auth_token = (localStorage.getItem('auth') || '')

  httpOptions : Object = {
    headers: new HttpHeaders({
      'Accept': 'text/html',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`,
    })
  };

  getUsers = ():Observable<User[]> => {
    return this.http.get<User[]>(`${this.URL}/Patient`);
  }

  getUser = (id: number): Observable<any> => {
    return this.http.get<User>(`${this.URL}/Patient/${id}`)
  }

  getPatient = (id: number): Observable<any> => {
    return this.http.get<User>(`${this.URL}/Patient/${id}`)
  }

  // AutenticateUser = (login:any):Observable<any> => {
  //   return this.http.post<any>(`${this.URL_DOCKER}/Login`, login)
  // }




  //Appoiments
  getAppoimentsByPatient = (id: number): Observable<Appoiment[]> => {
    return this.http.get<Appoiment[]>(`${this.URL}/Appoiment/${id}`)
  }

  postAppoiment = (appoiment: Appoiment): Observable<Appoiment> => {
    return this.http.post<Appoiment>(`${this.URL}/Appoiment`, appoiment)
  }

}


