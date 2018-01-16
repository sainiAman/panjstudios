import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import {tokenize} from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // private token: string;


  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  private id: any;

  getSingleProfile() {
      this.userService.getProfile(this.id).subscribe(res => {
        console.log(res);
        this.router.navigate(['/profile', this.id])
      })
  }
  ngOnInit() {
    this.userService.getUserId().subscribe(res => {
      this.id = res
    })
  }

}
