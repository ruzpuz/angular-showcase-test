import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShirtsModule} from './shirts/shirts.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ShirtsModule,
    ShoppingCartModule,
    BrowserAnimationsModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
