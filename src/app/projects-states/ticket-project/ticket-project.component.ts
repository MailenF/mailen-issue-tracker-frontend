import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Ticket } from '../../interfaces/ticket';
import { ConfigService } from '../../config/config.service';
import { DialogTicketComponent } from '../../dialog-ticket/dialog-ticket.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ticket-project',
  templateUrl: './ticket-project.component.html',
  styleUrls: ['./ticket-project.component.css'],
})
export class TicketProjectComponent implements OnChanges {
  tickets: any;
  ticket: any;
  @Input() projecto: any;

  constructor(private configService: ConfigService, public dialog: MatDialog) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.configService
      .getTicketByProject(this.projecto)
      .subscribe((ticket: Ticket) => {
        console.log(ticket);
        this.tickets = ticket;
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
