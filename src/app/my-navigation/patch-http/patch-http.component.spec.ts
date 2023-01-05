import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchHttpComponent } from './patch-http.component';

describe('PatchHttpComponent', () => {
  let component: PatchHttpComponent;
  let fixture: ComponentFixture<PatchHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
