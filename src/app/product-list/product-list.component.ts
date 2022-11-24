import { Component } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  
  products: Product[] = [
    { 
      image:"assets/img/mochila_cosmos.png",
      type:"Mochila",
      name:"Cosmos",
      price: 5000,
      stock: 1,
      clearance: true,
      quantity: 0,
    },
    { 
      image:"assets/img/cartuchera_malva.png",
      type:"Neceser",
      name:"Malva",
      price: 1700,
      stock: 2,
      clearance: false,
      quantity: 0,
    },
    { 
      image:"assets/img/matera_terra.png",
      type:"Matera",
      name:"Terra",
      price: 4800,
      stock: 1,
      clearance: false,
      quantity: 0,
    },
    { 
      image:"assets/img/portalente_paris.png",
      type:"Porta-Lentes",
      name:"Paris",
      price: 1350,
      stock: 0,
      clearance: false,
      quantity: 0,
    },
    { 
      image:"assets/img/sobre_roma.png",
      type:"Sobre de mano",
      name:"Roma",
      price: 2200,
      stock: 2,
      clearance: true,
      quantity: 0,
    },
    { 
      image:"assets/img/panuelo_corales.png",
      type:"Pañuelo",
      name:"Corales",
      price: 1250,
      stock: 2,
      clearance: false,
      quantity: 0,
    }
  ]

  upQuantity(product:Product): void {
    if (product.quantity < product.stock)
    product.quantity++;
  }

  downQuantity(product:Product): void {
    if (product.quantity>0)
    product.quantity--;
  }

  /*changeQuantity(event, product:Product): void {
    console.log(event);
  }*/

}
