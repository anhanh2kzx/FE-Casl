import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from './constant';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getListUser(): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}/users`).pipe();
  }

  getListRole(): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}/roles`).pipe();
  }
}
