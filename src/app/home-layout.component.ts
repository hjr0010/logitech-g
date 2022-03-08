import { Component, OnInit } from "@angular/core";
import { CardItemModel } from "./mainitems/card-item.model";
import { CardService } from "./mainitems/card.service";

@Component({
    selector: 'lgtch-home-component',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent implements OnInit {
  cards: CardItemModel[] = [];

  constructor(private cardService: CardService) {
    
  }
  
  ngOnInit(): void {
    this.cardService.getCards().subscribe(data => {
      console.log("Fetching product data");
      for (var card of data) {
        console.log(card);
        this.cards.push(card);
      }
    })
  }
}