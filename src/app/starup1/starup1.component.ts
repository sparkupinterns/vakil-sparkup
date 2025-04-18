import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starup1',
  imports: [CommonModule],
  templateUrl: './starup1.component.html',
  styleUrl: './starup1.component.scss'
})
export class Starup1Component {

  
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

features = [
  {
    title: 'Funding Support',
    desc: 'Access government-backed funding, grants, and investors.',
    icon: 'data:image/png;base64,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'
  },
  {
    title: 'Startup Recognition',
    desc: 'Get certified and enjoy regulatory benefits.',
    icon: 'data:image/png;base64,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'
  },
  {
    title: 'Incubation Centers',
    desc: 'Join leading incubation and innovation hubs across India.',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQPbIgZWGz8XtQ0z_JO61mg7VM_0HE7z-5g&s'
  }
];

statsData = [
  { value: '95,000+', label: 'Recognized Startups' },
  { value: '800+', label: 'Funded by Government' },
  { value: '30+', label: 'Startup Unicorns' },
  { value: '50 Lakh+', label: 'Jobs Created' }
];

}
