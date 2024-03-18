import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 's4-sol29';
  isSubmitted: boolean = false;

  registerForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) {}


  onSubmit(): void {
    this.isSubmitted = true;
    console.log('onSubmit', this.registerForm.value);
  }

}
