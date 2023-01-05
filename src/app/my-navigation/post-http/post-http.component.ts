import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ConfigService } from '../../config/config.service';
import { ProjectsService } from '../../config/projects.service';
import { DateTime } from 'luxon';
import { UserService } from '../../config/user.service';

@Component({
  selector: 'app-post-http',
  templateUrl: './post-http.component.html',
  styleUrls: ['./post-http.component.css'],
})
export class PostHttpComponent implements OnInit {
  form: FormGroup;
  projects: any;
  users: any;
  localDatetime: any;

  constructor(
    private configService: ConfigService,
    private projectService: ProjectsService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      id: null,
      typeError: ['', Validators.required],
      descriptionError: ['', Validators.required],
      reportedBy: ['', Validators.required],
      date: DateTime.now().toLocaleString(),
      state: ['', Validators.required],
      project: ['', Validators.required],
      userReported: ['', Validators.required],
      UserAssigned: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe((data: any) => {
      this.projects = data;
    });
    this.userService.getAllUsers().subscribe((data: any) => {
      this.users = data;
    });
    this.localDatetime = DateTime.local();
  }

  createTiket(): void {
    const ticket = {
      id: this.form.value.id,
      typeError: this.form.value.typeError,
      descriptionError: this.form.value.descriptionError,
      reportedBy: this.form.value.reportedBy,
      date: this.form.value.date,
      state: this.form.value.state,
      project: this.form.value.project,
      userReported: this.form.value.userReported,
      UserAssigned: this.form.value.UserAssigned,
    };
    this.configService.addTicket(ticket).subscribe(() => console.log(ticket));
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
