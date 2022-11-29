import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAboutComponent } from './product-about/product-about.component';
import { ShoppingCucaComponent } from './shopping-cuca/shopping-cuca.component';

export const appRoutes: Routes = [
  {
    path: '', 
    redirectTo: 'shopping',
    pathMatch: 'full'
  },
  {
    path:'shopping', 
    component: ShoppingCucaComponent
  },
  {
    path:'about', 
    component: ProductAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
