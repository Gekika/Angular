import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registration.html',
})
export class RegistrationComponent {

  user = {
    name: '',
    email: '',
    password: ''
  };

  strongPwdPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Submitted:', this.user);
    }
  }
}