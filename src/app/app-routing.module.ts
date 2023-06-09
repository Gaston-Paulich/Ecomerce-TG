import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { CamerasComponent } from './cameras/cameras.component';

import { HomeComponent } from './home/home.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'laptops',
    component: LaptopsComponent

  },

  {
    path: 'smartphones',
    component: SmartphonesComponent

  },

  {
    path: 'cameras',
    component: CamerasComponent

  },

  {
    path: 'accessories',
    component: AccessoriesComponent

  },
  {
    path: 'cart',
    component: CartComponent

  },
  {path: 'contact',
  component:ContactComponent},

  {path:'checkout',
  component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
