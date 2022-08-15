import { Injectable } from '@angular/core';
import Product from '../JsonData/product.json';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private MyProduct = Product;

  constructor() { }

  GetAllProducts() {
    return this.MyProduct
  }

}