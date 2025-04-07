import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

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
