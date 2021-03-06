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
    @Input() backgroundtype: string;
    @Input() buttontext : string;
    @Input() hr : string;
    @Input() link : string;

    constructor() {
        this.img = "./assets/logo-logitech-overlay.svg";
        this.background = "./assets/herobg.webp"
        this.title = "DEFAULT TITLE";
        this.description = "DEFAULT DESCRIPTION";
        this.imagetype = "largecard-image";
        this.backgroundtype = "";   
        this.buttontext = "";
        this.hr = "";
        this.link = "";
    }
}