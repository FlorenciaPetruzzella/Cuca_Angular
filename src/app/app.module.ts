import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { ProductAboutComponent } from './product-about/product-about.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { ShoppingCucaComponent } from './shopping-cuca/shopping-cuca.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    ProductAboutComponent,
    InputIntegerComponent,
    ShoppingCucaComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
