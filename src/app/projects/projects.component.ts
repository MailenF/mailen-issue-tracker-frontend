import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../config/projects.service';
import { DialogCreateTicketComponent } from '../dialog-create-ticket/dialog-create-ticket.component';
import { PostProjectComponent } from './post-project/post-project.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: any;
  vista = true;
  constructor(private service: ProjectsService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.service.getAllProjects().subscribe((data: any) => {
      console.log(data);
      this.projects = data;
      console.log(this.projects);
    });
  }
}
