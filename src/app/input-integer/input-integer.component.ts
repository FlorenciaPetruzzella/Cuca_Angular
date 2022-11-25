import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})

export class InputIntegerComponent implements OnInit{
   
  constructor(){}

  @Input() quantity!: number;
  @Input() max!: number;
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {

  }

  downQuantity() {
    if (this.quantity > 0)
    this.quantity--;
    this.quantityChange.emit(this.quantity)
  }

  upQuantity(): void {
    if(this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }


  /*changeQuantity(event): void {
    console.log(event);
  }*/
}



