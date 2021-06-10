import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from "./components/products/products.component";
import {LandingComponent} from "./components/landing/landing.component";

const routes: Routes = [
  {
    path : '',
    component : LandingComponent
  },
  {
    path : 'products',
    component : ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
