import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetHttpComponent } from './my-navigation/get-http/get-http.component';
import { GetIdHttpComponent } from './my-navigation/get-id-http/get-id-http.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'get-all', component: GetHttpComponent },
  { path: 'get-by-id', component: GetIdHttpComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
