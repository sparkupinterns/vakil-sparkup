import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-proprietorship',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './proprietorship.component.html',
  styleUrl: './proprietorship.component.scss'
})
export class ProprietorshipComponent {


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


  gstForm!: FormGroup; // Notice the '!' indicating definite assignment

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.gstForm = this.fb.group({
      businessName: ['', Validators.required],
      businessType: ['', Validators.required],
      annualTurnover: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      gstin: ['', Validators.pattern('^[0-9]{15}$')],
      address: [''],
      contactPerson: [''],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactPhone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  onSubmit() {
    if (this.gstForm.valid) {
      // Handle form submission
      console.log(this.gstForm.value);
    } else {
     
      this.gstForm.markAllAsTouched();
    }
  }

  tocItems = [
    { id: 'h0', title: 'What is a Sole Proprietorship?' },
    { id: 'h1', title: 'How to Check Proprietorship Status?' },
    { id: 'h2', title: 'Advantages of Sole Proprietorship Firm Registration?' },
    { id: 'h3', title: 'Challenges of Sole Proprietorship Firms' },
    { id: 'h4', title: 'Essential Documents for Proprietorship Firm Registration' },
    { id: 'h5', title: 'How to Register a Sole Proprietorship Firm in India' },
    { id: 'h6', title: 'SME Registration Process for Sole Proprietorship' },
    { id: 'h7', title: 'SMGST Registration Process in India' },
    { id: 'h8', title: 'Penalty for not obtaining GST registration' }
  ];
  selectedSectionId = 'h0'; 
  
  selectSection(id: string) {
    this.selectedSectionId = id;
  }


}
