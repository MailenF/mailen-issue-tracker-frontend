import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../interfaces/ticket';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  configUrl = 'http://localhost:8080/ticket-error';
  ticket: any;
  constructor(private http: HttpClient) {}

  getAllTickets(): any {
    return this.http.get<Ticket>(this.configUrl);
  }

  getTicketById(id: number): any {
    const configUrl = `http://localhost:8080/ticket-error/${id}`;
    return this.http.get<Ticket>(configUrl);
  }

  getTicketByProject(projectId: string): any {
    const configUrl = `http://localhost:8080/ticket-error/project/${projectId}`;
    return this.http.get<Ticket>(configUrl);
  }

  addTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.configUrl, ticket);
  }

  deleteTicket(id: number): Observable<unknown> {
    const url = `${this.configUrl}/${id}`;
    return this.http.delete(url);
  }

  deleteUser(id: number): Observable<unknown> {
    const configUrl = `http://localhost:8080/ticket-error/user/${id}`;
    return this.http.delete(configUrl);
  }

  patchTicket(ticket: any): any {
    const configUrl = `http://localhost:8080/ticket-error/status/${ticket.id}`;
    return this.http.patch<Ticket>(configUrl, ticket);
  }

  timedRefresh(time: number): void {
    setTimeout('location.reload(true);', time);
  }

  ticketId(ticket: string): void {
    this.ticket = ticket;
  }
}
