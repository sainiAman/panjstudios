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
export class RegistrationService{

  constructor(private http: HttpClient) { }

  addUser(user) {
    // console.log(user);
    const body = JSON.stringify(user);
    const URL = "http://localhost:5000/api/v1/registration";
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(URL, body, {headers: headers}).map(res => console.log(res))
  }
}
