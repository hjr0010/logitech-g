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

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'Products', component: ProductPageLayoutComponent},
  {path: 'Innovation', component: InnovationPageLayoutComponent},
  {path: 'Esports', component: EsportsPageLayoutComponent},
  {path: 'Community', component: CommunityPageLayoutComponent},
  {path: 'change-location', component: ChangeLocationComponent},
  {path: 'products/gaming-mice', component: GamingMiceLayoutComponent},
  {path: 'products/gaming-mouse-pads', component: GamingMousePadsLayoutComponent},
  
  
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
