import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-talk-to-trademark',
  imports: [CommonModule, FormsModule],
  templateUrl: './talk-to-trademark.component.html',
  styleUrl: './talk-to-trademark.component.scss'
})
export class TalkToTrademarkComponent implements OnInit, OnDestroy {

  

  form = {
    email: '',
    phone: '',
    location: '',
    language: '',
    problemType: ''
  };
  
  problemTypes = [
    'Technical Issue',
    'Billing Problem',
    'Login Trouble',
    'Feature Request',
    'Others'
  ];
  
  submitForm() {
    console.log('Form Data:', this.form);
    // Add your API call or logic here
  }

  features = [
    {
      img: 'https://assets.vakilsearch.com/live-images/talk-to-expert/computer.svg',
      title: 'Completely Online',
      description:
        'Our team of advisors will provide you with sound advice based on your needs. The entire procedure is very smooth and worry free.'
    },
    {
      img: 'https://assets.vakilsearch.com/live-images/talk-to-expert/meet.svg',
      title: 'Video Call',
      description:
        'We provide quick fixes to busy clients through video calls. While maintaining their privacy over the phone or via email.'
    },
    {
      img: 'https://assets.vakilsearch.com/live-images/talk-to-expert/money.svg',
      title: 'Cost-Effective',
      description:
        'No extra fees will be charged. Change lawyers quickly without having to pay more. While saving money, get excellent guidance'
    }
  ];

  @ViewChild('sliderTrack') sliderTrack!: ElementRef;

  originalReviews = [
    { name: 'Jayashree', image: 'https://assets.vakilsearch.com/live-images/ttl/jayashree-gautham.jpg', text: 'Vakilsearch offers amazing IP services.' },
    { name: 'Aadit Shah', image: 'https://assets.vakilsearch.com/live-images/ttl/aadit-shah.jpg', text: 'Great experience with Vakilsearch team.' },
    { name: 'Rinky Sharma', image: 'https://assets.vakilsearch.com/live-images/ttl/rinky-sharma.jpg', text: 'They helped my business grow legally.' },
    { name: 'Mohit Kumar', image: 'https://assets.vakilsearch.com/live-images/ttl/mohit.jpg', text: 'Very professional and reliable team.' },
    { name: 'Sneha Bansal', image: 'https://assets.vakilsearch.com/live-images/ttl/sneha.jpg', text: 'Affordable and fast service!' },
    { name: 'Anita Kapoor', image: 'https://assets.vakilsearch.com/live-images/ttl/jayashree-gautham.jpg', text: 'Highly recommended for startups.' }
  ];

  reviews = [...this.originalReviews, ...this.originalReviews]; // looping
  currentIndex = 0;
  interval: any;
  transition = 'transform 0.5s ease-in-out';
  slideWidth = 0;

  ngOnInit(): void {
    this.startSlider();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const card = this.sliderTrack.nativeElement.querySelector('.review-card');
      this.slideWidth = card.offsetWidth;
    });
  }

  startSlider(): void {
    this.interval = setInterval(() => {
      this.currentIndex++;
      this.setTransform();

      if (this.currentIndex >= this.originalReviews.length) {
        setTimeout(() => {
          this.transition = 'none';
          this.currentIndex = 0;
          this.setTransform();
          setTimeout(() => {
            this.transition = 'transform 0.5s ease-in-out';
          }, 50);
        }, 500);
      }
    }, 2500);
  }

  setTransform(): void {
    const shift = this.currentIndex * this.slideWidth;
    const el = this.sliderTrack.nativeElement;
    el.style.transform = `translateX(-${shift}px)`;
    el.style.transition = this.transition;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
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

    lawyerLinks = [
      { name: 'Criminal lawyers', link: 'https:/wyer-services-in-india' },
      { name: 'Labour Lawyers', link: 'httpwyer-services-in-india' },
      { name: 'Consumer court lawyers', link: 'https:/wyer-services-in-india' },
      { name: 'Divorce Lawyers', link: 'https:-lawyer-services-in-india' },
      { name: 'Banking lawyers', link: 'https://lawyer-services-in-india' },
      { name: 'Immigration Lawyers', link: 'httpsgration-lawyer-services-in-india' },
      { name: 'Family Lawyers', link: 'httpslawyer-services-in-india' },
      { name: 'Litigation lawyers', link: 'htgation-lawyer-services-in-india' },
      { name: 'Risk and Regulatory', link: 'httpsnagement-and-regulatory-risk' }
    ];

}
