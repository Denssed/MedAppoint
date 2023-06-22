import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/'

interface Patient {
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

  getPatients = ():Observable<Patient[]> => {
    return this.http.get<Patient[]>(`${this.URL}/Patient`);
  }

  getPatient = (id: number): Observable<any> => {
    return this.http.get<Patient>(`${this.URL}/Patient/${id}`)
  }

  // AutenticateUser = (login:any):Observable<any> => {
  //   return this.http.post<any>(`${this.URL_DOCKER}/Login`, login)
  // }


}


