import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/Product';

@Injectable({
  providedIn: 'root'
})

export class ProductCartService {

  private _cartList: Product [] = [];
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  @Output() product: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  addToCart (product: Product){
    let item: Product= this._cartList.find((v1) => v1.name == product.name)!;
    if (!item){
      this._cartList.push({ ... product}); // {... product} clona el objeto
    } else {
      item.quantity += product.quantity;
    }
    this.cartList.next(this._cartList);
  }

  deleteProductoToCart(product: any): void {
    this._cartList.splice(product);
    this.product.emit(product);
  }
}
