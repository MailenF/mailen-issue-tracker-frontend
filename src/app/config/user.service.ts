import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../interfaces/ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  configUrl = 'http://localhost:8080/user';
  user: any;
  constructor(private http: HttpClient) {}

  getAllUsers(): any {
    return this.http.get<User>(this.configUrl);
  }
  getUserById(id: number): any {
    const configUrl = `http://localhost:8080/user/${id}`;
    return this.http.get<User>(configUrl);
  }
  createUser(user: User): any {
    return this.http.post<User>(this.configUrl, user);
  }

  patchUser(user: any): any {
    const configUrl = `http://localhost:8080/user/${user.id}`;
    return this.http.patch<Ticket>(configUrl, user);
  }

  deleteUser(id: number): Observable<unknown> {
    const url = `${this.configUrl}/${id}`;
    return this.http.delete(url);
  }

  timedRefresh(time: number): void {
    setTimeout('location.reload(true);', time);
  }

  userId(user: any): void {
    this.user = user;
  }
}
