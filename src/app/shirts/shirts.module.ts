import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListShirtsComponent } from './list/list-shirts.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatListModule, MatIconModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [ ListShirtsComponent ]
})
export class ShirtsModule { }
