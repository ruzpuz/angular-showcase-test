import {Component, Injectable, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { ShoppingCart } from './shopping-cart.model';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-shirt-details',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  providers: [ LocalStorageService ]
})
@Injectable({ providedIn: 'root' })
export class ShoppingCartComponent {
  localStorageService: LocalStorageService;
  cart: ShoppingCart;

  constructor(
    localStorageService: LocalStorageService
  ) {
    this.localStorageService = localStorageService;
    this.cart = this.localStorageService.getCart();

  }


}
