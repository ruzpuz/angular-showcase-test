import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShirtsComponent } from './shirts/list/shirts.component';

const appRoutes: Routes = [
  {
    path: 'shirts',
    component: ShirtsComponent,
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
