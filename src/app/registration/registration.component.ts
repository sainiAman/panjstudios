import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { User } from '../models/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;


  constructor(private authService: AuthService) { }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.authService.addUser(this.registrationForm.value).subscribe(value => console.log(value));
      this.registrationForm.reset();
    }
  }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      firstname: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(12)
        ]
      ),
      lastname: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(12)
        ]
      ),
      email: new FormControl(
        null,
        [
          Validators.required,
          Validators.maxLength(50)
        ]
      ),
      password: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50)
        ]
      )
    });
  }
}
