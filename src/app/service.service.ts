import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import {UsersComponent} from './users/users.component';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  users:any;
  url = "../assets/data.JSON"

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get(this.url);
  }

}
