import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
  standalone: true,
})
export class SigninComponent {
  signinForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),

    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmitSignin() {
    console.log(this.signinForm.value);
  }
}
