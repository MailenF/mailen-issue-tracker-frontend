import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIdHttpComponent } from './get-id-http.component';

describe('GetIdHttpComponent', () => {
  let component: GetIdHttpComponent;
  let fixture: ComponentFixture<GetIdHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetIdHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIdHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
