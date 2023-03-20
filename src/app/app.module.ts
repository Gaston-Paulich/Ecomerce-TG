import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelefonosComponent } from './components/telefonos/telefonos.component';
import { LavarropasComponent } from './components/lavarropas/lavarropas.component';
import { PcComponent } from './components/pc/pc.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AllProductsComponent } from './components/all-products/all-products.component';

@NgModule({
  declarations: [
    AppComponent,
    TelefonosComponent,
    LavarropasComponent,
    PcComponent,
    AboutComponent,
    HomeComponent,
    AllProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
