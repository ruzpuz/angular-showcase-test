import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { MatListModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule
  ],
  declarations: [ ShoppingCartComponent ]
})
export class ShoppingCartModule { }
