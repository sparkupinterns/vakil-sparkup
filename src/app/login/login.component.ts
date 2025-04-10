import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-login',
  standalone: true, // Mark as standalone component
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {



  isLoginVisible = true; // Define the visibility property
  mobileNumber: string = ''; // Define the mobile number for ngModel

  closeLogin() {
    this.isLoginVisible = false; // Close the login form when called
  }
  isModalOpen: boolean = false;


  toggleLoginModal(): void {
    this.isModalOpen = !this.isModalOpen;  // Toggle modal visibility
  }

  continueRegistration(): void {
    // Handle mobile number verification and registration logic here
    console.log('Mobile Number Submitted:', this.mobileNumber);
    // Reset input field
    this.mobileNumber = '';
  }

}
