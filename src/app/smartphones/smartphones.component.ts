import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent implements OnInit {

  smartphones: ProductModel[] = [];


  constructor(
    private _cartService: CartService,
    private _productService: ProductService

  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this._productService.getAllProducts()
    .subscribe((res: any) => {
      this.smartphones = res;
    } )
  }

  addToCart(id: string){
    this._cartService.addToCart(id);
  }

}
