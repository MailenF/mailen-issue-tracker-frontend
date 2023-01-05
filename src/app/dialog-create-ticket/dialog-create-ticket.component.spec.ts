import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateTicketComponent } from './dialog-create-ticket.component';

describe('DialogCreateTicketComponent', () => {
  let component: DialogCreateTicketComponent;
  let fixture: ComponentFixture<DialogCreateTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
