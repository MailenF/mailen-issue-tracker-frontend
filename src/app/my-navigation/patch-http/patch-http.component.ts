import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from '../../interfaces/ticket';
import { ConfigService } from '../../config/config.service';
import Swal from 'sweetalert2';
import { UserService } from '../../config/user.service';

@Component({
  selector: 'app-patch-http',
  templateUrl: './patch-http.component.html',
  styleUrls: ['./patch-http.component.css'],
})
export class PatchHttpComponent implements OnInit {
  form: FormGroup;
  ticketId: any;
  userId: any;

  constructor(
    private configService: ConfigService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      descriptionError: ['', Validators.required],
      state: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.ticketId = this.configService.ticket.id;
    this.configService
      .getTicketById(this.ticketId)
      .subscribe((data: Ticket) => {
        this.form.patchValue({
          descriptionError: data.descriptionError,
          state: data.state,
        });
      });
  }

  updateTicket(): void {
    const ticket = {
      id: this.ticketId,
      descriptionError: this.form.value.descriptionError,
      state: this.form.value.state,
    };
    this.configService.patchTicket(ticket).subscribe((updateData: any) => {
      console.log(updateData);
    });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your ticket has been updated',
      showConfirmButton: false,
      timer: 2000,
    });
    this.configService.timedRefresh(1000);
  }
}
