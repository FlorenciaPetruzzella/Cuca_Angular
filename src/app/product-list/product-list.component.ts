import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  
  product = {
    "image":"assets/img/mochila_cosmos.png",
    "type":"MOCHILA",
    "name":"Cosmos",
    "price":"$5000",
    "stock": "1"
  }

}
