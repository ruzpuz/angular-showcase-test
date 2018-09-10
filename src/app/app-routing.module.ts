import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListShirtsComponent } from './shirts/list/list-shirts.component';
import { DetailsComponent} from './shirts/details/details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const appRoutes: Routes = [
  {
    path: 'shirts',
    component: ListShirtsComponent,
    data: { preload: true }
  }, {
    path: 'shirts/:id',
    component: DetailsComponent,
    data: { preload: true }
  }, {
    path: 'cart',
    component: ShoppingCartComponent,
    data: { preload: true }
  },
  { path: '',   redirectTo: '/shirts', pathMatch: 'full' },
  { path: '**', redirectTo: '/shirts' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
