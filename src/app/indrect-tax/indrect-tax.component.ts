import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-indrect-tax',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './indrect-tax.component.html',
  styleUrl: './indrect-tax.component.scss'
})
export class IndrectTaxComponent {


  quickLinks = [

    {
      url: 'https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/29/full/1696008957-6591.jpg?im=FeatureCrop,size=(826,465)',
      imgSrc: 'https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/29/full/1696008957-6591.jpg?im=FeatureCrop,size=(826,465)',
      alt: 'Personal Tax Filing',
      title: 'Personal Tax Filing',
      inlineText: `
        Personal tax filing is an essential process for individuals to report their income and calculate the taxes owed. It is a way to ensure that individuals comply with the tax laws of the country and contribute their fair share to the government’s revenue. In India, taxpayers are required to file their returns annually for each financial year. 
        
        Here is a detailed explanation of the process and why personal tax filing is necessary:
        
        1. **Why File Taxes?**
        Filing taxes helps the government in managing the nation's budget, which funds essential public services such as healthcare, education, infrastructure, and more.
        
        2. **Who Needs to File?**
        Any individual whose total income exceeds the taxable limit is required to file an income tax return. However, some exemptions apply, and these limits can vary depending on the person’s age and income.
        
        3. **How to File Taxes?**
        Taxpayers can file their taxes online through the Income Tax Department’s portal or through certified tax professionals. It requires gathering documents like Form 16, bank statements, investment receipts, etc.
        
        4. **Documents Required:**
        - Form 16 (TDS Certificate from the employer)
        - Bank Statements
        - Investment Proofs (for tax exemptions)
        - Previous Year's Tax Returns (if applicable)
        - Details of other sources of income (freelance work, side businesses, etc.)
        
        5. **Filing Methods:**
        There are two ways to file taxes in India: 
        - **Online Filing**: This method involves submitting the tax return electronically via the Income Tax Department's e-filing website. 
        - **Offline Filing**: This method is available for individuals who do not wish to file electronically. It involves manually filling out paper forms and submitting them to the tax authorities.
        
        6. **Types of Returns:**
        There are several types of income tax returns (ITR forms), depending on the nature of income:
        - **ITR-1**: For individuals with salary income, pension, or interest income.
        - **ITR-2**: For individuals or Hindu Undivided Families (HUF) with income from sources other than business or profession.
        - **ITR-3**: For individuals with income from business or profession.
        
        7. **Tax Deductions and Exemptions:**
        Individuals can claim deductions on income under various sections such as:
        - Section 80C: Investments in Provident Fund (PF), Life Insurance Premium, etc.
        - Section 80D: Premium for Medical Insurance.
        - Section 10(13A): House Rent Allowance (HRA) Exemption.
        
        8. **Due Date:**
        The due date for filing returns is usually July 31st of the assessment year. However, this deadline may be extended by the government under special circumstances.
        
        9. **Late Filing Penalty:**
        If you miss the due date, you may have to pay a penalty for late filing. The penalty amount can vary depending on how late you file and the amount of tax due.
        
        10. **Refunds:**
        If the amount of tax paid exceeds the actual tax liability, taxpayers are eligible for a refund. The Income Tax Department processes these refunds electronically to your bank account.
        
        Tax filing is an essential responsibility, and filing on time ensures that you stay compliant with the tax laws. Below are links to more forms and instructions to help guide you through the process:
        `
        
    },
    {
      "url": "https://www.incometax.gov.in/iec/foportal/tax-notice",
      "imgSrc": "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
      "alt": "Tax Notice",
      "title": "Tax Notice",
      "inlineText": "Tax notices are official documents sent by the Income Tax Department to taxpayers, notifying them of discrepancies or issues regarding their tax filings. These notices can be received for various reasons, such as errors in your filed returns, incorrect claims, or outstanding dues. It is important to carefully review the notice to understand the issue, whether it involves a demand for additional tax, a requirement for more information, or a clarification request from the tax authorities. If you receive a tax notice, you must respond in the stipulated timeframe, either by submitting the requested documents or by making any necessary payments to avoid penalties. Taxpayers can use the income tax portal to view their notices online, making it easy to track the status and resolve any issues promptly. Depending on the notice type, the tax department may request further details, a rectification of errors, or even a personal meeting to clarify matters. In case of confusion or complex issues, seeking professional tax assistance can ensure that your response is appropriate. In some cases, taxpayers may challenge the notice if they believe there has been a mistake or misinterpretation of the law. Knowing the grounds for contesting a tax notice can help you make an informed decision. Always ensure that the information you provide to the tax department is accurate and complete to avoid unnecessary complications. Filing the response within the required deadline is crucial to avoid penalties and to ensure that your case is handled efficiently. For more details on how to respond to tax notices, visit the Income Tax website, where you can find step-by-step instructions and guidance."
    },
    {
      "url": "https://www.incometax.gov.in/iec/foportal/tds-filing",
      "imgSrc": "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
      "alt": "TDS Filing",
      "title": "TDS Filing",
      "inlineText": "TDS (Tax Deducted at Source) is a method of tax collection where the payer deducts tax at the time of making payments, such as salaries, rent, or professional fees. TDS is applicable to various types of payments, and the deducted tax is deposited with the government. As a taxpayer, if you have had TDS deducted from your income, you are required to file TDS returns periodically to report the tax deducted and deposited. Filing TDS returns is crucial to ensure that the tax deducted is properly credited to your account and that the correct amount is reflected in your tax records. TDS filing involves submitting a return with details of the TDS deducted and deposited, including information about the payer, payee, and the amount of tax deducted. This helps the tax authorities track the taxes collected at the source and ensures that there is no discrepancy between the amounts paid and the deductions. For employers or entities responsible for deducting TDS, it is essential to file the TDS return regularly to avoid penalties or fines. Failing to file TDS returns on time can lead to interest charges and penalties, which could increase the overall tax burden. The Income Tax Department provides an online platform to file TDS returns, making it more convenient and efficient. You can file the return online, check the status, and download receipts. Ensure that the TDS returns are filed by the due dates to avoid any delays. There are different forms for filing TDS returns, depending on the type of payments made and the entity filing. It is essential to choose the correct form to ensure that the return is valid. Regular filing of TDS returns helps in maintaining accurate tax records, and it also makes it easier when filing your annual income tax return, as the TDS deducted during the year is already reflected in your Form 26AS."
    },
    {
      "url": "https://www.incometax.gov.in/iec/foportal/itr-1-return",
      "imgSrc": "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
      "alt": "ITR-1 Return",
      "title": "ITR-1 Return",
      "inlineText": "ITR-1 Return for tax filing is a simplified form used by individuals who earn income from sources like salary, pension, and property. --- BORDER --- It is one of the easiest forms to file for people with basic income. --- BORDER --- You can file this form if you have no income from business or capital gains. --- BORDER --- The form collects data such as salary income, deductions, and tax paid. --- BORDER --- It’s necessary to include deductions under sections such as 80C, 80D, and others for eligible investments. --- BORDER --- You need your Form 16, which your employer will provide, to fill this out accurately. --- BORDER --- After filing, the Income Tax Department will process your return and issue any refunds due. --- BORDER --- Filing this return accurately helps avoid penalties or delays. --- BORDER --- You can file ITR-1 online through the Income Tax Department’s portal, and it is the most common return filed by taxpayers. --- BORDER --- ITR-1 is ideal for people with straightforward financial situations, as it allows for quick processing and easy filing. --- BORDER --- Make sure to file before the deadline to avoid penalties. --- BORDER --- If you have any doubts, consult a tax professional for assistance. --- BORDER --- Once filed, track your return status via the portal for any updates. --- BORDER --- Always double-check the details before submitting the form to avoid errors. --- BORDER --- Ensure that you include all sources of income, even if they are small amounts. --- BORDER --- You can claim deductions for investments in PPF, life insurance, and more, to reduce your taxable income. --- BORDER --- By filing on time, you avoid interest charges or penalties for late submissions. --- BORDER --- It's essential to ensure all personal details, such as PAN and bank details, are correct while filing. --- BORDER --- After filing ITR-1, keep a copy of the acknowledgment for your records. --- BORDER --- This is a simple and effective way to comply with the law and manage your taxes properly."
    },
    {
      "url": "https://www.incometax.gov.in/iec/foportal/itr-2-return",
      "imgSrc": "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
      "alt": "ITR-2 Return",
      "title": "ITR-2 Return",
      "inlineText": "ITR-2 Return is designed for individuals and Hindu Undivided Families (HUFs) who have income from sources other than business. --- BORDER --- If you earn capital gains or have income from multiple sources like house property or foreign income, you need to file ITR-2. --- BORDER --- ITR-2 also applies to individuals receiving income from salaries, pensions, or other sources. --- BORDER --- For capital gains, you will need to fill out detailed sections to report the sale of property, shares, or other assets. --- BORDER --- The form also allows for reporting foreign income or assets, which must be disclosed accurately. --- BORDER --- Individuals with rental income from property need to include it in the income section of the form. --- BORDER --- The ITR-2 form requires more information than ITR-1, so you should gather all necessary documents, such as sale deeds and foreign income statements. --- BORDER --- Deductions for investments in PPF, LIC, or other government-approved schemes can also be claimed in ITR-2. --- BORDER --- If you have incurred a loss in capital gains or rental income, you can carry forward this loss to set off against future income. --- BORDER --- File ITR-2 if you have income from multiple properties or have investments that are not covered under ITR-1. --- BORDER --- Ensure that you report every income stream accurately to avoid discrepancies or potential audits. --- BORDER --- Before filing, double-check all forms, such as Form 16 or other relevant income documents. --- BORDER --- It is recommended to file ITR-2 before the deadline to avoid paying late fees or penalties. --- BORDER --- As a taxpayer, it's important to keep track of your filed returns for future reference. --- BORDER --- If you are unsure about filing ITR-2, it is always advisable to consult a tax expert for accurate guidance."
    },
    {
      "url": "https://www.incometax.gov.in/iec/foportal/itr-3-return",
      "imgSrc": "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
      "alt": "ITR-3 Return",
      "title": "ITR-3 Return",
      "inlineText": "ITR-3 Return is for individuals and HUFs who earn income from business or profession. --- BORDER --- It is essential for people who have a business, profession, or income from freelance work. --- BORDER --- This form requires detailed reporting of business income and expenses. --- BORDER --- Individuals filing ITR-3 can claim deductions for business-related expenses like rent, utilities, and salaries. --- BORDER --- Make sure to maintain accurate records of all income and expenses for business purposes. --- BORDER --- You may also be eligible for tax deductions under section 80G for charitable donations. --- BORDER --- If you have income from business, ITR-3 is the correct form for you, and you should file it on time to avoid penalties. --- BORDER --- The form also includes sections for reporting capital gains, rental income, and other sources of income. --- BORDER --- When filing ITR-3, make sure to include any loss from business operations to carry forward and set off against future income. --- BORDER --- Carefully report any deductions or exemptions you're eligible for, as mistakes can delay your return processing. --- BORDER --- It is always helpful to consult a tax expert when filing ITR-3 to ensure accurate reporting of business income. --- BORDER --- Businesses should keep detailed records of their books and financials to ensure transparency when filing their return. --- BORDER --- Filing ITR-3 helps avoid late fees and penalties while ensuring you meet all tax obligations. --- BORDER --- Once you file, you can track your return status and stay updated with any notices from the Income Tax Department."
    },
    {
      "url": "https://www.incometax.gov.in/iec/foportal/itr-4-return",
      "imgSrc": "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
      "alt": "ITR-4 Return",
      "title": "ITR-4 Return",
      "inlineText": "ITR-4 Return is for individuals and HUFs having income from presumptive business. --- BORDER --- It is applicable for individuals who operate small businesses or work on a freelance basis. --- BORDER --- If your income is derived from a business or profession and you opt for the presumptive taxation scheme, you can file ITR-4. --- BORDER --- The scheme under section 44AD simplifies the reporting process for small businesses. --- BORDER --- Under the presumptive tax scheme, you don’t have to maintain detailed books of account. --- BORDER --- However, you will need to declare your income as per the scheme's prescribed rates. --- BORDER --- Filing ITR-4 requires you to report your gross receipts and income from the business, even if it's a small-scale operation. --- BORDER --- This form also includes sections for reporting other income, such as salary or rental income. --- BORDER --- It's important to accurately report all sources of income, even if you don't think they are significant. --- BORDER --- Ensure that you meet the requirements of the presumptive taxation scheme before filing ITR-4. --- BORDER --- If you're unsure whether to file ITR-4 or ITR-3, consult a tax professional for guidance. --- BORDER --- Once filed, you can track your return and check for any issues or discrepancies. --- BORDER --- Filing on time helps ensure you avoid any penalties for late submission."
    },
    {
      "url": "https://www.incometax.gov.in/iec/foportal/itr-5-return",
      "imgSrc": "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
      "alt": "ITR-5 Return",
      "title": "ITR-5 Return",
      "inlineText": "ITR-5 is filed by firms, LLPs, AOPs, BOIs, and other similar entities. --- BORDER --- If your business is structured as a partnership, LLP, or any other entity other than an individual, you need to file ITR-5. --- BORDER --- This form is used for entities that earn income from business operations, and it includes detailed sections for reporting income and expenses. --- BORDER --- Ensure that all business incomes, deductions, and liabilities are accurately reported in the form. --- BORDER --- It also includes sections for reporting capital gains, rental income, and other sources of income. --- BORDER --- Businesses can claim deductions for operating expenses, depreciation, and other tax-deductible expenses. --- BORDER --- The form is more complex than individual returns, so businesses should ensure all relevant financial statements are available before filing. --- BORDER --- ITR-5 also includes reporting requirements for foreign income and assets, making it ideal for businesses with cross-border operations. --- BORDER --- Once the return is filed, track its status to check for any discrepancies or notices. --- BORDER --- Ensure you file ITR-5 before the deadline to avoid penalties or interest charges. --- BORDER --- If you're unsure about any section of ITR-5, consult with a tax expert for detailed guidance."
    },
    {
      "url": "https://www.incometax.gov.in/iec/foportal/itr-6-return",
      "imgSrc": "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
      "alt": "ITR-6 Return",
      "title": "ITR-6 Return",
      "inlineText": "ITR-6 is for companies that do not claim exemptions under section 11. --- BORDER --- If your company is not claiming exemptions under section 11 of the Income Tax Act, you must file ITR-6. --- BORDER --- This form is used for companies that earn income from business activities and need to report their income, expenses, and tax liabilities. --- BORDER --- Companies filing ITR-6 must include detailed information on their revenue, expenses, and tax paid. --- BORDER --- The form also has sections for capital gains, business losses, and deductions. --- BORDER --- Ensure your company’s financial records are complete and accurate before filing this form. --- BORDER --- You will need to provide supporting documents, including balance sheets, profit & loss statements, and other financial statements. --- BORDER --- Once filed, track your return and any correspondence from the Income Tax Department. --- BORDER --- File ITR-6 on time to avoid penalties or interest for late filing. --- BORDER --- Consult a tax professional for detailed guidance if you’re unsure about the filing requirements for your company."
    },
    {
      "url": "https://www.incometax.gov.in/iec/foportal/itr-7-return",
      "imgSrc": "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
      "alt": "ITR-7 Return",
      "title": "ITR-7 Return",
      "inlineText": "ITR-7 is for persons or entities claiming exemptions under sections 11, 12, etc. --- BORDER --- If your organization is claiming exemptions, you need to file ITR-7. --- BORDER --- This return is applicable to trusts, political parties, and other entities claiming exemptions. --- BORDER --- ITR-7 requires the reporting of income, expenditures, and details about the exemptions being claimed. --- BORDER --- Organizations need to ensure they comply with all rules under the Income Tax Act for claiming exemptions. --- BORDER --- Complete and accurate documentation is required for reporting the exempted income in ITR-7. --- BORDER --- It is necessary to file ITR-7 on time to ensure your entity maintains its tax-exempt status. --- BORDER --- Keep track of your filing status and any notices sent by the Income Tax Department."
    },
    {
      "url": "https://www.incometax.gov.in/iec/foportal/itr-8-return",
      "imgSrc": "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
      "alt": "ITR-8 Return",
      "title": "ITR-8 Return",
      "inlineText": "ITR-8 is for organizations claiming relief under section 35AC. --- BORDER --- The return needs to be filed by institutions eligible for claiming exemptions or deductions under section 35AC."
    },
    {
      url: 'https://www.incometax.gov.in/iec/foportal/downloads/income-tax-forms/itr-1',
      imgSrc: 'https://cdn-icons-png.flaticon.com/512/2910/2910791.png',
      alt: 'ITR-9 Form',
      title: 'ITR-9 Form',
      inlineText: `
        ITR-1, also known as "Sahaj," is the Income Tax Return form designed for individual taxpayers who earn income through salary, pension, or income from one house property and other sources like interest income. This form is the simplest and most commonly used by taxpayers in India.
        
        **Eligibility Criteria for ITR-1 (Sahaj):**
        1. The taxpayer must be an individual. <br>
        2. Income should be from salary, pension, or one house property. <br>
        3. Total income should not exceed Rs. 50 lakh.
        4. Income should not include income from business or profession.
        
        **Key Sections in ITR-1 Form:**
        
        1. **Personal Information:**
        - Name, Address, PAN, and Contact Details.
        - Residential status (Resident or Non-resident).
        
        2. **Income from Salary or Pension:**
        - Salary income, deductions, and details of employer.
        - Pension income received from government or any other source.
        
        3. **Income from House Property:**
        - Income from rent or other sources related to house property.
        - Deduction for home loan interest under Section 24(b).
        
        4. **Other Sources of Income:**
        - Interest from savings bank accounts, fixed deposits, etc.
        - Income from lottery, dividends, or winning from games.
        
        5. **Tax Computation and Deductions:**
        - Deductions available under sections like 80C (for PF, PPF, Life Insurance, etc.), 80D (for medical insurance), and other exemptions.
        - Details of the TDS (Tax Deducted at Source) on salary or income.
        
        6. **Tax Payable:**
        - The total tax payable after considering deductions and exemptions.
        - You may need to pay the balance tax due or claim a refund.
        
        7. **Verification and Signature:**
        - The taxpayer must sign the form electronically (for e-filing) or manually.
        - Provide the necessary bank details for refunds.
        
        **Steps to File ITR-1:**
        
        1. Collect necessary documents like Form 16 (TDS Certificate), bank statements, and receipts for deductions.
        2. Visit the Income Tax e-filing website.
        3. Choose ITR-1 from the list of available forms.
        4. Enter all income details and deductions in the respective sections.
        5. Validate the form and calculate the tax payable or refundable.
        6. Submit the form and e-verify it using Aadhaar OTP or EVC (Electronic Verification Code).
        
        Filing ITR-1 is relatively easy and helps taxpayers comply with the Income Tax Act of India. Make sure to keep all the necessary documents handy to avoid errors.
        `
    },
    {
      url: 'https://www.incometax.gov.in/iec/foportal/downloads/income-tax-forms/itr-1',
      imgSrc: 'https://cdn-icons-png.flaticon.com/512/2910/2910791.png',
      alt: 'ITR-10 Form',
      title: 'ITR-10 Form',
      inlineText: `
        ITR-1, also known as "Sahaj," is the Income Tax Return form designed for individual taxpayers who earn income through salary, pension, or income from one house property and other sources like interest income. This form is the simplest and most commonly used by taxpayers in India.
        
        **Eligibility Criteria for ITR-1 (Sahaj):**
        1. The taxpayer must be an individual. <br>
        2. Income should be from salary, pension, or one house property. <br>
        3. Total income should not exceed Rs. 50 lakh.
        4. Income should not include income from business or profession.
        
        **Key Sections in ITR-1 Form:**
        
        1. **Personal Information:**
        - Name, Address, PAN, and Contact Details.
        - Residential status (Resident or Non-resident).
        
        2. **Income from Salary or Pension:**
        - Salary income, deductions, and details of employer.
        - Pension income received from government or any other source.
        
        3. **Income from House Property:**
        - Income from rent or other sources related to house property.
        - Deduction for home loan interest under Section 24(b).
        
        4. **Other Sources of Income:**
        - Interest from savings bank accounts, fixed deposits, etc.
        - Income from lottery, dividends, or winning from games.
        
        5. **Tax Computation and Deductions:**
        - Deductions available under sections like 80C (for PF, PPF, Life Insurance, etc.), 80D (for medical insurance), and other exemptions.
        - Details of the TDS (Tax Deducted at Source) on salary or income.
        
        6. **Tax Payable:**
        - The total tax payable after considering deductions and exemptions.
        - You may need to pay the balance tax due or claim a refund.
        
        7. **Verification and Signature:**
        - The taxpayer must sign the form electronically (for e-filing) or manually.
        - Provide the necessary bank details for refunds.
        
        **Steps to File ITR-1:**
        
        1. Collect necessary documents like Form 16 (TDS Certificate), bank statements, and receipts for deductions.
        2. Visit the Income Tax e-filing website.
        3. Choose ITR-1 from the list of available forms.
        4. Enter all income details and deductions in the respective sections.
        5. Validate the form and calculate the tax payable or refundable.
        6. Submit the form and e-verify it using Aadhaar OTP or EVC (Electronic Verification Code).
        
        Filing ITR-1 is relatively easy and helps taxpayers comply with the Income Tax Act of India. Make sure to keep all the necessary documents handy to avoid errors.
        `
    },
    {
      "url": "https://www.incometax.gov.in/iec/foportal/income-tax",
      "imgSrc": "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
      "alt": "Income Tax",
      "title": "Income Tax",
      "inlineText": "Income tax is the tax levied by the government on the income earned by individuals, companies, and other entities. It is one of the most important forms of revenue for governments around the world. In India, income tax is governed by the Income Tax Act, 1961, and it applies to income earned by individuals, businesses, and organizations. Income tax is progressive in nature, meaning the rate of tax increases as the income level rises. The tax rates vary depending on the income level and the category of taxpayer, such as individuals, firms, companies, etc. Income tax is applicable to various types of income, including salary income, business income, capital gains, rental income, and other sources of income. Taxpayers are required to file their returns annually, reporting their income and the tax paid during the financial year. The tax is collected through various methods, including tax deduction at source (TDS), advance tax, and self-assessment. The government provides various exemptions, deductions, and rebates under the Income Tax Act, such as those for investments in specified savings instruments, insurance premiums, and charitable donations. These provisions help reduce the overall tax liability of taxpayers. Individuals and businesses must ensure that they comply with income tax laws and file their returns on time. Failing to file tax returns or making incorrect claims can result in penalties, interest, and other legal consequences. Taxpayers can file their income tax returns online using the government’s official portal, which simplifies the process and allows for faster processing and refunds. The portal provides various services such as income tax calculators, tools for filing returns, and information about the latest tax laws. The tax department also offers help through customer support services to answer questions and guide taxpayers through the filing process."
    }
    ]
    
