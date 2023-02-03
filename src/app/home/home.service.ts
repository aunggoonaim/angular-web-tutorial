import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ms_product } from '../master/product';

@Injectable()
export class HomeService {

  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<ms_product[]>(`${this.url}/Product`);
  }

}
