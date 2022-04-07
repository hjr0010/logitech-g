import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { AuthResponse } from './authenticationResponse.model';

@Component({
  selector: 'logitech-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  public buttonClicked!:string;
  private authObservable!: Observable<AuthResponse>;

  constructor(private auth: AuthenticationService, private router:Router) {

  }

  ngOnInit(): void {
  }

  public onSubmit(data: NgForm) {
    console.log("Button clicked = " + this.buttonClicked);
    console.log(data.value);
    
    if (this.buttonClicked == 'Signup') {
      this.authObservable = this.auth.signup(data.value.email, data.value.password);
    }

    if (this.buttonClicked == 'Login') {
      this.authObservable = this.auth.login(data.value.email, data.value.password);
    }

    this.authObservable.subscribe(
      (data: AuthResponse) => {
        console.log(data);
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error.error);
      }
    );

    data.reset();
  }
}
