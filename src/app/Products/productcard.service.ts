import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { ProductCardItemModel } from "./productcard_item.model";

@Injectable({
    providedIn: 'root'
})
export class ProductCardService {
    private baseUrl:string = "https://logitechg-dce95-default-rtdb.firebaseio.com/";
    private productCardEndpoint: string = "productCards.json";

    constructor(private http:HttpClient) {
        
    }

    public getProductCards() {
        return this.http.get<ProductCardItemModel []>(this.baseUrl + this.productCardEndpoint);
    }

}