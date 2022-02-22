import { Component, Input } from "@angular/core";

@Component({
    selector: 'logitech-productcard',
    templateUrl: 'productcard.component.html',
    styleUrls: ['productcard.component.css'],
})
export class ProductCardComponent {
    @Input() img: string;
    @Input() title: string;
    @Input() description: string;
    @Input() textside: string;
    @Input() buttonname: string;
    @Input() link: string;

    constructor() {
        this.img = "./assets/bf2042bg.webp";
        this.title = "DEFAULT TITLE";
        this.description = "DEFAULT DESCRIPTION";
        this.textside = "left"
        this.buttonname = "";
        this.link = "";
    }
}