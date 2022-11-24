import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAboutComponent } from './product-about/product-about.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'products'},
  {path:'products', component: ProductListComponent},
  {path:'abaout', component: ProductAboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
