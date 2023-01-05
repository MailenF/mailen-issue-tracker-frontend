import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../../config/user.service';
import { ConfigService } from '../../config/config.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent implements OnInit {
  userId: any;
  constructor(
    private userService: UserService,
    private ticketErrorService: ConfigService
  ) {}

  ngOnInit(): void {}
  deleteUser(): void {
    Swal.fire({
      title: 'Do you want to elimite this ticket?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Eliminate',
      denyButtonText: `Don't elimite`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.userId = this.userService.user.id;
        this.ticketErrorService.deleteUser(this.userId).subscribe();
        this.userService.deleteUser(this.userId).subscribe(() => {
          Swal.fire('Saved!', '', 'success');
          this.userService.timedRefresh(1000);
        });
      } else if (result.isDenied) {
        Swal.fire('Ticket is not elimined', '', 'info');
      }
    });
  }
}
// this.userService.deleteUser(this.userId).subscribe(
