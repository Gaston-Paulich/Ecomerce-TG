import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVER_URL = environment.SERVER_URL;

  constructor(
    private _http: HttpClient
  ) { }

  getAllProducts(){
    return this._http.get(this.SERVER_URL+'/products');
  }

  getSingleProduct(id: String){
    const apiUrl =`${this.SERVER_URL}/products/${id}`;
    return this._http.get<ProductModel>(apiUrl);
  }
}
