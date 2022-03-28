import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageLayoutComponent } from './Products/productpagelayout.component';
import { HomeLayoutComponent } from './home-layout.component';
import { EsportsPageLayoutComponent } from './Esports/esportspagelayout.component';
import { CommunityPageLayoutComponent } from './Community/communitypagelayout.component';
import { ChangeLocationComponent } from './Location/changelocationpage.component';
import { InnovationPageLayoutComponent } from './Innovation/innovationpagelayout.component';
import { GamingMiceLayoutComponent } from './Products/Gaming Mice/gamingmicelayout.component';
import { GamingMousePadsLayoutComponent } from './Products/Gaming Mouse Pads/gamingmousepadslayout.component';
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
import { AddProductCardComponent } from './Products/add-product-card/add-product-card.component';

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'products', component: ProductPageLayoutComponent},
  {path: 'innovation', component: InnovationPageLayoutComponent},
  {path: 'esports', component: EsportsPageLayoutComponent},
  {path: 'community', component: CommunityPageLayoutComponent},
  {path: 'change-location', component: ChangeLocationComponent},
  {path: 'products/gaming-mice', component: GamingMiceLayoutComponent},
  {path: 'products/gaming-mousepads', component: GamingMousePadsLayoutComponent},
  {path: 'products/gaming-keyboards', component: GamingKeyboardLayoutComponent},
  {path: 'products/gaming-audio', component: GamingAudioLayoutComponent},
  {path: 'products/streaming-gear', component: StreamingGearLayoutComponent},
  {path: 'products/driving', component: DrivingLayoutComponent},
  {path: 'products/space', component: SpaceLayoutComponent},
  {path: 'products/flight', component: FlightLayoutComponent},
  {path: 'products/farm', component: FarmLayoutComponent},
  {path: 'products/gamepads', component: GamepadsLayoutComponent},
  {path: 'products/apparel', component: ApparelLayoutComponent},
  {path: 'products/gaming-furniture', component: FurnitureLayoutComponent},
  {path: 'admin', component: AddProductCardComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
