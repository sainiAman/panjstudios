import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }
  onLogout() {
    this.userService.logout();
    this.router.navigate(['/login'])
  }

  isLoggedIn() {
    return this.userService.isLoggedIn();
  }
  ngOnInit() {
  }

}
