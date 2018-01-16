import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  private profile = [];
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
   let userId = this.route.snapshot.params.id;
    this.userService.getSingleUser(userId).subscribe(data => this.profile = data)
  }

}
