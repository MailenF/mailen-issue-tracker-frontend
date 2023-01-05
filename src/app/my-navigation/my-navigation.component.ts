import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateTicketComponent } from '../dialog-create-ticket/dialog-create-ticket.component';

@Component({
  selector: 'app-my-navigation',
  templateUrl: './my-navigation.component.html',
  styleUrls: ['./my-navigation.component.css'],
})
export class MyNavigationComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog
  ) {}
}
