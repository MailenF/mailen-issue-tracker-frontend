import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavigationComponent } from './my-navigation/my-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { GetHttpComponent } from './my-navigation/get-http/get-http.component';
import { PostHttpComponent } from './my-navigation/post-http/post-http.component';
import { PatchHttpComponent } from './my-navigation/patch-http/patch-http.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DeleteHttpComponent } from './my-navigation/delete-http/delete-http.component';
import { MatDividerModule } from '@angular/material/divider';
import { GetIdHttpComponent } from './my-navigation/get-id-http/get-id-http.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogTicketComponent } from './dialog-ticket/dialog-ticket.component';
import { CardTicketComponent } from './card-ticket/card-ticket.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DialogCreateTicketComponent } from './dialog-create-ticket/dialog-create-ticket.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsStatesComponent } from './projects-states/projects-states.component';
import { TicketProjectComponent } from './projects-states/ticket-project/ticket-project.component';
import { PostProjectComponent } from './projects/post-project/post-project.component';
import { UsersComponent } from './users/users.component';
import { MatCardModule } from '@angular/material/card';
import { PostUserComponent } from './users/post-user/post-user.component';
import { ButtonCreateComponent } from './button-create/button-create.component';
import { DialogUserComponent } from './users/dialog-user/dialog-user.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { PatchUserComponent } from './users/patch-user/patch-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavigationComponent,
    GetHttpComponent,
    PostHttpComponent,
    PatchHttpComponent,
    DeleteHttpComponent,
    GetIdHttpComponent,
    DialogTicketComponent,
    CardTicketComponent,
    DialogCreateTicketComponent,
    ProjectsComponent,
    ProjectsStatesComponent,
    TicketProjectComponent,
    PostProjectComponent,
    UsersComponent,
    PostUserComponent,
    ButtonCreateComponent,
    DialogUserComponent,
    DeleteUserComponent,
    PatchUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSelectModule,
    MatDialogModule,
    MatGridListModule,
    DragDropModule,
    MatCardModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
