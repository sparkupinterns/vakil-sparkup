import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-msme',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './msme.component.html',
  styleUrl: './msme.component.scss'
})
export class MsmeComponent {


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


goToPricing() {
  this.router.navigate(['/pricing']);
}

isPlanSelected = false;

selectPlan() {
  this.isPlanSelected = true;
}

  registrationForm: FormGroup;
  isModalOpen: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      businessName: ['', Validators.required],
      ownerName: ['', Validators.required],
      businessType: ['', Validators.required],
      businessAddress: ['', Validators.required],
      contactNumber: ['', Validators.required]
    });
  }

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

  testimonials = [
    {
      quote: 'Thanks to the support provided, I was able to digitize my business and increase sales by 70% in just 3 months!',
      name: 'Priya Sharma',
      title: 'Founder, Craftsy India',
      iconClass: 'fa-solid fa-user-tie'  // Store the icon class here
    },    
    {
      quote: 'The training and funding access changed everything. I now employ 15 people in my community.',
      name: 'Ravi Verma',
      title: 'Owner, Verma Textiles',
      image: 'fa-solid fa-user-tie'
    },
    {
      quote: 'Their mentorship helped me scale from local to national in under a year. Grateful for the guidance!',
      name: 'Anjali Mehta',
      title: 'CEO, EcoPack Solutions',
      image: 'fa-solid fa-user-tie'
    },

    {
      quote: 'Thanks to the support provided, I was able to digitize my business and increase sales by 70% in just 3 months!',
      name: 'Priya Sharma',
      title: 'Founder, Craftsy India',
      image: 'fa-solid fa-user-tie'
    },
    {
      quote: 'The training and funding access changed everything. I now employ 15 people in my community.',
      name: 'Ravi Verma',
      title: 'Owner, Verma Textiles',
      image: 'fa-solid fa-user-tie'
    },
    {
      quote: 'Their mentorship helped me scale from local to national in under a year. Grateful for the guidance!',
      name: 'Anjali Mehta',
      title: 'CEO, EcoPack Solutions',
      image: 'fa-solid fa-user-tie'
    }
  ];
  
  msmeData = {
    title: "Micro, Small, and Medium Enterprises (MSMEs)",
    definition: "Micro, Small, and Medium Enterprises (MSMEs) are categorized based on the size of their investment in plant and machinery or equipment and their annual turnover.",
    categories: [
      {
        name: 'Micro Enterprises',
        investmentRange: 'Up to INR 1 crore',
        turnoverRange: 'Up to INR 5 crore',
        description: 'Micro-enterprises are typically sole proprietorships or small family-owned businesses that cater to local markets.'
      },
      {
        name: 'Small Enterprises',
        investmentRange: 'More than INR 1 crore but less than INR 10 crore',
        turnoverRange: 'More than INR 5 crore but less than INR 50 crore',
        description: 'Small enterprises are often more structured, with a dedicated workforce and an ability to serve regional or national markets.'
      },
      {
        name: 'Medium Enterprises',
        investmentRange: 'More than INR 10 crore but less than INR 50 crore',
        turnoverRange: 'More than INR 50 crore but less than INR 250 crore',
        description: 'Medium enterprises tend to have more complex operations, access to greater resources, and contribute significantly to employment and innovation.'
      }
    ],
    importance: [
      "Economic Growth",
      "Employment Generation",
      "Promotion of Entrepreneurship",
      "Rural Development"
    ],
    challenges: [
      "Access to Finance",
      "Technology and Innovation",
      "Regulatory Burden",
      "Marketing and Market Access",
      "Skilled Labor Shortage"
    ],
    governmentSupport: [
      "Financial Assistance Programs",
      "Skill Development Programs",
      "Tax Incentives",
      "Market Access Programs"
    ],
    conclusion: "MSMEs are the backbone of the economy, driving innovation, providing jobs, and contributing to the prosperity of the nation. Ensuring access to finance, technology, and market opportunities is key to their success."
  };


  ngOnInit(): void {
  }
}
