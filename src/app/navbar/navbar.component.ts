import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen: boolean = false;  // To track whether the menu is open or not
  isMobile: boolean = false;    // To detect mobile screen size

  // Detect screen size changes
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth <= 768;
  }

  // Initialize the mobile detection on component load
  ngOnInit() {
    this.isMobile = window.innerWidth <= 768;
  }

  // Toggle menu visibility on hamburger click
  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }


  menuOpened: boolean = false;

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }
   // selectedItem: any;

   items = [
    {
      name: 'Free Legal Documents',
      icon: 'https://assets.vakilsearch.com/header-desktop/Copyright.svg',
      links: [
        { label: 'All Legal Documents', url: 'https://vakilsearch.com/documents' },
        { label: 'Rental Agreement', url: 'https://vakilsearch.com/documents/rental-agreement-download-format' },
        // Add more links as needed
      ],
    },
    {
      name: 'Trademark & IP',
      icon: 'https://assets.vakilsearch.com/header-desktop/Trademark.svg',
      links: [
        { label: 'Trademark Registration', url: 'https://vakilsearch.com/trademark-registration' },
        { label: 'Patent Filing', url: 'https://vakilsearch.com/patent' },
      ],
    },
    // Add other menu items
  ];
  
  
  selectedItem: any = this.items[0]; // Default selected item
  
  selectItem(item: any) {
    this.selectedItem = item;
  }

  activeTab: string = '';
  selectedBusiness: string = 'Company Registration';
  selectedTax: string = 'GST and Other Indirect Tax';

  businessSetup = [
    {
      name: 'Company Registration',
      img: 'https://assets.vakilsearch.com/header-desktop/Register+a+Business.svg',
    },
    {
      name: 'International Business Setup',
      img: 'https://assets.vakilsearch.com/header-desktop/International+Business+Setup.svg',
    },
    {
      name: 'Company Name Search',
      img: 'https://assets.vakilsearch.com/header-desktop/Company+Name+Search.svg',
    },
    {
      name: 'Licenses & Registrations',
      img: 'https://assets.vakilsearch.com/header-desktop/Licenses+%26+Registrations.svg',
    },
    {
      name: 'Web Development',
      img: 'https://assets.vakilsearch.com/header-desktop/Web+Development.svg',
    },
  ];

  taxCompliance = [
    {
      name: 'GST and Other Indirect Tax',
      img: 'https://assets.vakilsearch.com/header-desktop/GST+and+Other+Indirect+Tax.svg',
    },
    {
      name: 'Changes in Pvt Ltd Company',
      img: 'https://assets.vakilsearch.com/header-desktop/Changes+in+Pvt+Ltd+Company.svg',
    },
    {
      name: 'Changes In Limited Liability Partnership',
      img: 'https://assets.vakilsearch.com/header-desktop/Changes+In+Limited+Liability+Partnership.svg',
    },
    {
      name: 'Mandatory Annual Filings',
      img: 'https://assets.vakilsearch.com/header-desktop/Mandatory+Annual+Filings.svg',
    },
    {
      name: 'Labour Compliance',
      img: 'https://assets.vakilsearch.com/header-desktop/Labour+Compliance.svg',
    },
    {
      name: 'Accounting & Tax',
      img: 'https://assets.vakilsearch.com/header-desktop/Accounting+%26+Tax.svg',
    },
    {
      name: 'Convert Your Business',
      img: 'https://assets.vakilsearch.com/header-desktop/Convert+Your+Business.svg',
    },
  ];
  
}
