import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Card } from '../conector/conector.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent implements OnChanges {
  
  @Input() myCardObj!: Card

  myCardsArray: Card[] = []; 

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['myCardObj'] && !changes['myCardObj'].firstChange) {
      this.myCardsArray.push(changes['myCardObj'].currentValue);
    }
  }
}
