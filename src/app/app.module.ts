import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LinkBarComponent } from './navbars/linkbar.component';
import { MessageBarComponent } from './navbars/messagebar.component';
import { NavBarComponent } from './navbars/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkBarComponent,
    MessageBarComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
