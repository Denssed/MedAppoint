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
    // this.api.logUser(login).subscribe( token =>  localStorage.setItem('auth', token))
    // console.log('Auth',localStorage['auth'])
    this.users?.map((user: { email: string | null | undefined; password: string | null | undefined; role: string | null | undefined;}) => {
      if (user.email === login.Email &&
        user.password === login.Password) {
          this.router.navigate(['']);
          // if(user.role === 'emp') {
          //   this.router.navigate(['/dashboard']);
          // }else {
          //   this.router.navigate(['/home']);
          // }
      } else {
        this.alert = true;
        setTimeout(() => this.alert=false, 4000);
      }
    })
  }
}
