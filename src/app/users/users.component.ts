import { Component, OnInit } from '@angular/core';
import { PostProjectComponent } from '../projects/post-project/post-project.component';
import { MatDialog } from '@angular/material/dialog';
import { PostUserComponent } from './post-user/post-user.component';
import { UserService } from '../config/user.service';
import { User } from '../interfaces/user';
import { DialogUserComponent } from './dialog-user/dialog-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(public dialog: MatDialog, private userService: UserService) {}
  users: any;
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users: User) => {
      this.users = users;
      console.log(this.users);
    });
  }
  openDialog(user: any): void {
    this.userService.userId(user);
    const dialogRef = this.dialog.open(DialogUserComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
