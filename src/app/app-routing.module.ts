import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { HomeComponent } from './components/home/home.component';
import { LavarropasComponent } from './components/lavarropas/lavarropas.component';
import { PcComponent } from './components/pc/pc.component';
import { TelefonosComponent } from './components/telefonos/telefonos.component';

const routes: Routes = [
  {path:'lavaropas',component:LavarropasComponent},
  {path:'telefonos',component:TelefonosComponent},
  {path:'pc',component:PcComponent},
  {path:'about',component:AboutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'allproducts',component:AllProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
