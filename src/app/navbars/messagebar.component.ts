import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthenticationService } from "../auth/authentication/authentication.service";

@Component({
    selector: 'logitech-messagebar',
    templateUrl: 'messagebar.component.html',
    styleUrls: ['messagebar.component.css']
})
export class MessageBarComponent implements OnInit {
    private user!: Subscription;
    public isAuthenticated:boolean = false;

    public constructor(private authentication: AuthenticationService) {

    }
    ngOnInit(): void {
        this.user = this.authentication.user.subscribe(user => {
            this.isAuthenticated = !user ? false : true;
        })
    }
}