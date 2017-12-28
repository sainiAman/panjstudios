import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user.model';
// import {User} from '../models/user.model';
// import {Observable} from 'rxjs/Observable';


@Injectable()
export class UsersService{

  constructor(private http: HttpClient) { }

  addUser(user) {
    // console.log(user);
    let body = JSON.stringify(user);
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    const URL = "http://localhost:5000/api/v1/user/registration";

    return this.http.post(URL, body, {headers: headers}).map(res => console.log(res))
  }

  userLogin(user) {
    const URL = "http://localhost:5000/api/v1/user/login";
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    let body = JSON.stringify(user);

    return this.http.post(URL, body, {headers: headers}).map(res => res);
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') == null;
  }
}
