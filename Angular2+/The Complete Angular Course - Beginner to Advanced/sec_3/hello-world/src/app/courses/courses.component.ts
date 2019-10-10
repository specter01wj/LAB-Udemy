import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {

	name = "James Wang";

	courses = ["course1", "course2", "course3"];

	getTitle() {
		return this.name;
	}

  constructor() { }

  ngOnInit() {
  }

}
