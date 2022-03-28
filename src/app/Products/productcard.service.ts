import { Injectable } from "@angular/core";
import { ProductCardItemModel } from "./productcard_item.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})
export class ProductCardService {
    constructor(private db: AngularFireDatabase) {
        
    }

    public getProductCards() {
       return this.db.list<ProductCardItemModel>("productCards").valueChanges();
    }

    public getProduct(index:number) {

    }

    addProductCard(productCard: ProductCardItemModel) {
        this.db.list<ProductCardItemModel>("productCards").push(productCard);
    }
}