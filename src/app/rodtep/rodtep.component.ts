import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rodtep',
  imports: [FormsModule, CommonModule],
  templateUrl: './rodtep.component.html',
  styleUrl: './rodtep.component.scss'
})
export class RodtepComponent {

  formVisible: boolean = true; // Form section is always visible now
  thankYouVisible: boolean = false; // Initially, the thank you section is hidden
  user = {
    name: '',
    phoneNumber: '',
    email: ''
  };
  phoneError: string = '';
  emailError: string = '';

  // Toggle form visibility
  toggleForm() {
    this.formVisible = !this.formVisible;
    this.thankYouVisible = false; 
  }

  // Subscribe function
  subscribe() {

    if (!this.user.name || !this.user.phoneNumber || !this.user.email) {
      if (!this.user.phoneNumber) {
        this.phoneError = 'Phone number is required';
      } else {
        this.phoneError = '';
      }
      if (!this.user.email) {
        this.emailError = 'Email is required';
      } else {
        this.emailError = '';
      }
      return;
    }

 
    this.formVisible = false;
    this.thankYouVisible = true;
  }
}
