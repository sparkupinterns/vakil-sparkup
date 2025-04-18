import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-gst-filling',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './gst-filling.component.html',
  styleUrl: './gst-filling.component.scss'
})
export class GstFillingComponent {

  formData = {
    gstNumber: '',
    businessName: '',
    turnover: null,
    businessType: 'service',
    contactEmail: '',
    phoneNumber: '',
    address: ''
  };

  onSubmit() {
    console.log('Form Submitted:', this.formData);
 
  }

  formVisible: boolean = true; 
  thankYouVisible: boolean = false; 
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
    this.thankYouVisible = false; // Hide the thank you message when toggling the form
  }

  // Subscribe function
  subscribe() {
    // Validate phone number and email
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

    // Hide form and show the thank you message after subscription
    this.formVisible = false;
    this.thankYouVisible = true;
  }

}
