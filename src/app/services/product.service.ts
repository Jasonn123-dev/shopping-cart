import { Injectable } from '@angular/core';


import { Product } from 'src/app/models/product';





@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] =[
  new Product(1, 'Product1', 'description of product 1', 100),
  new Product(2, 'Product2', 'description of product 2', 110),
  new Product(3, 'Product3', 'description of product 3', 120),
  new Product(4, 'Product4', 'description of product 5', 130),
  new Product(5, 'Product5', 'description of product 4', 140),
  new Product(6, 'Product6', 'description of product 6', 150)
  ]
  constructor() { }
  getProduct(): Product[]{
    return this.products
  }
}
