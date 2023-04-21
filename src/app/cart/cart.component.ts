import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartModelServer } from '../models/cart.model';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() product:ProductModel ={
    _id: '',
    name: '',
    description: '',
    category: '',
    images: '',
    price: 0,
    stock: 0
  }

  myCarT: CartModelServer = {} as CartModelServer;

  constructor(
    private _cartService: CartService
  ) { }

  ngOnInit(): void {
    this._cartService.cartData$
    .subscribe( res => this.myCarT = res );
  }

}