    selectedLink: any = null;
  formVisible: boolean = false;

  selectLink(link: any): void {
    this.selectedLink = link;
    this.formVisible = false; // Reset form visibility when a new link is selected
  }

  openForm(): void {
    this.formVisible = true; // Show the form modal
  }

  closeForm(): void {
    this.formVisible = false; // Close the form modal
  }

  taxSections = [
    {
      section: '80C',
      purpose: 'Deduction up to ₹1.5 lakh for investments like LIC, PPF, ELSS, Home Loan principal, etc.',
      eligible: 'Individuals & HUFs'
    },
    {
      section: '80D',
      purpose: 'Deduction for health insurance premiums (₹25,000 to ₹1 lakh depending on age)',
      eligible: 'Individuals & HUFs'
    },
    {
      section: '80E',
      purpose: 'Interest on education loan – fully deductible with no cap',
      eligible: 'Individuals'
    },
    {
      section: '24(b)',
      purpose: 'Deduction on home loan interest up to ₹2 lakh',
      eligible: 'Individuals'
    },
    {
      section: '10(14)',
      purpose: 'Tax-free allowances like HRA, LTA, and other reimbursements',
      eligible: 'Salaried Employees'
    },
    {
      section: '80G',
      purpose: 'Deduction for donations to charitable institutions (50% or 100%)',
      eligible: 'All taxpayers'
    },
    {
      section: '87A',
      purpose: 'Rebate up to ₹12,500 for income below ₹5 lakh',
      eligible: 'Resident Individuals'
    }
  ];

  formVisible1: boolean = true; // Form section is always visible now
  thankYouVisible: boolean = false; // Initially, the thank you section is hidden
  user = {
    name: '',
    phoneNumber: '',
    email: ''
  };
  phoneError: string = '';
  emailError: string = '';

  // Toggle form visibility
  toggleForm() {
    this.formVisible = !this.formVisible;
    this.thankYouVisible = false; // Hide the thank you message when toggling the form
  }

  // Subscribe function
  subscribe() {
    // Validate phone number and email
    if (!this.user.name || !this.user.phoneNumber || !this.user.email) {
      if (!this.user.phoneNumber) {
        this.phoneError = 'Phone number is required';
      } else {
        this.phoneError = '';
      }
      if (!this.user.email) {
        this.emailError = 'Email is required';
      } else {
        this.emailError = '';
      }
      return;
    }

    // Hide form and show the thank you message after subscription
    this.formVisible = false;
    this.thankYouVisible = true;
  }
}
