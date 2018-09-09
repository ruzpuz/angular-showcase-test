import {Component, Injectable, OnInit } from '@angular/core';
import { ShirtsService } from '../shirts.service';
import { Shirt } from '../shirt.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shirt-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ ShirtsService ]
})
@Injectable({ providedIn: 'root' })
export class DetailsComponent implements  OnInit {

  details: Shirt;
  id: number;
  router: Router;
  route: ActivatedRoute;
  service: ShirtsService;
  loading: boolean;
  error: boolean;

  constructor (
    router: Router,
    service: ShirtsService,
    route: ActivatedRoute
  ) {
    this.router = router;
    this.service = service;
    this.route = route;
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
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.fetchShirt();
    });

  }
}
