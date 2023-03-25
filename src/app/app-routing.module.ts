import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { CamerasComponent } from './cameras/cameras.component';

import { HomeComponent } from './home/home.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { SmartphonesComponent } from './smartphones/smartphones.component';


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

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
