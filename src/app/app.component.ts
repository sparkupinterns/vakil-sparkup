import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonEngine } from '@angular/ssr/node';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'spark-advocate';

  isLoginVisible = false; // Initially, the login form is hidden
  mobileNumber: string = ''; // Bind the input field to this property

  // Method to toggle the login modal visibility
  toggleLoginModal(): void {
    this.isLoginVisible = !this.isLoginVisible;
  }

  // Method to handle mobile number verification
  continueRegistration(): void {
    console.log('Mobile Number Submitted:', this.mobileNumber);
    // Perform any action like sending OTP or verifying the number
    // Reset input field
    this.mobileNumber = '';
  }

  // Method to close the login form
  closeLogin(): void {
    this.isLoginVisible = false;
  }
}