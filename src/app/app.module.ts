import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarouselComponent } from './mainitems/carousel.component';
import { LargeCardComponent } from './mainitems/largecard.component';
import { LinkBarComponent } from './navbars/linkbar.component';
import { MessageBarComponent } from './navbars/messagebar.component';
import { NavBarComponent } from './navbars/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { MainNavItems } from './navbars/mainnavitems.component';
import { ProductPageCarouselComponent } from './Products/productpagecarousel.component';
import { HomeLayoutComponent } from './home-layout.component';
import { EsportsPageLayoutComponent } from './Esports/esportspagelayout.component';
import { CommunityPageLayoutComponent } from './Community/communitypagelayout.component';
import { ChangeLocationComponent } from './Location/changelocationpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkBarComponent,
    MessageBarComponent,
    NavBarComponent,
    CarouselComponent,
    LargeCardComponent,
    MainNavItems,
    ProductPageCarouselComponent,
    HomeLayoutComponent,
    EsportsPageLayoutComponent,
    CommunityPageLayoutComponent,
    ChangeLocationComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
