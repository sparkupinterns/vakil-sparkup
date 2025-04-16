import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-branding',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './web-branding.component.html',
  styleUrl: './web-branding.component.scss'
})
export class WebBrandingComponent {

  
  user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    role: 'Administrator',
    profileImage: 'https://randomuser.me/api/portraits/women/44.jpg'
  };

  plans = [
    {
      title: 'Starter',
      description: 'Perfect for submitting your company application with expert assistance in 14 days.',
      originalPrice: '₹1499',
      finalPrice: '₹999',
      discount: '₹500 off',
      govtFeeText: '+ Govt. Fee (to be paid later)',
      offerImage: 'https://assets.vakilsearch.com/offer+(1).svg',
      offerText: 'Unlock partner benefits Post company incorporation worth Rs 4 lakhs',
      buttonText: 'Get Started',
      features: [
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'Expert assisted process' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'Your company name is filed in just 2 - 4 days' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'DSC in just 4 - 7 days' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'SPICe+ form filing in 14 days*' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'Incorporation Certificate in 28 - 35 days' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'Company PAN+TAN' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'DIN for directors' }
      ]
    },
    {
      title: 'Standard',
      description: 'Faster application submission with expert assistance in just 7 days.',
      originalPrice: '₹2999',
      finalPrice: '₹1499',
      discount: '50% off',
      govtFeeText: '+ Govt. Fee (to be paid later)',
      offerImage: 'https://assets.vakilsearch.com/coinMap.svg',
      offerText: 'Get ₹1000 cashback* Unlock cashback benefits upon opening a current account with our partner banks.',
      buttonText: 'Get Started',
      features: [
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'Expert assisted process' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'Your company name is filed in just 1 - 2 days*' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'DSC in just 3 - 4 days' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'SPICe+ form filing in 7 days*' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'Incorporation Certificate in 14 - 21 days' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'Company PAN+TAN' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'DIN for directors' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'Digital welcome kit that includes a checklist of all post-incorporation compliances' }
      ]
    },
    {
      title: 'Pro',
      description: 'Includes fast application submission and trademark filing in 7 days.',
      originalPrice: '₹4999',
      finalPrice: '₹3499',
      discount: '30% off',
      govtFeeText: '+ Govt. Fee (to be paid later)',
      offerImage: 'https://assets.vakilsearch.com/coinMap.svg',
      offerText: 'Get ₹1000 cashback* Unlock cashback benefits upon opening a current account with our partner banks.',
      buttonText: 'Get Started',
      features: [
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'Expert assisted process' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'Your company name is filed in just 1 - 2 days*' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'DSC in just 3 - 4 days' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'SPICe+ form filing in 7 days*' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'Incorporation Certificate in 14-21 days' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'Company PAN+TAN' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'DIN for directors' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'Digital welcome kit that includes a checklist of all post-incorporation compliances' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'MSME registration Free 🎉' },
        { icon: 'https://assets.vakilsearch.com/greentick.svg', text: 'Expedited Trademark application filing' }
      ]
    }
  ];

  registrationForm: FormGroup;
  isModalOpen: boolean = false;

  // constructor(private fb: FormBuilder, private router: Router) {
  //   this.registrationForm = this.fb.group({
  //     businessName: ['', Validators.required],
  //     ownerName: ['', Validators.required],
  //     businessType: ['', Validators.required],
  //     businessAddress: ['', Validators.required],
  //     contactNumber: ['', Validators.required]
  //   });
  // }

  openRegistrationForm(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      this.closeModal(); // Close the modal after submission
    }
  }
  showModal: boolean = false;
  step: number = 1;

  openPopup() {
    this.showModal = true;
    this.step = 1; // reset step to 1 every time popup opens
  }

  closePopup() {
    this.showModal = false;
  }

  goToNextStep() {
    console.log("@go to next@");
    
    if (this.step < 2) {
      this.step++;
    }
  }

  goToPreviousStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      businessName: ['', Validators.required],
      ownerName: ['', Validators.required],
      businessType: ['', Validators.required],
      businessAddress: ['', Validators.required],
      contactNumber: ['', Validators.required]
    });
  }

goToPricing() {
  this.router.navigate(['/pricing']);
}

isPlanSelected = false;

selectPlan() {
  this.isPlanSelected = true;
}


}
