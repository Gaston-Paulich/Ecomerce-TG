import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';



@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  accessories: ProductModel[] = [];

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
      this.accessories = res

    })
  }

  addToCart(id: string){
    this._cartService.addToCart(id)
  }

}
