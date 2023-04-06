import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit {

  cameras: ProductModel[] = [];


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
      this.cameras = res;
    })
  }

  addToCart(id: string){
    this._cartService.addToCart(id);
  }

}
