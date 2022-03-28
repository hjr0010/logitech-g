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
import { GamingMiceLayoutComponent } from './Products/Gaming Mice/gamingmicelayout.component';
import { GamingMousePadsLayoutComponent } from './Products/Gaming Mouse Pads/gamingmousepadslayout.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { GamingKeyboardLayoutComponent } from './Products/Gaming Keyboards/gamingkeyboardlayout.component';
import { GamingAudioLayoutComponent } from './Products/Gaming Audio/gamingaudiolayout.component';
import { StreamingGearLayoutComponent } from './Products/Streaming Gear/streaminggearlayout.component';
import { DrivingLayoutComponent } from './Products/Driving/drivinglayout.component';
import { SpaceLayoutComponent } from './Products/Space/spacelayout.component';
import { FlightLayoutComponent } from './Products/Flight/flightlayout.component';
import { FarmLayoutComponent } from './Products/Farm/farmlayout.component';
import { GamepadsLayoutComponent } from './Products/Gamepads/gamepadslayout.component';
import { ApparelLayoutComponent } from './Products/Apparel/apparellayout.component';
import { FurnitureLayoutComponent } from './Products/Furniture/furniturelayout.component';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddProductCardComponent } from './Products/add-product-card/add-product-card.component';

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
    GamingMiceLayoutComponent,
    GamingMousePadsLayoutComponent,
    GamingKeyboardLayoutComponent,
    GamingAudioLayoutComponent,
    StreamingGearLayoutComponent,
    DrivingLayoutComponent,
    SpaceLayoutComponent,
    FlightLayoutComponent,
    FarmLayoutComponent,
    GamepadsLayoutComponent,
    ApparelLayoutComponent,
    FurnitureLayoutComponent,
    UserInfoComponent,
    AddProductCardComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
