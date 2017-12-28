import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    if (this.loginForm.valid) {
      // console.log(this.loginForm.value);
      this.authService.userLogin(this.loginForm.value).subscribe(data => {
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
