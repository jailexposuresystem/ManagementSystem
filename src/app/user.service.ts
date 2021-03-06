import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
userData;
  constructor(private httpClient : HttpClient) { }

  getUsers() {
    return this.httpClient.get<any>("http://localhost:8080/mngSys/getAllUsers")
  }
}
