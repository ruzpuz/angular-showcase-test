import { Injectable } from '@angular/core';
import { ShoppingCart, ChartItem } from './shopping-cart/shopping-cart.model';

@Injectable()

export class LocalStorageService {
  storage: any;
  cart: ShoppingCart;

  constructor() {
    this.storage = window.localStorage;
    const cart = JSON.parse(this.storage.getItem('ast-cart'));
    if (!cart) {
      this.cart = {
        cart: []
      };
      this.saveCart();
    } else {
      this.cart = cart;
    }
  }
  saveCart() {
    this.storage.setItem('ast-cart', JSON.stringify(this.cart));
  }
  getCart(): ShoppingCart {
    return this.cart;
  }
  getCartItem(id, name): ChartItem {
    const index = this.cart.cart.findIndex(item => item.id === id );
    if (index > -1) {
      return this.cart.cart[index];
    }
    this.cart.cart.push({
      id,
      name,
      number: 0
    });
    return {
      id,
      name,
      number: 0
    };
  }
  addToCart(id, name) {
    const index = this.cart.cart.findIndex(item => item.id === id );
    if (index > -1) {
      this.cart.cart[index].number += 1;
    } else {
      this.cart.cart.push({
        id,
        name,
        number: 1
      });
    }
    this.saveCart();
  }
}
