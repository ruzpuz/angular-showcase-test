import { Injectable } from '@angular/core';
import { ShoppingCart, ChartItem } from './shopping-cart/shopping-cart.model';

@Injectable()

export class LocalStorageService {
  storage: any;
  cart: ShoppingCart;

  constructor() {
    this.storage = window.localStorage;
  }
  saveCart() {
    this.storage.setItem('ast-cart', JSON.stringify(this.cart));
  }
  getCart(id): ChartItem {
    const cart = JSON.parse(this.storage.getItem('ast-cart'));
    if (!cart) {
      this.cart = {
        cart: []
      };
      this.saveCart();
    } else {
      this.cart = cart;
    }
    const index = this.cart.cart.findIndex(item => item.id === id );
    if (index > -1) {
      return this.cart.cart[index];
    }
    this.cart.cart.push({
      id,
      number: 0
    });
    return {
      id,
      number: 0
    };
  }
  addToCart(id) {
    const index = this.cart.cart.findIndex(item => item.id === id );
    if (index > -1) {
      this.cart.cart[index].number += 1;
    } else {
      this.cart.cart.push({
        id,
        number: 1
      });
    }
    this.saveCart();
  }
}
