import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ms_product } from '.';

@Injectable()
export class ProductService {

  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<ms_product[]>(`${this.url}/Product`);
  }

  getById(id: number): Observable<ms_product> {
    return this.http.get<ms_product>(`${this.url}/Product/byId/${id}`);
  }

  post(form: any) {
    return this.http.post(`${this.url}/Product/create`, form);
  }

  put(form: any) {
    return this.http.put(`${this.url}/Product/update`, form);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/Product/${id}`);
  }

  upload(file: File): Observable<any> {
    const formData = new FormData();
    formData.append(file.name, file);
    return this.http.post(`${this.url}/Product/uploadImage`, formData);
  }

}
