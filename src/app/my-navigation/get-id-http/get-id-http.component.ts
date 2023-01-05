import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from '../../interfaces/ticket';
import { ConfigService } from '../../config/config.service';
import { DialogTicketComponent } from '../../dialog-ticket/dialog-ticket.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-get-id-http',
  templateUrl: './get-id-http.component.html',
  styleUrls: ['./get-id-http.component.css'],
})
export class GetIdHttpComponent implements OnInit {
  form: FormGroup;
  ticketId: Ticket[] = [];
  constructor(
    private configService: ConfigService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  getTicketById(): void {
    const id = this.form.value.id;
    this.configService.getTicketById(id).subscribe((data: Ticket) => {
      console.log(data);
      this.ticketId.push(data);
    });
  }
  openDialog(ticket: any): void {
    this.configService.ticketId(ticket);
    const dialogRef = this.dialog.open(DialogTicketComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
