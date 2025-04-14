import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { Router } from 'express';
import { Router } from '@angular/router';


@Component({
  selector: 'app-llp1',
  imports: [CommonModule, FormsModule],
  templateUrl: './llp1.component.html',
  styleUrl: './llp1.component.scss'
})
export class Llp1Component {
  
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

  // Define the FAQ array with question, answer, and isOpen property to control the accordion state
  faqs = [
    {
      question: 'What is the minimum requirement to register a Private Limited Company in India?',
      answer: 'IA Private Limited Company requires a minimum of two directors, two shareholders, and one Indian resident director, as per the Companies Act, 2013.',
      isOpen: false
    },
    {
      question: 'Can a Private Limited Company operate multiple businesses?',
      answer: 'Yes, a Private Limited Company can operate multiple businesses, provided all activities are listed in the Memorandum of Association (MoA) and approved by the Registrar of Companies (RoC).',
      isOpen: false
    },
    {
      question: 'What documents are required for Private Limited Company registration?',
      answer: 'For Directors and Shareholders: PAN card, Aadhaar/Passport, and address proof (utility bill or bank statement).',
      isOpen: false
    },
    {
      question: 'Can foreign nationals or NRIs be directors in a Private Limited Company?',
      answer: 'Yes, NRIs and foreign nationals can be directors, provided at least one director is an Indian resident.',
      isOpen: false
    },
    {
      question: 'Can I use my residential address as my company’s registered office?',
      answer: 'Yes, a residential address can be used as the registered office during incorporation, but it will be used for all official communications.',
      isOpen: false
    },
    {
      question: 'What is the SPICe+ form, and why is it essential for registration?',
      answer: 'SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) is an integrated form that simplifies company incorporation by combining:',
      isOpen: false
    },
    {
      question: 'How long does it take to register a Private Limited Company?',
      answer: 'The entire process typically takes 10 to 15 working days, subject to MCA approval and document accuracy.',
      isOpen: false
    },
    {
      question: 'What should I do after my company is registered?',
      answer: 'Open a current account for the business.',
      isOpen: false
    },
    {
      question: 'What happens if my company name is rejected during registration?',
      answer: 'You can resubmit an alternative name through SPICe+ without additional charges during the resubmission period.',
      isOpen: false
    },
    {
      question: 'How can I avoid delays in the registration process?',
      answer: 'Submit accurate and complete documentation.',
      isOpen: false
    }
  ];

  // Function to toggle the isOpen property for a FAQ item
  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
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
    if (this.step < 2) {
      this.step++;
    }
  }

  goToPreviousStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

  constructor(private router: Router) {}

goToPricing() {
  this.router.navigate(['/pricing']);
}

isPlanSelected = false;

selectPlan() {
  this.isPlanSelected = true;
}
  
}
