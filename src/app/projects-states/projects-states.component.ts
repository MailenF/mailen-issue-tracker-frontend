import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../config/config.service';
import { ProjectsService } from '../config/projects.service';

@Component({
  selector: 'app-projects-states',
  templateUrl: './projects-states.component.html',
  styleUrls: ['./projects-states.component.css'],
})
export class ProjectsStatesComponent implements OnInit {
  form: FormGroup;
  projects: any;
  vista = true;
  ticket: any;
  vistaTicket = false;
  @Output() vistaProjecto = new EventEmitter<boolean>();

  constructor(
    private configService: ConfigService,
    private service: ProjectsService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      project: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.service.getAllProjects().subscribe((data: any) => {
      this.projects = data;
    });
  }

  getProject(): void {
    this.vista = false;
    this.vistaProjecto.emit(this.vista);
    this.ticket = this.form.value.project;
    this.vistaTicket = true;
  }
}
