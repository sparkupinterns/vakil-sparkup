import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
declare var $: any;  // To access jQuery ($) globally

@Component({
  selector: 'app-talk-to-lawyer',
  imports: [CommonModule],
  templateUrl: './talk-to-lawyer.component.html',
  styleUrl: './talk-to-lawyer.component.scss'
})
export class TalkToLawyerComponent {


  expertiseList = [
    {
      label: 'Legal Notices',
      icon: 'https://assets.vakilsearch.com/consult_legal_notices.svg'
    },
    {
      label: 'Property Lawyer',
      icon: 'https://assets.vakilsearch.com/consult_property.svg'
    },
    {
      label: 'Civil Lawyer',
      icon: 'https://assets.vakilsearch.com/consult_civil.svg'
    },
    {
      label: 'Company Law Matters',
      icon: 'https://assets.vakilsearch.com/consult_company.svg'
    },
    {
      label: 'Criminal Lawyer',
      icon: 'https://assets.vakilsearch.com/consult_criminal.svg'
    },
    {
      label: 'Consumer Lawyer',
      icon: 'https://assets.vakilsearch.com/consult_consumer.svg'
    }
    // Add more as needed
  ];

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
      question: 'What is online lawyer consultation?',
      answer: 'Online lawyer consultation allows individuals and businesses to seek legal advice remotely through video calls, phone calls, or chat. It provides quick and convenient access to legal experts for matters such as contracts, disputes, tax issues, and compliance.',
      isOpen: false
    },
    {
      question: 'What kinds of questions can I ask?',
      answer: 'You can ask about anything that has to do with your legal situation, like how a certain process works, what documents or forms you need, or what certain words or phrases mean. You can ask for advice, help with planning, or information about what might happen. You can also get a second opinion on your legal problem through advice sessions and document review services.',
      isOpen: false
    },
    {
      question: 'How can I keep my identity private while asking questions?',
      answer: 'Your question and the lawyer answer will be posted on our website, but we wo show who you are. We will NOT share your name or how to reach you. Lawyers who answer your question may get in touch with you to talk more about it.',
      isOpen: false
    },
    {
      question: 'When can I expect a reply to my question?',
      answer: 'The specialisations of the lawyers on Vakilsearch are different and unique. We try to get your question to the right lawyer quickly so you can get a good answer. After you post your question, you can expect to hear back in 24 working hours. Lawyers on Vakilsearch are active and want to help you solve your legal problems, so you wont have to wait long to get answers.',
      isOpen: false
    },
    {
      question: 'How can I find out if someone answered my question?',
      answer: 'When your question gets an answer, well let you know by email and text message on your mobile number.',
      isOpen: false
    },
    {
      question: 'How experienced are the lawyers who will give Consultation?',
      answer: 'Vakilsearch only has verified and experienced consultation lawyer services. These lawyers work in High Courts and the Supreme Court. Depending on the area of concern you choose, you will be connected to a legal expert who will give you the best and right legal advice.',
      isOpen: false
    },
    {
      question: 'If I call again, can I consult with the same lawyer?',
      answer: 'Yes. you can talk to the same lawyer again. When you call, you will be able to choose the lawyer with whom you have already spoken. Vakilsearch is one of the top law firms in India..',
      isOpen: false
    },
    {
      question: 'Can I pick the lawyer I want to consult?',
      answer: 'You can choose the lawyer you have already communicated to. Otherwise, our system chooses the lawyer based on their rating, practice area, your preferred language, and whether or not they are available.',
      isOpen: false
    },
    {
      question: 'Is there any reason to look for an online lawyer consultation?',
      answer: 'There are many benefits of looking for a lawyer online, like saving time, making sure your privacy is protected, and not having a language barrier. You can choose an online lawyer who speaks your language on Vakilsearch. Also, when you choose a lawyer online, you can choose from a number of experienced lawyers with the click of a button.',
      isOpen: false
    },
    {
      question: 'When should you hire a labor lawyer?',
      answer: 'Employees need a labour lawyer when they want to file a lawsuit against the management for any sort of injustice or exploitation. Apart from that, it is advisable to take help from them in case of negotiation or compromise during union strikes. These professionals would proceed legally and formally so that no allegation would be made against the union.',
      isOpen: false
    }
  ];

  // Function to toggle the isOpen property for a FAQ item
  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

}
