import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  users: any

  constructor(
    private router: Router, 
    private dialogoRef: MatDialogRef<LoginComponent>,
    private api: UserService
    ) {}
  ngOnInit(): void {
    this.api.getUsers()
      .subscribe(users=> { 
        console.log(users)
        this.users = users})
  }

  alert: boolean = false;

  usuarioLogin = new FormGroup({
    User: new FormControl('',Validators.required),
    Password: new FormControl('', Validators.required)
  })
  
  onSubmit(){

    const login = this.usuarioLogin.value
    // console.log(login)
    // console.log('Auth',localStorage['auth'])
    this.users?.map((user: { usuario: string | null | undefined; password: string | null | undefined; role: string | null | undefined;}) => {
      if (user.usuario === login.User &&
        user.password === login.Password) {
          if(user.role === 'emp') {
           localStorage.setItem('role','emp')
          }else {
           localStorage.setItem('role','cli')
          }
      } else {
        this.alert = true;
        setTimeout(() => this.alert=false, 4000);
      }
    })   
  }  
}