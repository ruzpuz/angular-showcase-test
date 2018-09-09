import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class ListShirtsService {
  constructor(
    private http: HttpClient
  ) { }
  async fetchShirts()  {
    try {
      return await this.http.get('http://mock-shirt-backend.getsandbox.com/shirts').toPromise();
    } catch (error) {
      return null;
    }
  }
}
