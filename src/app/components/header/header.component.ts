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

  isMobileMenuOpen: boolean = false;
  isExpertDropdownOpen: boolean = false;
  isBusinessDropdownOpen: boolean = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.isExpertDropdownOpen = false;
    this.isBusinessDropdownOpen = false;
  }

  toggleExpertDropdown() {
    this.isExpertDropdownOpen = !this.isExpertDropdownOpen;
  }

  toggleBusinessDropdown() {
    this.isBusinessDropdownOpen = !this.isBusinessDropdownOpen;
  }
   // selectedItem: any;

   items = [
    {
      name: 'Free Legal Documents',
      icon: 'https://assets.vakilsearch.com/header-desktop/Copyright.svg',
      links: [
        { label: 'All Legal Documents', url: 'https://vakilsearch.com/documents' },
        { label: 'Rental Agreement', url: 'https://vakilsearch.com/documents/rental-agreement-download-format' },
        { label: 'Commercial Rental Agreement', url: 'https://vakilsearch.com/documents' },
        { label: 'Experience Letter', url: 'https://vakilsearch.com/documents/rental-agreement-download-format' },
        { label: 'Appointment Letter', url: 'https://vakilsearch.com/documents' },
        { label: 'Affidavit Format', url: 'https://vakilsearch.com/documents/rental-agreement-download-format' },
        { label: 'Power Of Attorney', url: 'https://vakilsearch.com/documents' },
        { label: 'Income Certificate', url: 'https://vakilsearch.com/documents/rental-agreement-download-format' },
        { label: 'No Objection Certificate', url: 'https://vakilsearch.com/documents' },
        { label: 'Salary Slip', url: 'https://vakilsearch.com/documents/rental-agreement-download-format' },
        { label: 'Resignation Letter', url: 'https://vakilsearch.com/documents' },
        { label: 'Legal Heir Certificate', url: 'https://vakilsearch.com/documents/rental-agreement-download-format' },
        { label: 'Relieving Letter', url: 'https://vakilsearch.com/documents/rental-agreement-download-format' },
        { label: 'Bonafide Certificate', url: 'https://vakilsearch.com/documents' },
        { label: 'Partnership Deed', url: 'https://vakilsearch.com/documents/rental-agreement-download-format' },
        { label: 'GST Invoice', url: 'https://vakilsearch.com/documents' },
        { label: 'Authorised Signatory In GST', url: 'https://vakilsearch.com/documents/rental-agreement-download-format' },
        { label: 'Delivery Challan', url: 'https://vakilsearch.com/documents' },
        { label: 'Offer Letter', url: 'https://vakilsearch.com/documents/rental-agreement-download-format' },
        { label: 'Consent Letter For GST Registration', url: 'https://vakilsearch.com/documents/rental-agreement-download-format' },
        { label: 'Rent Receipt', url: 'https://vakilsearch.com/documents/rental-agreement-download-format' },
        // Add more links as needed
      ],
    },
    {
      name: 'Bussiness Contracts',
      icon: 'https://assets.vakilsearch.com/header-desktop/Trademark.svg',
      links: [
        { label: 'Trademark Registration', url: 'https://vakilsearch.com/trademark-registration' },
        { label: 'Patent Filing', url: 'https://vakilsearch.com/patent' },
        { label: 'Non Disclosure Agreement NDA', url: 'https://vakilsearch.com/nondisclosure-agreement-nda' },
        { label: 'Service Level Agreement', url: 'https://vakilsearch.com/service-level-agreement' },
        { label: 'Franchise Agreement', url: 'https://vakilsearch.com/franchise-business-agreement' },
        { label: 'Master Service Agreement', url: 'https://vakilsearch.com/master-service-agreement' },
        { label: 'Shareholders Agreement', url: 'https://vakilsearch.com/shareholders-agreement' },
        { label: 'Joint Venture Agreement', url: 'https://vakilsearch.com/joint-venture-agreement' },
        { label: 'Founders Agreement', url: 'https://vakilsearch.com/founders-agreement' },
        { label: 'Vendor Agreement', url: 'https://vakilsearch.com/vendor-agreement' },
        { label: 'Consultancy Agreement', url: 'https://vakilsearch.com/consultancy-agreement' },
        { label: 'Memorandum of Understanding', url: 'https://vakilsearch.com/mou-memorandum-of-understanding' },
        { label: 'Succession Certificate', url: 'https://vakilsearch.com/succession-certificate' },
        { label: 'Scope of Work Agreement', url: 'https://vakilsearch.com/scope-of-work-draft-service-agreement-india' },
        { label: 'Share Purchase Agreement', url: 'https://vakilsearch.com/share-purchase-agreement' },
        { label: 'Relinquishment Deed', url: 'https://vakilsearch.com/relinquishment-deed' },
        { label: 'Legal Heir Certificate', url: 'https://vakilsearch.com/legal-heir-certificate' },
        { label: 'Trade License', url: 'https://vakilsearch.com/trade-license-registration' },
        { label: 'Noncompete Agreement', url: 'https://vakilsearch.com/noncompete-agreement' },
        { label: 'Finance Agreement', url: 'https://vakilsearch.com/finance-agreement' },
        { label: 'GDPR', url: 'https://vakilsearch.com/gdpr-compliance-protection-regulation' },
      ],
    },    
    {
      name: 'Personal & Family',
      icon: 'https://assets.vakilsearch.com/header-desktop/Trademark.svg',
      links: [
        { label: 'Will Registration', url: 'https://vakilsearch.com/trademark-registration' },
        { label: 'porbat of will', url: 'https://vakilsearch.com/patent' },
        { label: 'Power Of Attorney', url: 'https://vakilsearch.com/patent' },
      ],
    },
    {
      name: 'Real-Estate',
      icon: 'https://assets.vakilsearch.com/header-desktop/Trademark.svg',
      links: [
        { label: 'Rental Agrrement', url: 'https://vakilsearch.com/trademark-registration' },
        { label: 'Sale deed', url: 'https://vakilsearch.com/patent' },
        { label: 'gift deed', url: 'https://vakilsearch.com/patent' },
        { label: 'Rental Tanant Notice', url: 'https://vakilsearch.com/patent' },
      ],
    },
    {
      name: 'Notices',
      icon: 'https://assets.vakilsearch.com/header-desktop/Trademark.svg',
      links: [
        { label: 'Legal Notice', url: 'https://vakilsearch.com/trademark-registration' },
        { label: 'Legal Notice for Money Recovery', url: 'https://vakilsearch.com/patent' },
        { label: 'Legal Notice for recovery of dues', url: 'https://vakilsearch.com/patent' },
        { label: 'Cheque Bounce Notice', url: 'https://vakilsearch.com/patent' },
        { label: 'Legal Notice Under Consumer Protection Act', url: 'https://vakilsearch.com/patent' },
        // { label: 'Legal Notice for Money Recovery', url: 'https://vakilsearch.com/patent' },
      ],
    },
    {
      name: 'HR Policies',
      icon: 'https://assets.vakilsearch.com/header-desktop/Trademark.svg',
      links: [
        { label: 'Employment Agreement', url: 'https://vakilsearch.com/trademark-registration' },
        { label: 'ESOP', url: 'https://vakilsearch.com/patent' },
        { label: 'Payroll Maintenance', url: 'https://vakilsearch.com/patent' },
      ],
    },
    // Add other menu items
  ];
  

  // trademark & ip 

  trademark = [
    {
      name: 'Trademark Registration',
      icon: 'https://assets.vakilsearch.com/header-desktop/Copyright.svg',
      links: [
        { label: 'Trademark Search', url: 'https://vakilsearch.com/documents' },
        { label: 'Respond to TM Objection', url: 'https://vakilsearch.com/documents/rental-agreement-download-format' },
        { label: 'Well Known Trademark', url: 'https://vakilsearch.com/documents' },
        { label: 'Trademark Watch', url: 'https://vakilsearch.com/documents/rental-agreement-download-format' },
        { label: 'Trademark Renewal', url: 'https://vakilsearch.com/documents' },
        { label: 'Trademark Assignment', url: 'https://vakilsearch.com/documents/rental-agreement-download-format' },
        { label: 'USA Trademark', url: 'https://vakilsearch.com/documents' },
        { label: 'International Trademark', url: 'https://vakilsearch.com/documents/rental-agreement-download-format' },
        { label: 'Trademark Class Finder', url: 'https://vakilsearch.com/documents' },
      ],
    },
    {
      name: 'Copyright',
      icon: 'https://assets.vakilsearch.com/header-desktop/Trademark.svg',
      links: [
        { label: 'Copyright Registration', url: 'https://vakilsearch.com/trademark-registration' },
        { label: 'Copyright Music', url: 'https://vakilsearch.com/patent' },
      ],
    },    
    {
      name: 'Personal & Family',
      icon: 'https://assets.vakilsearch.com/header-desktop/Trademark.svg',
      links: [
        { label: 'Will Registration', url: 'https://vakilsearch.com/trademark-registration' },
        { label: 'porbat of will', url: 'https://vakilsearch.com/patent' },
        { label: 'Power Of Attorney', url: 'https://vakilsearch.com/patent' },
      ],
    },
    {
      name: 'Patent',
      icon: 'https://assets.vakilsearch.com/header-desktop/Trademark.svg',
      links: [
        { label: 'Indian Patent Search', url: 'https://vakilsearch.com/trademark-registration' },
        { label: 'Provisional Patent Application', url: 'https://vakilsearch.com/patent' },
        { label: 'gPatent Registration', url: 'https://vakilsearch.com/patent' },
      ],
    },
    {
      name: 'Infringment',
      icon: 'https://assets.vakilsearch.com/header-desktop/Trademark.svg',
      links: [
        { label: 'Copyright Infringement', url: 'https://vakilsearch.com/trademark-registration' },
        { label: 'Patent Infringement', url: 'https://vakilsearch.com/patent' },
        { label: 'Trademark Infringement', url: 'https://vakilsearch.com/patent' },
      ],
    },
    {
      name: 'Design Registration',
      icon: 'https://assets.vakilsearch.com/header-desktop/Trademark.svg',
      links: [
        { label: 'Logo Design', url: 'https://vakilsearch.com/trademark-registration' },
        { label: 'Design Registration', url: 'https://vakilsearch.com/patent' },
      ],
    },
    // Add other menu items
  ];
  
   onLoginClick() {
    // Simply call a method from the parent component via Input binding
  }
  selectedItem: any; // Default selected item
  
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
