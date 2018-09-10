import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],
  declarations: [ ShoppingCartComponent ]
})
export class ShoppingCartModule { }
