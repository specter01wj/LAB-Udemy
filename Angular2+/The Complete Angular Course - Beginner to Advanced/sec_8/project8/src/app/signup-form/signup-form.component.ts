import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.less']
})
export class SignupFormComponent implements OnInit {

	form = new FormGroup({
		// username: new FormControl('', Validators.required),
		username: new FormControl('', [
			Validators.required,
			Validators.minLength(3),
			UsernameValidators.cannotContainSpace
		]),
		password: new FormControl('', Validators.required)
	});

  constructor() { }

  ngOnInit() {
  }

  get username() {
  	return this.form.get('username');
  }

}
