import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 's4-sol5';

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
      this.userService.getUsers().subscribe({
        next: (users) => {
          console.log('users', users);
        }
      });
  }



}
