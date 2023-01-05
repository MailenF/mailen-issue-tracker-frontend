import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Ticket } from '../interfaces/ticket';
import { MatDialog } from '@angular/material/dialog';
import { DialogTicketComponent } from '../dialog-ticket/dialog-ticket.component';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-card-ticket',
  templateUrl: './card-ticket.component.html',
  styleUrls: ['./card-ticket.component.css'],
})
export class CardTicketComponent implements OnInit {
  tickets: any;
  ticket: any;

  @Input() state: 'to-do' | 'in-progress' | 'done' | 'review' | undefined;
  @Input() title = '';
  @Input() dragDrop = '';

  constructor(private configService: ConfigService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.configService.getAllTickets().subscribe((data: Ticket) => {
      this.ticket = data;
      this.tickets = this.ticket.filter((ticket: { state: string }) => {
        return ticket.state === this.state;
      });
      console.log(this.tickets);
    });
  }
  openDialog(ticket: any): void {
    this.configService.ticketId(ticket);
    const dialogRef = this.dialog.open(DialogTicketComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
