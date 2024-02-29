import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 's4-sol14';
  user$ = new BehaviorSubject<User[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.isLoading$.next(true);
    this.http.get<User[]>('http://localhost:3004/users')
      .subscribe({
        next: (users) => {
          this.user$.next(users);
          this.isLoading$.next(false);
        }
      })
  }


}
