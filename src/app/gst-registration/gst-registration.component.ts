import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-gst-registration',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './gst-registration.component.html',
  styleUrl: './gst-registration.component.scss'
})
export class GstRegistrationComponent {

  fyYear: string = '2024-25'; // Dynamic value
  buttonStyle = {
    padding: '17px 27.5px',
    color: '#fff',
    backgroundColor: '#1678fb',
    width: '250px',
    textAlign: 'center',
    borderRadius: '8px',
    fontWeight: '700'
  };

  gstForm!: FormGroup; // Notice the '!' indicating definite assignment

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.gstForm = this.fb.group({
      businessName: ['', Validators.required],
      businessType: ['', Validators.required],
      annualTurnover: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      gstin: ['', Validators.pattern('^[0-9]{15}$')],
      address: [''],
      contactPerson: [''],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactPhone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  onSubmit() {
    if (this.gstForm.valid) {
      // Handle form submission
      console.log(this.gstForm.value);
    } else {
      // Mark all fields as touched to display validation errors
      this.gstForm.markAllAsTouched();
    }
  }

    // Define the FAQ array with question, answer, and isOpen property to control the accordion state
    faqs = [
      {
        question: 'Is GST registration mandatory?',
        answer: 'Yes, you are required to obtain GST registration once your turnover exceeds the specified threshold limits. Click on the hyperlink to read more about the latest GST registration limits.',
        isOpen: false
      },
      {
        question: 'Am I allowed to submit applications for multiple GST registrations?',
        answer: 'If a business operates from more than one state, the taxpayer should obtain a separate GST registration for each state. For instance, If an automobile company sells in Karnataka and Tamil Nadu, he has to apply for separate GST registration in Karnataka and Tamilnadu respectively.',
        isOpen: false
      },
      {
        question: 'Can I get multiple GST registrations within a state?',
        answer: 'Yes, a business can apply for any number of GST registrations within a state. The procedure of allocating multiple GST registrations only for different business verticals within a state has been removed for ease of business.',
        isOpen: false
      },
      {
        question: 'Who can register for the composition scheme under GST?',
        answer: 'A trader whose aggregate turnover is below Rs 1.5 crore can opt for the Composition scheme. In the case of North-Eastern states and Himachal Pradesh, the present limit is Rs.75 lakh. Click here to know all about the Composition scheme.',
        isOpen: false
      },
      {
        question: 'What turnover should be considered for the GST registration threshold limit?',
        answer: 'Aggregate turnover should be taken into consideration to calculate turnover. Aggregate turnover means the aggregate value of all taxable supplies excluding inward supplies liable to reverse charge, but including exempt supplies, exports of goods or services or both and inter-state supplies of persons having the same PAN, to be computed on an all-India basis. It is to be noted that CGST, SGST, UTGST, IGST and cess should be excluded while calculating aggregate turnover.',
        isOpen: false
      },
      {
        question: 'What is a GST identification number or GSTIN?',
        answer: 'Each taxpayer is allotted a PAN-based 15-digit Goods and Services Taxpayer Identification Number (GSTIN) in every state that they operate. It is obtained as a part of the GST registration process. Once the GST registration application is verified and passed by the GST officer, a unique GSTIN is assigned to the business.',
        isOpen: false
      },
      {
        question: 'How long can I wait to register under GST?',
        answer: 'Any person must get a GST registration within 30 days from the date when they become liable to obtain GST registration.',
        isOpen: false
      },
      {
        question: 'What if the GST registration application gets rejected?',
        answer: 'If an applicant finds that their GST registration application was rejected, they will get an option to reply to the rejection letter. However, if they want to make a new GST registration application, then they must wait for a final rejection, which will take about 10 days.',
        isOpen: false
      },
      {
        question: 'Should I need the PAN card for registering under GST?',
        answer: 'Yes, a PAN card is compulsory to obtain GST registration. If one doesn’t have the PAN card, they need to obtain one before applying for the GST registration, except in the case of TDS registration under GST which is allowed with a TAN..',
        isOpen: false
      },
      {
        question: 'What happens after obtaining the GST registration?',
        answer: 'After obtaining the GST registration successfully, the taxpayer will get a GST registration certificate in Form GST REG-06 and gets a valid GST Identification Number. One will be eligible to avail input tax credit, raise GST-compliant invoices and must start filing GST returns monthly or quarterly, as the case may be.s',
        isOpen: false
      },
      {
        question: 'Who is eligible for GST registration?',
        answer: 'GST registration can be obtained on a voluntary basis as well. Apart from that, GST registration is mandated for certain businesses listed in CGST Section 24. Also, GST registration has to be obtained by businesses and professionals wherever the annual turnover exceeds the threshold limit defined by the GST law.',
        isOpen: false
      },
      {
        question: 'Is GST registration free?',
        answer: 'No fees is charged on the GST portal for an applicant of GST registration. In case where taxpayer doesn obtain GST registration where it is compulsory by law, then they can be subjected to penalties for failure to obtain GST registration.',
        isOpen: false
      },
      {
        question: 'What is the turnover limit for GST registration?',
        answer: 'Businesses with turnover above the threshold limit of Rs.40 lakh or Rs.20 lakh or Rs.10 lakh, as the case may be, must obtain GST registration.',
        isOpen: false
      },
      {
        question: 'What are the different types of GST registration?',
        answer: 'Special Economic Zone (SEZ) Developer',
        isOpen: false
      },
      {
        question: 'What happens if I don’t register for GST?',
        answer: 'The penalty for not taking GST registration is 10% of the tax due or Rs. 10,000, whichever is higher.',
        isOpen: false
      },
      {
        question: 'Can individuals register for GST?',
        answer: 'Individuals making supply of goods or services can also obtain GST registration either voluntarily where turnover doesn exceed the specified threshold limit or wherever mandated by the CGST Section 24 or whose annual turnover exceeds a specified threshold must register for GST.',
        isOpen: false
      },
    ];
  
    // Function to toggle the isOpen property for a FAQ item
    toggleFaq(index: number) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen;
    }
    
}
