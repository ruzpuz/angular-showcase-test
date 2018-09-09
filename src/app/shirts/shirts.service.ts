import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Shirt} from './shirt.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class ShirtsService {
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
  async fetchById(id) {
    try {
      const response = <Array<Shirt>>(await this.http.get('http://mock-shirt-backend.getsandbox.com/shirts').toPromise());
      return response.find(element => {
        return id === element.id;
      });
    } catch (error) {
      return null;
    }
  }
}
