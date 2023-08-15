import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  users: any

  constructor(
    private router: Router,
    private api: UserService
    ) {}
  ngOnInit(): void {
    this.api.getUsers()
      .subscribe(users => {
        console.log(users)
        this.users = users})
  }

  alert: boolean = false;

  usuarioLogin = new FormGroup({
    Email: new FormControl('',Validators.required),
    Password: new FormControl('', Validators.required)
  })

  onSubmit(){

    const login = this.usuarioLogin.value
    console.log(login)
    // this.api.AutenticateUser(login).subscribe( (token: any) =>  localStorage.setItem('auth', token))
    // console.log('Auth',localStorage['auth'])
    // console.log('token', this.parseJwt(localStorage['auth']))
    this.users?.map((user: { id: number | null | undefined ;email: string | null | undefined; password: string | null | undefined; role: string | null | undefined;}) => {
      if (user.email?.toLowerCase() === login.Email?.toLowerCase() &&
        user.password?.toLowerCase() === login.Password?.toLowerCase()) {
          console.log('role',user.role)
          localStorage.setItem('id', user.id ? user.id?.toString() : '')
          console.log('Id',localStorage['id'])
          // this.router.navigate(['']);
          if(user.role === 'patient') {
            localStorage.setItem('role', 'patient')
          }if (user.role === 'med') {
            localStorage.setItem('role', 'med')
          }if (user.role === 'admin') {
            localStorage.setItem('role', 'adm')
          }
          console.log('Role',localStorage['role'])
          this.router.navigate(['']);
      } else {
        this.alert = true;
        setTimeout(() => this.alert=false, 4000);
      }
    })
  }

  parseJwt (token: any) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
}
