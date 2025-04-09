import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-opc',
  imports: [CommonModule],
  templateUrl: './opc.component.html',
  styleUrl: './opc.component.scss'
})
export class OpcComponent implements OnInit{

  title = 'Lawyer One Person Company (OPC)';

  posts = [
    { 
      title: 'Start, Manage & Grow Your Business Seamlessly',
      image: 'https://media.istockphoto.com/id/1449334081/photo/statue-of-lady-justice-on-desk-of-a-judge-or-lawyer.jpg?s=612x612&w=0&k=20&c=139ZS1ycMRXBqnPEWV3l08zBLNe40WPiAudVnmeQrl8='
    },
    { 
      title: 'Get Legal Documents & Business Services in Minutes',
      image: 'https://media.istockphoto.com/id/1449334081/photo/statue-of-lady-justice-on-desk-of-a-judge-or-lawyer.jpg?s=612x612&w=0&k=20&c=139ZS1ycMRXBqnPEWV3l08zBLNe40WPiAudVnmeQrl8='
    },
    { 
      title: 'Trusted Legal Help for Entrepreneurs & Professionals',
      image: 'https://media.istockphoto.com/id/1449334081/photo/statue-of-lady-justice-on-desk-of-a-judge-or-lawyer.jpg?s=612x612&w=0&k=20&c=139ZS1ycMRXBqnPEWV3l08zBLNe40WPiAudVnmeQrl8='
    }
  ];
  
  currentIndex = 0;
  interval: any;
  totalSlides = this.posts.length;
  
  ngOnInit() {
    this.startSlider();
  }
  
  startSlider() {
    this.interval = setInterval(() => {
      if (this.currentIndex >= this.totalSlides - 1) {
        this.currentIndex = 0; // Reset to first slide
      } else {
        this.currentIndex++; // Move to next slide
      }
    }, 3000); // Change slide every 3 seconds
  }
  
  ngOnDestroy() {
    clearInterval(this.interval);
  }
  
  onButtonClick() {
    console.log("Button Clicked!");
  }
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.posts.length - 1; // Last slide pe jump kare
    }
  }
  
  nextSlide() {
    if (this.currentIndex < this.posts.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // First slide pe jump kare
    }
  }

  imageItems = [
    {
      title: 'Main Home',
      link: 'https://dictum.qodeinteractive.com/',
      image: 'https://dictum.qodeinteractive.com/wp-content/uploads/2025/02/main-home.jpg',
    },
    {
      title: 'Legal Advisory',
      link: 'https://dictum.qodeinteractive.com/legal-advisory/',
      image: 'https://dictum.qodeinteractive.com/wp-content/uploads/2025/02/legal-advisory.jpg',
    },
    {
      title: 'Law Firm',
      link: 'https://dictum.qodeinteractive.com/law-firm/',
      image: 'https://dictum.qodeinteractive.com/wp-content/uploads/2025/02/law-firm.jpg',
    }
  ];

  opcData = {
    name: 'OPC Registration Section',
    type: 'service',
    designs: 'horizontal-image-left',
    fields: {
      heading: 'One Person Company (OPC) Registration',
      description: 'Establish your business as a One Person Company (OPC) to enjoy limited liability and full control. Perfect for solo entrepreneurs looking to scale legally and efficiently.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-InmaL5Ch7-diME4kWb_0W1W56G4zK8NU6g&s',
      features: [
        '100% ownership with limited liability',
        'Legal identity and separate entity status',
        'Tax benefits and easy compliance',
        'Quick and hassle-free registration'
      ],
      ctaText: 'Get OPC Registered',
      ctaLink: '/get-started'
    }
  };

  sectionData = this.opcData;  // Now sectionData is initialized with opcData


  opcInfo = {
    name: 'About One Person Company (OPC)',
    type: 'service',
    designs: 'horizontal-image-right',
    fields: {
      heading: 'What is One Person Company (OPC)?',
      description: 'A One Person Company (OPC) is a business structure in India where a single person can own and manage the entire company. It provides the advantages of limited liability, a separate legal identity, and operational flexibility.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7_drQEX_LKUMYpxp1VZvyzOhhy35S6R6LA&s', // Replace with a relevant image URL
      features: [
        'Single shareholder, unlimited growth potential',
        'Limited liability protection',
        'Separate legal entity from the owner',
        'Simplified compliance and taxation benefits'
      ],
      ctaText: 'Learn More About OPC',
      ctaLink: '/learn-more-opc'
    }
  };


  lawyers = [
    { id: 1, name: 'John Doe', specialty: 'Criminal Law', companyName: 'LegalEase OPC Pvt. Ltd.', yearsOfExperience: 10, location: 'New York' },
    { id: 2, name: 'Jane Smith', specialty: 'Family Law', companyName: 'Smith Legal OPC Pvt. Ltd.', yearsOfExperience: 7, location: 'Los Angeles' },
    { id: 3, name: 'Mike Johnson', specialty: 'Corporate Law', companyName: 'Johnson Legal OPC Pvt. Ltd.', yearsOfExperience: 15, location: 'Chicago' },
    { id: 4, name: 'Emily Davis', specialty: 'Intellectual Property Law', companyName: 'Davis IP OPC Pvt. Ltd.', yearsOfExperience: 12, location: 'San Francisco' },
    { id: 5, name: 'Jane Smith', specialty: 'Family Law', companyName: 'Smith Legal OPC Pvt. Ltd.', yearsOfExperience: 7, location: 'Los Angeles' },
    { id: 6, name: 'Mike Johnson', specialty: 'Corporate Law', companyName: 'Johnson Legal OPC Pvt. Ltd.', yearsOfExperience: 15, location: 'Chicago' },
    { id: 7, name: 'Emily Davis', specialty: 'Intellectual Property Law', companyName: 'Davis IP OPC Pvt. Ltd.', yearsOfExperience: 12, location: 'San Francisco' }
  ];
}
