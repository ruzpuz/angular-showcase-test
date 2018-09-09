import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListShirtsComponent } from './list/list-shirts.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatSelectModule } from '@angular/material';
import { FilterShirtsPipe } from './list/list-shirts.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule
  ],
  declarations: [ ListShirtsComponent, FilterShirtsPipe ]
})
export class ShirtsModule { }
