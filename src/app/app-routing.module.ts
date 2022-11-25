import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAboutComponent } from './product-about/product-about.component';
import { ProductListComponent } from './product-list/product-list.component';

export const appRoutes: Routes = [
  {
    path: '', 
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path:'products', 
    component: ProductListComponent
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
