import { Injectable } from '@angular/core';
import { ShoppingCart, ChartItem } from './shopping-cart/shopping-cart.model';
import { Shirt } from './shirts/shirt.model';

@Injectable()

export class LocalStorageService {
  storage: any;
  cart: ShoppingCart;

  constructor() {
    this.storage = window.localStorage;
    const cart = JSON.parse(this.storage.getItem('ast-cart'));
    if (!cart) {
      this.cart = { };
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
  getCartItem(id: number): ChartItem {
    return this.cart[id];
  }
  addToCart(newItem: Shirt) {
    if (this.cart[newItem.id]) {
      this.cart[newItem.id].number += 1;
    } else {
      this.cart[newItem.id] = {
        item: newItem,
        number: 1
      };
    }

    this.saveCart();
  }
  removeFromCart(item: Shirt) {
    if (this.cart[item.id]) {
      if (this.cart[item.id].number === 1) {
        delete this.cart[item.id];
      } else {
        this.cart[item.id].number -= 1;
      }
    }
    this.saveCart();
  }
}
