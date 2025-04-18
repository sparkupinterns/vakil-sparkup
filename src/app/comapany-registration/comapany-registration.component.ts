import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-comapany-registration',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './comapany-registration.component.html',
  styleUrl: './comapany-registration.component.scss'
})
export class ComapanyRegistrationComponent {

  activeTab: string = 'Business Registration'; // Default active tab

  // Method to set the active tab
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  selectedLanguage: string = 'en';  // Default to English

  // Method to change language
  onLanguageChange() {
    console.log(`Language changed to: ${this.selectedLanguage}`);
  }

  // Dynamic label for the email field
  getEmailLabel(): string {
    switch (this.selectedLanguage) {
      case 'fr':
        return 'E-mail';
      case 'es':
        return 'Correo Electrónico';
      default:
        return 'Email';
    }
  }

  // Dynamic label for the message field
  getMessageLabel(): string {
    switch (this.selectedLanguage) {
      case 'fr':
        return 'Message';
      case 'es':
        return 'Mensaje';
      default:
        return 'Message';
    }
  }
  submitButtonText(): string {
    switch (this.selectedLanguage) {
      case 'fr':
        return 'Envoyer';
      case 'es':
        return 'Enviar';
      default:
        return 'Submit';
    }
  }

  onSubmit() {
    alert('Form submitted!');
  }

   scheduleConsultation() {
    alert("Thank you for scheduling a consultation! Our team will contact you soon.");
  }
}
