
import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {UsersService} from './users.service';


@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private usersService: UsersService) {}

  canActivate() {
    return this.usersService.isLoggedIn();
  }
}
