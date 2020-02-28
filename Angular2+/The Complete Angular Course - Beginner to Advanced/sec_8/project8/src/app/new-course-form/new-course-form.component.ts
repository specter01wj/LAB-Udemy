import { Component, OnInit } from '@angular/core';

import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.less']
})
export class NewCourseFormComponent implements OnInit {

	form = new FormGroup({
		topics: new FormArray([])
	});

  constructor() { }

  ngOnInit() {
  }

  addTopic(topic: HTMLInputElement) {
  	(this.form.get('topics') as FormArray).push(new FormControl(topic.value));
  	topic.value = '';
  }

}
