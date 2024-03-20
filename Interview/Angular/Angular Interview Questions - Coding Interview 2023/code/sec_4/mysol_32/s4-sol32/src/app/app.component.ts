import { ChangeDetectorRef, Component, OnInit, ViewRef, inject } from '@angular/core';
import { UsersService } from './service/users.service';
import { ActivatedRoute } from '@angular/router';
import { Subject, filter, map, takeUntil } from 'rxjs';

const getPageParams = () => {
  return inject(ActivatedRoute).queryParams.pipe(
    filter((params) => params['page']),
    map((params) => params['page']),
  );
};

const onDestroy = () => {
  const destroy$ = new Subject<void>();
  const viewRef = inject(ChangeDetectorRef) as ViewRef;

  viewRef.onDestroy(() => {
    destroy$.next();
    destroy$.complete();
  });
  return destroy$;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 's4-sol5';
  userService = inject(UsersService);
  page$ = getPageParams();
  destroy$ = onDestroy();

  // constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService
      .getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (users) => {
          console.log('users', users);
        }
      });
  }



}
