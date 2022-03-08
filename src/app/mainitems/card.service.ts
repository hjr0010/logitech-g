import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { CardItemModel } from "./card-item.model";

@Injectable({
    providedIn: 'root'
})
export class CardService {
    private baseUrl:string = "https://logitechg-dce95-default-rtdb.firebaseio.com/";
    private CardEndpoint: string = "cards.json";

    constructor(private http:HttpClient) {
        
    }

    public getCards() {
        return this.http.get<CardItemModel []>(this.baseUrl + this.CardEndpoint);
    }

}