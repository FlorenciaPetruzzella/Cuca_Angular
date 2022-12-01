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
      this._cartList.push({ ... product}); 
    } else {
      item.quantity += product.quantity;
    }
    this.cartList.next(this._cartList);
  }

  deleteProductToCart(id: number, product: Product) {
    let index = this._cartList.findIndex(i => i.id === id);
    this._cartList.splice(index, 1);
    this.product.emit(product);
  }
}
