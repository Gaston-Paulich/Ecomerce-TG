import { Component, OnInit } from '@angular/core';
import { CartModelServer } from '../models/cart.model';
import { CartService } from '../services/cart.service';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  laptops: ProductModel[] = [];

  

  constructor(
    private _productService: ProductService,
    private _cartService: CartService
    
    ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this._productService.getAllProducts()
    .subscribe( (res: any) => {
      this.laptops = res;
    })
  }
   // adding product to cart
   addToCart(id: string){
    this._cartService.addToCart(id);
  }

}
