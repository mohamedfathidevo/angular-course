import { Component } from '@angular/core';
import { SecondComponent } from '../second/second.component';
import { FirstComponent } from '../first/first.component';

@Component({
  selector: 'app-conector',
  standalone: true,
  imports: [FirstComponent, SecondComponent],
  templateUrl: './conector.component.html',
  styleUrl: './conector.component.css'
})
export class ConectorComponent {

  myCard!: Card

  cardTitle: string = "";
  cardDescription: string = "";
  cardImageUrl: string = "";

  receiveCard(card: Card): void {
    console.log(card)
    this.myCard = card;
  }
}

export interface Card {
  title: string;
  description: string;
  imageUrl: string;
}
