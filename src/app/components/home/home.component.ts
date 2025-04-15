import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import AOS from 'aos';
// declare var $: any;  

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  
  // items = [
    
  //   { image: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/private-limited-company-4852104-4026600.png?f=webp&w=256',  link: '/pvt-ltd1-company', title: 'PVT LTD Registration', name: 'Product A', price: 4999 },
  //   { image: '/assets/lr_img.png', link: '/llp1', title: 'LLP Registration', name: 'Product B', price: 2999 },
  //   { image: '/assets/prtner.png',title: 'Partnership Registration', name: 'Product C', price: 1999 },
  //   { image: '/assets/images/gst.png', title: 'Gst Registration', name: 'Product D', price: 999 },
  //   { image: '/assets/images/msme.png', title: 'MSME Registration', name: 'Product E', price: 999 },
  //   { image: '/assets/images/strup.png', title: 'Start-up India', name: 'Product F', price: 600 },
  //   { image: '/assets/images/filling.png', title: 'Gst Filling', name: 'Product G', price: 499 },
  //   { image: '/assets/images/account.png', title: 'Virtual Accountant', name: 'Product H', price: 4999 },
  //   { image: '/assets/images/web.png', title: 'Web & Branding', name: 'Product I', price: 4999 }
  // ];
  
  items = [
    {
      title: 'Company Registration',
      image: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/private-limited-company-4852104-4026600.png?f=webp&w=256',
      price: 4999,
      link: '/pvt-ltd1-company'
    },
    {
      title: 'LLP Registration',
      image: '/assets/lr_img.png',
      price: 2999,
      link: '/llp-registration'
    },
    {
      title: 'Partnership Registration',
      image: '/assets/prtner.png',
      price: 1999,
      link: '/partnership-registration'
    },
    {
      title: 'GST Registration',
      image: '/assets/images/gst.png',
      price: 999,
      link: '/gst-registration'
    },
    {
      title: 'GST Filing',
      image: '/assets/images/filling.png',
      price: 499,
      link: '/gst-filing'
    },
    {
      title: 'MSME Registration',
      image: '/assets/images/msme.png',
      price: 999,
      link: '/msme-registration'
    },
    {
      title: 'Start-up India',
      image: '/assets/images/strup.png',
      price: 600,
      link: '/startup-india'
    },
    {
      title: 'Virtual Accountant',
      image: '/assets/images/account.png',
      price: 4999,
      link: '/virtual-accountant'
    },
    {
      title: 'Web & Branding',
      image: '/assets/images/web.png',
      price: 4999,
      link: '/web-branding'
    }
  ];

  // Manually assigning items to rows without using slice
  firstRow = [
    this.items[0],
    this.items[1],
    this.items[2]
  ];

  secondRow = [
    this.items[3],
    this.items[4],
    this.items[5]
  ];

  thirdRow = [
    this.items[6],
    this.items[7],
    this.items[8]
  ];


  
  get itemsChunked() {
    const chunkSize = 3;
    const chunks = [];
    for (let i = 0; i < this.items.length; i += chunkSize) {
      chunks.push(this.items.slice(i, i + chunkSize));
    }
    return chunks;
  }

  // fullText: string = 'ak ak ak... text continue automate likhta huaa show karna he';
  // placeholderText: string = '';
  // index: number = 0;

  // // ngOnInit(): void {
  // //   this.startTypingLoop();
  // // }

  // startTypingLoop(): void {
  //   setInterval(() => {
  //     this.placeholderText = this.fullText.substring(0, this.index + 1);
  //     this.index++;

  //     if (this.index >= this.fullText.length) {
  //       this.index = 0; // restart from beginning
  //       this.placeholderText = ''; // clear text for smooth restart
  //     }
  //   }, 100); // speed in ms
  // }

  sectionData = {
    name: 'Horizontal Service Categories',
    type: 'service-cards',
    designs: ['horizontal', 'multi-category', 'icon-left'],
    fields: [
      {
        title: 'Company Registration',
        icon: 'assets/icons/company.svg',
        services: [
          { name: 'Private Limited Company', link: '/company/private-limited' },
          { name: 'One Person Company', link: '/company/one-person' },
          { name: 'LLP Registration', link: '/company/llp' },
          { name: 'Startup India Registration', link: '/company/startup' }
        ]
      },
      {
        title: 'GST Services',
        icon: 'assets/icons/gst.svg',
        services: [
          { name: 'GST Registration', link: '/gst/registration' },
          { name: 'GST Filing', link: '/gst/filing' },
          { name: 'GST LUT', link: '/gst/lut' },
          { name: 'E-Invoicing', link: '/gst/e-invoice' }
        ]
      },
      {
        title: 'IP Protection',
        icon: 'assets/icons/ip.svg',
        services: [
          { name: 'Trademark Registration', link: '/ip/trademark' },
          { name: 'Trademark Objection', link: '/ip/objection' },
          { name: 'Copyright Registration', link: '/ip/copyright' },
          { name: 'Patent Filing', link: '/ip/patent' }
        ]
      }
    ]
  };

  categories: any[] = [];

  ngOnInit(): void {
    // this.startTypingLoop();
    this.categories = this.sectionData.fields;
    AOS.init({
      duration: 1000, // You can customize the duration of the animations
      once: true // This makes the animations happen only once
    });
  }

  features = [
    {
      icon: 'https://assets.vakilsearch.com/live-images/ic-feature-2.svg',
      title: 'Affordable Professional Services',
      description: 'Proven legal and financial solutions with senior experts.'
    },
    {
      icon: 'https://assets.vakilsearch.com/live-images/ic-feature-1.svg',
      title: 'Diverse Expert Network',
      description: 'Talk to lawyers, chartered accountants (CAs), and company secretaries (CSs) to meet your legal and financial needs.'
    },
    {
      icon: 'https://assets.vakilsearch.com/live-images/ic-feature-3.svg',
      title: 'Easy-to-use dashboard',
      description: 'Streamlined navigation for service requests and tracking.'
    },
    {
      icon: 'https://assets.vakilsearch.com/live-images/ic-feature-4.svg',
      title: 'Quick Customer Support',
      description: 'Queries are responded within 24 hours*'
    }
  ];


  // services = [
  //   {
  //     icon: 'https://assets.vakilsearch.com/ic-brief-case.svg',
  //     title: 'Start Your Bussiness',
  //     price: 'Starting at ₹999',
  //     categories: [
  //       {
  //         title: 'Company Registration',
  //         links: [
  //           { name: 'Private Limited Company', link: '/pvt-ltd1-company' },
  //           { name: 'LLP Registration', link: '/llp1' },
  //           { name: 'One Person Company', link: '/opc1' },
  //           { name: 'Nidhi Company', link: '#' }
  //         ]
  //       },
  //       {
  //         title: 'Business Setup',
  //         links: [
  //           { name: 'Partnership Firm', link: '#' },
  //           { name: 'Proprietorship', link: '#' },
  //           { name: 'Section 8 Company', link: '#' }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     icon: 'https://assets.vakilsearch.com/ic-graph.svg',
  //     title: 'GST Registration ',
  //     price: 'Starting at ₹999',
  //     categories: [
  //       {
  //         title: 'Legal Documents',
  //         links: [
  //           { name: 'GST Registration', link: '#' },
  //           { name: 'GST Filling', link: '#' },
  //           { name: 'GST Cancelation and Revocation', link: '#' },
  //           { name: 'Reply to GST Notice', link: '#' },
  //           { name: 'Indirect Tax', link: '#' }
  //         ]
  //       },
  //       {
  //         title: 'Contract Review',
  //         links: [
  //           { name: 'Vendor Contract Review', link: '#' },
  //           { name: 'Investor Agreement Review', link: '#' }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     icon: 'https://assets.vakilsearch.com/ic-books.svg',
  //     title: 'Licences',
  //     price: 'Starting at ₹999',
  //     categories: [
  //       {
  //         title: 'Accounting & Tax',
  //         links: [
  //           { name: 'ISO Registration', link: '#' },
  //           { name: 'IFSSAI Registration', link: '#' },
  //           { name: 'IEC Registration', link: '#' },
  //           { name: 'LIQUOR License Registration', link: '#' },
  //           { name: 'PSARA Registration', link: '#' },
  //         ]
  //       },
  //       {
  //         title: 'Compliance',
  //         links: [
  //           { name: 'Annual ROC Filings', link: '#' },
  //           { name: 'Director KYC', link: '#' },
  //           { name: 'Digital Signature', link: '#' }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     icon: 'https://assets.vakilsearch.com/ic-locker.svg',
  //     title: 'Maintain Your Account',
  //     price: 'Starting at ₹4999',
  //     categories: [
  //       {
  //         title: 'Intellectual Property',
  //         links: [
  //           { name: 'Accounting and Book-keeping', link: '#' },
  //           { name: 'Annual Compliance', link: '#' },
  //           { name: 'TDS Return Filing', link: '#' },
  //           { name: 'Income Tax Notice', link: '#' },
  //           { name: 'Secretarial Audit', link: '#' }
  //         ]
  //       },
  //       {
  //         title: 'Legal Services',
  //         links: [
  //           { name: 'Legal Drafting', link: '#' },
  //           { name: 'Terms & Conditions', link: '#' },
  //           { name: 'Privacy Policy', link: '#' }
  //         ]
  //       }
  //     ]
  //   },
  //   // {
  //   //   icon: 'https://assets.vakilsearch.com/ic-graph.svg',
  //   //   title: 'GST Fillings ',
  //   //   price: 'Starting at ₹4999',
  //   //   categories: [
  //   //     {
  //   //       title: 'Legal Documents',
  //   //       links: [
  //   //         { name: 'Founder’s Agreement', link: '#' },
  //   //         { name: 'Shareholder Agreement', link: '#' },
  //   //         { name: 'Employment Agreement', link: '#' }
  //   //       ]
  //   //     },
  //   //     {
  //   //       title: 'Contract Review',
  //   //       links: [
  //   //         { name: 'Vendor Contract Review', link: '#' },
  //   //         { name: 'Investor Agreement Review', link: '#' }
  //   //       ]
  //   //     }
  //   //   ]
  //   // },
  //   {
  //     icon: 'https://assets.vakilsearch.com/ic-license.svg',
  //     title: 'Web & Branding',
  //     price: 'Starting at ₹4999',
  //     categories: [
  //       {
  //         title: 'Website & Hosting',
  //         links: [
  //           { name: 'Company Website', link: '#' },
  //           { name: 'Domain & Hosting', link: '#' },
  //           { name: 'Email Setup', link: '#' }
  //         ]
  //       },
  //       {
  //         title: 'Brand Identity',
  //         links: [
  //           { name: 'Logo Design', link: '#' },
  //           { name: 'Business Cards', link: '#' },
  //           { name: 'Pitch Decks', link: '#' }
  //         ]
  //       }
  //     ]
  //   },
  //   // {
  //   //   icon: 'https://assets.vakilsearch.com/ic-graph.svg',
  //   //   title: 'Maintain your Accounts',
  //   //   price: 'Starting from ₹4999/-',
  //   //   categories: [
  //   //     {
  //   //       title: 'Accounting Services',
  //   //       links: [
  //   //         { name: 'Accounting and Book-keeping', link: 'https://vakilsearch.com/accounting-bookkeeping-services' },
  //   //         { name: 'Annual Compliance', link: 'https://vakilsearch.com/online-accounting-compliance-service' },
  //   //         { name: 'TDS Return Filing', link: 'https://vakilsearch.com/online-tds-return-filing' },
  //   //         { name: 'Income Tax Notice', link: 'https://vakilsearch.com/income-tax-return-filing-online/notice' },
  //   //         { name: 'Secretarial Audit', link: 'https://vakilsearch.com/company-secretary/audit' }
  //   //       ]
  //   //     }
  //   //   ]
  //   // },
  //   // {
  //   //   icon: 'https://assets.vakilsearch.com/ic-license.svg',
  //   //   title: 'Licenses',
  //   //   price: 'Starting from ₹999/-',
  //   //   categories: [
  //   //     {
  //   //       title: 'License Registrations',
  //   //       links: [
  //   //         { name: 'ISO Registration', link: 'https://vakilsearch.com/iso-certification' },
  //   //         { name: 'FSSAI Registration', link: 'https://vakilsearch.com/fssai-registration' },
  //   //         { name: 'IEC Registration', link: 'https://vakilsearch.com/import-export-code' },
  //   //         { name: 'LIQUOR License Registration', link: 'https://vakilsearch.com/liquor-license' },
  //   //         { name: 'PSARA Registration', link: 'https://vakilsearch.com/psara-license-services' }
  //   //       ]
  //   //     }
  //   //   ]
  //   // }
  // ];

  reviews = [
    {
      name: 'John Doe',
      date: 'April 11, 2025',
      reviewText: 'Excellent service! The lawyer helped me win my case with professionalism and expertise.',
      rating: 5,
      relatedContent: 'Personal Injury Law'
    },
    {
      name: 'Jane Smith',
      date: 'March 25, 2025',
      reviewText: 'I had a wonderful experience. Highly recommend their family law services!',
      rating: 4,
      relatedContent: 'Family Law'
    },
    {
      name: 'Mark Johnson',
      date: 'February 15, 2025',
      reviewText: 'The team was incredibly helpful in resolving my business dispute. Very professional and efficient.',
      rating: 5,
      relatedContent: 'Business Law'
    }
  ];


}
