import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private http: Http) {
  }

  getOrders() {
    let headers = new Headers();
    let token = localStorage.getItem('token');
    headers.append('Authorization', 'Bearer ' + token);

    return this.http.get('/api/orders')
      .map(response => response.json());
  }
}
