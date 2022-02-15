import { Component } from "@angular/core";
import { CardItemModel } from "./mainitems/card-item.model";
import { card_data } from "./mainitems/card_data";

@Component({
    selector: 'lgtch-home-component',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent{
    cards: CardItemModel [] = [];

    constructor() {
      for (var card of card_data) {
        console.log(card);
        this.cards.push(card);
      }
    }
}