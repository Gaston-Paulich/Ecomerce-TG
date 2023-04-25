import { Component, OnInit,Input } from '@angular/core';
import { CartModelServer } from '../models/cart.model';
import { CartService } from '../services/cart.service';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from '../services/product.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  myCart: CartModelServer = {} as CartModelServer;

 product!: ProductModel;
 productId!: string | null;

  constructor(
    private _productService : ProductService,
    private _cartService : CartService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this._route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.getSingleProduct();
    });

  
    this._cartService.cartData$
    .subscribe(res => this.myCart = res);

    
  }

  getSingleProduct(): void {
    this._productService.getSingleProduct(this.productId!).subscribe(product => {
      this.product = product;
    });
  }

  addToCart(id: string){
    this._cartService.addToCart(id);
  }



}
