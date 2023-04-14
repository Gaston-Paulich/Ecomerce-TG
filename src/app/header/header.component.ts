import { Component, OnInit } from '@angular/core';
import { CartModelServer } from '../models/cart.model';
import { CartService } from '../services/cart.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myCart: CartModelServer = {} as CartModelServer;

  constructor(
    private _cartService: CartService
  ) { }

  ngOnInit(): void {
    this._cartService.cartData$
    .subscribe( res => {
      this.myCart = res;
    } );
    $('.menu-toggle').on('click',function(){});
  }

  removeFromCart(index: number){
    this._cartService.removeFromCart(index);
  }
  

}
