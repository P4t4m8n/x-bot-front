import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { IUserAuthSignup } from '../../types/auth.type';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  standalone: true,
})
export class SignupComponent {
  private readonly authService = inject(AuthService);
  signupForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
  });

  onSubmitSignup() {
    console.log(this.signupForm.value);
    const dto: IUserAuthSignup = {
      email: this.signupForm.value.email || '',
      password: this.signupForm.value.password || '',
      firstName: this.signupForm.value.firstName || '',
      lastName: this.signupForm.value.lastName || '',
    };
    this.authService.signup(dto).subscribe();
  }
}
