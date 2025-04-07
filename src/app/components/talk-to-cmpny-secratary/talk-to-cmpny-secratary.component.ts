import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
declare var $: any;  // To access jQuery ($) globally

@Component({
  selector: 'app-talk-to-cmpny-secratary',
  imports: [CommonModule],
  templateUrl: './talk-to-cmpny-secratary.component.html',
  styleUrl: './talk-to-cmpny-secratary.component.scss'
})
export class TalkToCmpnySecrataryComponent {

  

  lawyers = [
    {
      name: 'SJ Anakha',
      image: 'https://assets.vakilsearch.com/live-images/ttl/authors-anakha.svg',
      points: [
        'Specialises in tax planning and filing.',
        'File accurately and on time with expert advice.'
      ],
      experience: '6 years of experience'
    },
    {
      name: 'Kavitha Natesan',
      image: 'https://assets.vakilsearch.com/live-images/ttl/kavitha-natesan.svg',
      points: [
        'Specialises in cheque bounce cases and GST consulting.',
        'Offers practical solutions for legal and tax matters.'
      ],
      experience: '5 years of experience'
    },
    {
      name: 'Srijita',
      image: 'https://assets.vakilsearch.com/live-images/ttl/authors-srijitha.svg',
      points: [
        'Expert in accident claims, employment issues, and consumer complaints.',
        'Provides timely and strategic legal support.'
      ],
      experience: '5 years of experience'
    },
    {
      name: 'Kanisha',
      image: 'https://assets.vakilsearch.com/live-images/ttl/authors-kanisha.svg',
      points: [
        'Specialises in property succession, registration, and verification.',
        'Delivers efficient legal solutions for property matters.'
      ],
      experience: '3 years of experience'
    }
  ];

  currentIndex = 0;
  get visibleLawyers() {
    return this.lawyers.slice(this.currentIndex, this.currentIndex + 3);
  }

  nextSlide() {
    if (this.currentIndex < this.lawyers.length - 3) {
      this.currentIndex++;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  ngAfterViewInit(): void {
    // Initialize Slick Carousel after the view is initialized
    $('.slick-container').slick({
      infinite: true, // Loops the carousel infinitely
      slidesToShow: 3, // Show 3 slides at a time
      slidesToScroll: 1, // Scroll 1 slide at a time
      dots: true, // Display pagination dots
      arrows: true, // Show navigation arrows
      responsive: [
        {
          breakpoint: 1024, // For medium-sized screens, show 2 slides
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600, // For smaller screens, show 1 slide
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  }

   // Define the FAQ array with question, answer, and isOpen property to control the accordion state
   faqs = [
    {
      question: 'Who should consult a chartered accountant for tax planning?',
      answer: 'Individuals and businesses seeking efficient tax planning should consult a Chartered Accountant (CA). This includes salaried employees, self-employed professionals, business owners, startups, and corporations looking to minimize tax liabilities legally. High-net-worth individuals (HNIs) with multiple income sources, investors dealing with capital gains, and NRIs with cross-border tax concerns can also benefit from a CA’s expertise',
      isOpen: false
    },
    {
      question: 'How can a chartered accountant help with GST compliance?',
      answer: 'A Chartered Accountant (CA) helps with GST compliance by assisting in GST registration, return filing, and input tax credit (ITC) management. They ensure accurate reconciliation of GST filings with financial records, conduct GST audits, and help businesses comply with invoicing and e-way bill regulations. CAs also provide advisory services on GST laws, exemptions, and dispute resolution while ensuring businesses avoid penalties and optimize tax benefits',
      isOpen: false
    },
    {
      question: 'What services does a Chartered Accountant (CA) provide?',
      answer: 'A CA offers various financial and accounting services, including GST registration and compliance Auditing and assurance Financial planning and investment adviceBookkeeping and accountingBusiness incorporation and compliance',
      isOpen: false
    },
    {
      question: 'Can I hire a CA online?',
      answer: 'Yes, you can hire a CA online through platforms like Vakilsearch. Online CAs help with tax filing, business registrations, audits, and compliance without the need for physical meetings.',
      isOpen: false
    },
    {
      question: 'What is the due date for filing ITR for the Assessment Year 2025-26?',
      answer: 'The due date for filing an Income Tax Return (ITR) for AY 2025-26 is July 31, 2025, for individuals and non-audit cases. Businesses requiring audits typically have a deadline of October 31, 2025. However, deadlines may change based on government notifications.',
      isOpen: false
    },
    {
      question: 'How much does a CA charge for filing an ITR?',
      answer: 'Yes, online platforms like Vakilsearch allow you to consult with a CA via video calls, phone calls, or chat for tax planning, GST compliance, and business finances..',
      isOpen: false
    },
    {
      question: 'Can I talk to a CA online?',
      answer: 'Yes. you can talk to the same lawyer again. When you call, you will be able to choose the lawyer with whom you have already spoken. Vakilsearch is one of the top law firms in India..',
      isOpen: false
    },
    {
      question: 'Can I file an ITR without a CA?',
      answer: 'Yes, individuals can file ITR themselves using the Income Tax e-filing portal. However, consulting a CA ensures accuracy, maximizes deductions, and prevents errors that may lead to penalties..',
      isOpen: false
    },
    {
      question: 'How can a CA help in filing a revised return?',
      answer: 'A CA assists in Identifying errors in the original return Making necessary corrections and recomputing tax liability Filing the revised return under Section 139(5) of the Income Tax ActAvoiding penalties due to incorrect tax filing.',
      isOpen: false
    },
    {
      question: 'What are the benefits of filing ITR with Vakilsearch CA experts?',
      answer: 'Vakilsearch CA experts provide: Error-free tax filing with maximum deductions Compliance assurance to avoid penalties Quick processing to save time Audit support in case of scrutiny Affordable pricing for individuals and businesses',
      isOpen: false
    }
  ];

  // Function to toggle the isOpen property for a FAQ item
  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
  


}
