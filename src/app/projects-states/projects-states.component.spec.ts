import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsStatesComponent } from './projects-states.component';

describe('ProjectsStatesComponent', () => {
  let component: ProjectsStatesComponent;
  let fixture: ComponentFixture<ProjectsStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsStatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
