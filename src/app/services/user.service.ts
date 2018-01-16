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
    // let headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.get<any>(URL)
  }

  getSingleUser(userId) {
    const URL = 'http://localhost:5000/api/v1/users/';
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    console.log(headers);
    return this.http.get<any>(URL + userId, {headers: headers})
  }

  getProfile(id){
    const URL = 'http://localhost:5000/api/v1/users/' + id;

    return this.http.get(URL)
  }

  getUserId() {
    const URL = 'http://localhost:5000/api/v1/getUserId';
    return this.http.get(URL)
  }
}
