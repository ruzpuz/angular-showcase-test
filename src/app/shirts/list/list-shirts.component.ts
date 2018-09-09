import {Component, Injectable, OnInit} from '@angular/core';
import { ListShirtsService } from './list-shirts.service';

class Shirt {
  id: number;
  colour: string;
  name: string;
  size: string;
  picture: string;
  price: number;
  quantity: number;
}

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
  filterBySize: string;
  availableSizes: string[];

  constructor(
    service: ListShirtsService
  ) {
    this.service = service;
    this.shirts = [];
    this.error = false;
    this.loading = true;
    this.filterBySize = null;
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
    console.log(this.availableSizes);
    this.loading = false;
  }
  async ngOnInit() {
   this.fetchShirts();
  }
  filterShirts(): Shirt[] {
    if (this.filterBySize) {
      return this.shirts.filter(item => {
        return item.size === this.filterBySize;
      });
    }
  }
}
