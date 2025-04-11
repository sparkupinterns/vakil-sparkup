import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-login',
  standalone: true, // Mark as standalone component
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  mobileNumber: string = '';

  closeLogin() {
    this.visible = false;
    this.visibleChange.emit(false);
  }

  continueRegistration() {
    console.log('Submitted Mobile Number:', this.mobileNumber);
    this.mobileNumber = '';
    this.closeLogin();
  }
}
