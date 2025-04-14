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
      // Mark all fields as touched to display validation errors
      this.gstForm.markAllAsTouched();
    }
  }

  tocItems = [
    { id: 'h0', title: 'Who can opt for Sole Proprietorship?' },
    { id: 'h1', title: 'Advantages of Sole Proprietorship' },
    { id: 'h2', title: 'Disadvantages of Sole Proprietorship' },
    { id: 'h3', title: 'Registration of Sole Proprietorship' },
    { id: 'h4', title: 'Documents Required for Sole Proprietorship' },
    { id: 'h5', title: 'Checklist required for Sole Proprietorship' },
    { id: 'h6', title: 'What are the Compliances required?' },
    { id: 'h7', title: 'Timelines for Sole Proprietorship Registration' },
    { id: 'h8', title: 'Penalty for not obtaining GST registration' }
  ];
  selectedSectionId = 'h0'; // default content shown
  
  selectSection(id: string) {
    this.selectedSectionId = id;
  }


}
