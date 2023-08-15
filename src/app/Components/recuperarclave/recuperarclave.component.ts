import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-recuperarclave',
  templateUrl: './recuperarclave.component.html',
  styleUrls: ['./recuperarclave.component.css'],
})

export class RecuperarclaveComponent {
  constructor(
    private snackBar: MatSnackBar,
    private api: UserService) {}

  email: string = ""

  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.duration = 3000;
    this.snackBar.open(message, action, config);
  }
  showSnackbar() {
    this.openSnackBar(
      'Se ha restaurado su contraseña revise su email',
      'Cerrar'
    );
  }

  onSubmit() {
    console.log(this.email)
    this.api.recoverPassword(this.email).subscribe(res => this.showSnackbar())
  }
}
