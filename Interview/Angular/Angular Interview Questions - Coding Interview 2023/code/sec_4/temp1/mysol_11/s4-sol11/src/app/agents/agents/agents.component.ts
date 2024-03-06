import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrl: './agents.component.scss'
})
export class AgentsComponent {
  data$ = interval(1000);



}
