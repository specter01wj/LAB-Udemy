
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {

	name = "James Wang";

	// courses = ["course1", "course2", "course3"];
	courses = [];
  imageUrl = "http://lorempixel.com/400/200/";
  colspan_2 = 2;
  colspan_6 = 6;
  isActive = false;

  onSuccess($event) {
    $event.stopPropagation();
    console.log("On Success!");
  }

  onDivClicked() {
    console.log("On Div!");
  }

  toggleWarning() {
    this.isActive = !this.isActive;
  }

	getTitle() {
		return this.name;
	}

  constructor(service: CoursesService) { 
  	// let service = new CoursesService();
  	this.courses = service.getCourses();
  }

  ngOnInit() {
  }

}
