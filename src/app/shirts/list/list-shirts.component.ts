import {Component, Injectable, OnInit } from '@angular/core';
import { ListShirtsService } from './list-shirts.service';

import { Shirt } from './shirt.model';

@Component({
  selector: 'app-shirts',
  templateUrl: './list-shirts.component.html',
  styleUrls: ['./list-shirts.component.css'],
  providers: [ ListShirtsService ]
})

@Injectable({ providedIn: 'root' })
export class ListShirtsComponent implements  OnInit {
  service: ListShirtsService;
  shirts: Shirt[];
  error: boolean;
  loading: boolean;
  sizeFilter: string;
  colorFilter: string;
  availableSizes: string[];
  availableColors: string[];

  constructor(
    service: ListShirtsService
  ) {
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
  transform() {

  }
}
