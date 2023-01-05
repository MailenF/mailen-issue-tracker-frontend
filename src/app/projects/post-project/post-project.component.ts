import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProjectsService } from '../../config/projects.service';

@Component({
  selector: 'app-post-project',
  templateUrl: './post-project.component.html',
  styleUrls: ['./post-project.component.css'],
})
export class PostProjectComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private configService: ProjectsService
  ) {
    this.form = this.formBuilder.group({
      id: null,
      project: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  createProject(): void {
    const project = {
      id: this.form.value.id,
      project: this.form.value.project,
    };
    this.configService
      .createProject(project)
      .subscribe(() => console.log(project));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your ticket has been saved',
      showConfirmButton: false,
      timer: 2000,
    });
    this.configService.timedRefresh(1000);
  }
}
