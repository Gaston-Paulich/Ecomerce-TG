import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { CamerasComponent } from './cameras/cameras.component';
import { AccessoriesComponent } from './accessories/accessories.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    LaptopsComponent,
    SmartphonesComponent,
    CamerasComponent,
    AccessoriesComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
