import { Component } from "@angular/core";
import { productcard_data } from "./productcard_data";
import { ProductCardItemModel } from "./productcard_item.model";

@Component({
    selector: 'logitech-productpagelayout',
    templateUrl: 'productpagelayout.component.html',
    styleUrls: ['productpagelayout.component.css'],
})
export class ProductPageLayoutComponent {
    productcards: ProductCardItemModel[] = [];

    constructor() {
      for (var productcard of productcard_data) {
        console.log(productcard);
        this.productcards.push(productcard);
      }
    }
}