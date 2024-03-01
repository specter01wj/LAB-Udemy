import { Component } from '@angular/core';
import { Article } from './model/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 's4-sol15';

  article: Article | null = { id: '101', title: 'Lead' }






}
