import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '.';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<UserModel[]>('http://localhost:8080/User');
  }

  create(form: UserModel) {
    return this.http.post<UserModel>('http://localhost:8080/User', form);
  }

  update(form: UserModel) {
    return this.http.put<UserModel>('http://localhost:8080/User', form);
  }

  delete(id: number) {
    return this.http.delete<UserModel[]>(`http://localhost:8080/User/${id}`);
  }

}
