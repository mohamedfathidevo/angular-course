import { Component, EventEmitter, Output } from '@angular/core';
import { Card } from '../conector/conector.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  cardTitle: string = '';
  cardDescription: string = '';
  cardImageUrl: string = '';

  @Output() cardEvent = new EventEmitter<Card>();

  onSubmit(event: Event): void {
    event.preventDefault();
    const myCardObject: Card = {
      title: this.cardTitle,
      description: this.cardDescription,
      imageUrl: this.cardImageUrl
    };
    console.log(myCardObject);
    this.cardEvent.emit(myCardObject);

    // Optionally reset the form after submission
    this.cardTitle = '';
    this.cardDescription = '';
    this.cardImageUrl = '';
  }
}
