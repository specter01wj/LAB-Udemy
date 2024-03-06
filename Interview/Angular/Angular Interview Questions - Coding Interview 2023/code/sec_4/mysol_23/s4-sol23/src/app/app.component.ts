import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 's4-sol23';


  constructor(
    private http: HttpClient
  ) {}


  ngOnInit(): void {
      this.http.get('http://localhost:3004/users').subscribe();
  }

}
