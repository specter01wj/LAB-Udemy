import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../types/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('http://localhost:3004/users');
  }
}
