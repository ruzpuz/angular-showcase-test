import {Component, Injectable, OnInit } from '@angular/core';
import { ShirtsService } from '../shirts.service';
import { Shirt } from '../shirt.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ChartItem } from '../../shopping-cart/shopping-cart.model';
import { LocalStorageService } from '../../local-storage.service';

@Component({
  selector: 'app-shirt-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ ShirtsService, LocalStorageService ]
})
@Injectable({ providedIn: 'root' })
export class DetailsComponent implements  OnInit {

  cartState: ChartItem;
  details: Shirt;
  id: number;
  router: Router;
  route: ActivatedRoute;
  service: ShirtsService;
  loading: boolean;
  error: boolean;
  localStorageService: LocalStorageService;

  constructor (
    router: Router,
    service: ShirtsService,
    route: ActivatedRoute,
    localStorageService: LocalStorageService
  ) {

    this.router = router;
    this.service = service;
    this.route = route;
    this.localStorageService = localStorageService;
  }

  async fetchShirt() {
    this.error = false;
    this.loading = true;
    this.details = await this.service.fetchById(this.id);
    if (!this.details) {
      this.error = true;
    }
    this.loading = false;
  }
  addToCart() {
    this.cartState.number += 1;
    this.localStorageService.addToCart(this.details);
  }
  fetchStorage() {
    this.cartState = this.localStorageService.getCartItem(this.id);
    if (!this.cartState) {
      this.cartState = {
        item: this.details,
        number: 0
      };
    }
  }
  ngOnInit() {

    this.route.params.subscribe(async params => {
      this.id = +params['id'];
      await this.fetchShirt();
      this.fetchStorage();

    });
  }
  navigateToList() {
    this.router.navigate(['/shirts']);
  }
  navigateToCart() {
    this.router.navigate(['/cart']);
  }
}
