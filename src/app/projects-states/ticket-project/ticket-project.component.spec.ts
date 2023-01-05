import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketProjectComponent } from './ticket-project.component';

describe('TicketProjectComponent', () => {
  let component: TicketProjectComponent;
  let fixture: ComponentFixture<TicketProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
