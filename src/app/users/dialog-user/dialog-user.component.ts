import { Component, OnInit } from '@angular/core';
import { UserService } from '../../config/user.service';
import { MatDialog } from '@angular/material/dialog';
import { PatchUserComponent } from '../patch-user/patch-user.component';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.css'],
})
export class DialogUserComponent implements OnInit {
  userId: any;
  user: any;
  photo: any;
  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.userId = this.userService.user.id;
    this.userService.getUserById(this.userId).subscribe((user: any) => {
      this.user = user;
      this.photo = user.photo;
      console.log(this.user);
    });
    console.log(this.userId);
  }

  patchUser(): void {
    const dialogRef = this.dialog.open(PatchUserComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
