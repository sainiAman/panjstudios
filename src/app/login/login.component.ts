import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private usersService: UsersService, private router: Router) { }

  onSubmit() {
    if (this.loginForm.valid) {
      // console.log(this.loginForm.value);
      this.usersService.userLogin(this.loginForm.value).subscribe(data => {
        localStorage.setItem('token', data['token']);
        this.router.navigateByUrl('/');
      });
      this.loginForm.reset();
    }
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(
        null,
        [
          Validators.required
        ]
      ),
      password: new FormControl(
        null,
        [
          Validators.required
        ]
      )
    })
  }

}
