import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-start-up',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './start-up.component.html',
  styleUrl: './start-up.component.scss'
})
export class StartUpComponent {

  title = 'Lawyer Join Start-Up Company';

  activeTab = 'ideation';

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  startupInfo = {
    image: 'https://ksandk.com/wp-content/uploads/594090-1.jpg',  // Replace with your image URL
    title: 'Start-Up India Initiative',
    description: 'Start-Up India is a flagship initiative of the Government of India to build a strong ecosystem for nurturing innovation and Startups in the country.',
    benefits: [
      'Tax Exemptions for Startups',
      'Ease of Doing Business',
      'Government Funding & Support',
      'Access to Market & Resources',
      'Mentorship & Networking Opportunities'
    ],
    ctaText: 'Learn More',
    ctaLink: 'https://www.startupindia.gov.in/'
  };

  constructor() { }

  ngOnInit(): void {
    // You can fetch data here if needed from an API
  }

  lawyerInfo = {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt5BjKx9pxct_3WYLypQsgLek2vjSXIYhhtQ&s',  // Replace with actual image URL
    title: 'Start-Up India for Lawyers',
    description: 'Start-Up India provides numerous opportunities for lawyers to establish their legal practices and firms, offering various financial, infrastructural, and mentoring support. Legal professionals can leverage these resources to expand their practice and network with other legal startups.',
    benefits: [
      'Access to Funding and Tax Benefits',
      'Government Subsidies for Legal Startups',
      'Special Mentorship Programs for Lawyers',
      'Easy Registration and Legal Compliance Support',
      'Networking with Industry Leaders and Investors'
    ],
    ctaText: 'Join Start-Up for Lawyers',
    ctaLink: 'https://www.startupindia.gov.in/'  // Link to Start-Up India website or relevant page
  };

  caseTitle: string = '';
  clientName: string = '';
  cases: { title: string, client: string }[] = [];

  addCase() {
    if (this.caseTitle.trim() && this.clientName.trim()) {
      this.cases.push({ title: this.caseTitle, client: this.clientName });
      this.caseTitle = '';
      this.clientName = '';
    }
  }
}
