import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './MainPortal/directives/directives.component';
import { HomeComponent } from './MainPortal/Home/home/home.component';
import { PageNotFoundComponent } from './MainPortal/Page-Not-Found/page-not-found/page-not-found.component';
import { ShopComponent } from './MainPortal/Shop/shop/shop.component';

const routes: Routes = [
  { path:'' , component:HomeComponent },
  { path:'home' , component:HomeComponent },
  { path:'shop' , component:ShopComponent },
  { path:'directive', component:DirectivesComponent },
  { path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
