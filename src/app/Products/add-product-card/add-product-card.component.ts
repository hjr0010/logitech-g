import { Component, OnInit } from '@angular/core';
import { ProductCardItemModel } from '../productcard_item.model';
import { ProductCardService } from '../productcard.service';

@Component({
  selector: 'logitech-add-product-card',
  templateUrl: './add-product-card.component.html',
  styleUrls: ['./add-product-card.component.css']
})
export class AddProductCardComponent implements OnInit {

  constructor(private ps:ProductCardService) { }

  ngOnInit(): void {
  }

  addProductCard(productcard:ProductCardItemModel){
    this.ps.addProductCard(productcard);
  }
}
