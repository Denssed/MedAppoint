import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recuperarclave',
  templateUrl: './recuperarclave.component.html',
  styleUrls: ['./recuperarclave.component.css']
})
export class RecuperarclaveComponent {
  constructor(private snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.duration = 3000;
    this.snackBar.open(message, action, config);
  }
  showSnackbar() {
    this.openSnackBar('Se ha restaurado su contraseña revise su email', 'Cerrar');
  }
}
