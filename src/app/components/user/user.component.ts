import { Component } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  users: UserModel[] = []
  constructor(
    private usersService: UsersService
   ) { }
  
  getUsers(): void {
    this.usersService.getUsers()
      .subscribe(users => this.users = users)
  }

  ngOnInit() {
    this.getUsers()
  }

}
