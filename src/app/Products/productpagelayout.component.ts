import { Component, OnInit } from "@angular/core";
import { ProductCardService } from "./productcard.service";
import { ProductCardItemModel } from "./productcard_item.model";

@Component({
  selector: 'logitech-productpagelayout',
  templateUrl: 'productpagelayout.component.html',
  styleUrls: ['productpagelayout.component.css'],
})
export class ProductPageLayoutComponent implements OnInit {
  productcards: ProductCardItemModel[] = [];

  constructor(private productsService: ProductCardService) {
    
  }
  
  ngOnInit(): void {
    this.productsService.getProductCards().subscribe(data => {
      console.log("Fetching product data");
      for (var product of data) {
        console.log(product);
        this.productcards.push(product);
      }
    })
  }
}