import { Component } from '@angular/core';
import { CardItemModel } from './mainitems/card-item.model';
import { card_data } from './mainitems/card_data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'logitech-g';
  cards: CardItemModel [] = [];

  constructor() {
    for (var card of card_data) {
      console.log(card);
      this.cards.push(card);
    }
  }
}
