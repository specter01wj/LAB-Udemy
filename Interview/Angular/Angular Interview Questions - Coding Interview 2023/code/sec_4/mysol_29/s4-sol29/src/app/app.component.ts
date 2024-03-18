import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 's4-sol29';
  isSubmitted: boolean = false;

  registerForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
    this.registerForm.get('username')?.valueChanges.subscribe(value => {
      console.log('valueChanges', value);
    })
  }

  onSubmit(): void {
    this.isSubmitted = true;
    console.log('onSubmit', this.registerForm.value);
  }

}
