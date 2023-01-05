import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  configUrl = 'http://localhost:8080/projects';
  constructor(private http: HttpClient) {}

  getAllProjects(): any {
    return this.http.get<Project>(this.configUrl);
  }

  createProject(project: Project): any {
    return this.http.post<Project>(this.configUrl, project);
  }

  timedRefresh(time: number): void {
    setTimeout('location.reload(true);', time);
  }
}
