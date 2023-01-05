import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../config/config.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-http',
  templateUrl: './delete-http.component.html',
  styleUrls: ['./delete-http.component.css'],
})
export class DeleteHttpComponent implements OnInit {
  ticketId: any;
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {}

  deleteTicket(): void {
    Swal.fire({
      title: 'Do you want to elimite this ticket?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Eliminate',
      denyButtonText: `Don't elimite`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ticketId = this.configService.ticket.id;
        this.configService.deleteTicket(this.ticketId).subscribe(() => {
          Swal.fire('Saved!', '', 'success');
          this.configService.timedRefresh(1000);
        });
      } else if (result.isDenied) {
        Swal.fire('Ticket is not elimined', '', 'info');
      }
    });
  }
}
