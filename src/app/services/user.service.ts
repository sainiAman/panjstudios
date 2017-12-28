import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class UserService{

  constructor(private http: HttpClient) {}

  getAllUsers() {
    const URL = 'http://localhost:5000/api/v1/users';
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.get(URL,  {headers: headers}).map(res => res);
  }

}
