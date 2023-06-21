import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { Speciality } from '../../types';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent {

  @Input() data: any | null = null;
  @Output() isSelect = new EventEmitter<any>()

  selectInput() {
    this.isSelect.emit(this.data!)
  }
}
