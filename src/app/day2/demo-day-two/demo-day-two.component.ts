import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-day-two',
  standalone: true,
  imports: [],
  templateUrl: './demo-day-two.component.html',
  styleUrl: './demo-day-two.component.css'
})
export class DemoDayTwoComponent {

  getDataFromInput: string = "";

  onButtonClick(): void {
    alert('the nutton clicked !!!!!!!!!!!')
  }

  onTextChange(text: string): void {
    this.getDataFromInput = text;
  }
}
