import { Component, OnInit } from '@angular/core';
import { PostUserComponent } from '../users/post-user/post-user.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateTicketComponent } from '../dialog-create-ticket/dialog-create-ticket.component';
import { PostProjectComponent } from '../projects/post-project/post-project.component';

@Component({
  selector: 'app-button-create',
  templateUrl: './button-create.component.html',
  styleUrls: ['./button-create.component.css'],
})
export class ButtonCreateComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialogUser(): void {
    const dialogRef = this.dialog.open(PostUserComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogTicket(): void {
    const dialogRef = this.dialog.open(DialogCreateTicketComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogProject(): void {
    const dialogRef = this.dialog.open(PostProjectComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
