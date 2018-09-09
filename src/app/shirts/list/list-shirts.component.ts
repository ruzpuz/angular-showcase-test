import {Component, Injectable, OnInit } from '@angular/core';
import { ShirtsService } from '../shirts.service';
import { Router } from '@angular/router';

import { Shirt } from '../shirt.model';

@Component({
  selector: 'app-shirts',
  templateUrl: './list-shirts.component.html',
  styleUrls: ['./list-shirts.component.css'],
  providers: [ ShirtsService ]
})

@Injectable({ providedIn: 'root' })
export class ListShirtsComponent implements  OnInit {
  router: Router;
  service: ShirtsService;
  shirts: Shirt[];
  error: boolean;
  loading: boolean;
  sizeFilter: string;
  colorFilter: string;
  availableSizes: string[];
  availableColors: string[];

  constructor(
    service: ShirtsService,
    router: Router
  ) {
    this.router = router;
    this.service = service;
    this.shirts = [];
    this.error = false;
    this.loading = true;
    this.sizeFilter = null;
    this.availableSizes = [];
  }
  async fetchShirts() {
    this.loading = true;
    this.error = false;

    const result = <Array<Shirt>> await this.service.fetchShirts();
    if (!result) {
      this.error = true;
    } else {
      this.shirts = result;
    }
    this.availableSizes = this.shirts.map(item => {
      return item.size;
    }).filter((item, index, self) => {
      return self.indexOf(item) === index;
    });
    this.availableColors = this.shirts.map(item => {
      return item.colour;
    }).filter((item, index, self) => {
      return self.indexOf(item) === index;
    });

    this.loading = false;
  }
  async ngOnInit() {
   this.fetchShirts();
  }
  navigateTo(id) {
    this.router.navigate(['/shirts', id]);
  }
}
