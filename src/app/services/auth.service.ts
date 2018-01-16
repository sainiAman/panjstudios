import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user.model';
// import {User} from '../models/user.model';
// import {Observable} from 'rxjs/Observable';


@Injectable()
export class AuthService{

  constructor(private http: HttpClient) { }

  // addUser(user) {
  //   // console.log(user);
  //   let body = JSON.stringify(user);
  //   let headers = new HttpHeaders({'Content-Type': 'application/json'});
  //   const URL = "http://localhost:5000/api/v1/users/registration";
  //
  //   return this.http.post(URL, body, {headers: headers}).subscribe(res => {
  //     console.log(res);
  //     localStorage.setItem('token', res['token']);
  //   })
  // }

  userRegister(registerData) {
    const URL = "http://localhost:5000/api/v1/users/registration";
    this.http.post(URL, registerData).subscribe(res => {
      console.log(res);})
  }

  userLogin(loginData) {
    const URL = "http://localhost:5000/api/v1/users/login";
    this.http.post(URL, loginData).subscribe(res => {
      console.log(res);
      localStorage.setItem('token', res['token'])
    })
  }

  getToken() {
    return localStorage.getItem('token')
  }

  // userLogin(user) {
  //   const URL = "http://localhost:5000/api/v1/users/login";
  //   let headers = new HttpHeaders({'Content-Type': 'application/json'});
  //   let body = JSON.stringify(user);
  //   return this.http.post(URL, body, {headers: headers}).map(res => res);
  // }


  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') == null;
  }
  isNotLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
}
