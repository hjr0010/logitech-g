import { Component, Input } from "@angular/core";

@Component({
    selector: 'logitech-largecard',
    templateUrl: 'largecard.component.html',
    styleUrls: ['largecard.component.css']
})
export class LargeCardComponent {
    @Input() img: string;
    @Input() background: string;
    @Input() title: string;
    @Input() description: string;
    @Input() imagetype: string;

    constructor() {
        this.img = "./assets/logo-logitech-overlay.svg";
        this.background = "./assets/herobg.webp"
        this.title = "DEFAULT TITLE";
        this.description = "DEFAULT DESCRIPTION";
        this.imagetype = "largecard-image";
    }
}