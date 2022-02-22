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
import { ProductPageLayoutComponent } from './Products/productpagelayout.component';
import { HomeLayoutComponent } from './home-layout.component';
import { EsportsPageLayoutComponent } from './Esports/esportspagelayout.component';
import { CommunityPageLayoutComponent } from './Community/communitypagelayout.component';
import { ChangeLocationComponent } from './Location/changelocationpage.component';
import { ProductCardComponent } from './Products/productcard.componet';
import { ProductPageCarouselComponent } from './Products/productpagecarousel.component';
import { FooterComponent } from './navbars/footer.component';
import { InnovationPageLayoutComponent } from './Innovation/innovationpagelayout.component';
import { InnovationPageCarouselComponent } from './Innovation/innovationpagecarousel.component';
import { SliderCarouselComponent } from './mainitems/slidercarousel.component';
import { GamingMiceLayoutComponent } from './Products/Gaming Mice/gamingmicelayout.component';
import { GamingMousePadsLayoutComponent } from './Products/Gaming Mouse Pads/gamingmousepadslayout.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkBarComponent,
    MessageBarComponent,
    NavBarComponent,
    CarouselComponent,
    LargeCardComponent,
    MainNavItems,
    ProductPageLayoutComponent,
    HomeLayoutComponent,
    EsportsPageLayoutComponent,
    CommunityPageLayoutComponent,
    ChangeLocationComponent,
    ProductCardComponent,
    ProductPageCarouselComponent,
    FooterComponent,
    InnovationPageLayoutComponent,
    InnovationPageCarouselComponent,
    SliderCarouselComponent,
    GamingMiceLayoutComponent,
    GamingMousePadsLayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
