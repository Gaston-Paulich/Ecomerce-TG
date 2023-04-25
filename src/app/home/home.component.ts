import { Component, OnInit } from '@angular/core';
import { CartModelServer } from '../models/cart.model';
import { CartService } from '../services/cart.service';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from '../services/product.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allProducts: ProductModel[] = [];
  myCart: CartModelServer = {} as CartModelServer;
  


  constructor(private _productService: ProductService,
    private _cartService: CartService
    ) { }

  ngOnInit(): void {
    this.getAllProducts();
    this._cartService.cartData$
    .subscribe(res => this.myCart = res);

  }

  // getting all product list from server
  getAllProducts(){
    this._productService.getAllProducts()
    .subscribe( (res: any) => {
      this.allProducts = res;
    })
  }


  removeFromCart(index: number){
    this._cartService.removeFromCart(index);
  }

  // adding product to cart
  addToCart(id: string){
    this._cartService.addToCart(id);
  }
}
