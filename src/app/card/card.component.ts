import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  items = [
    {
      title: 'Company Registration',
      image: 'assets/images/company.png',
      price: 4999,
      link: '/pvt-ltd1-company'
    },
    {
      title: 'LLP Registration',
      image: 'assets/images/llp.png',
      price: 2999,
      link: '/llp-registration'
    },
    {
      title: 'Partnership Registration',
      image: 'assets/images/partner.png',
      price: 1999,
      link: '/partnership-registration'
    },
    {
      title: 'GST Registration',
      image: 'assets/images/gst.png',
      price: 999,
      link: '/gst-registration'
    },
    {
      title: 'GST Filing',
      image: 'assets/images/filing.png',
      price: 499,
      link: '/gst-filing'
    },
    {
      title: 'MSME Registration',
      image: 'assets/images/msme.png',
      price: 999,
      link: '/msme-registration'
    },
    {
      title: 'Start-up India',
      image: 'assets/images/startup.png',
      price: 600,
      link: '/startup-india'
    },
    {
      title: 'Virtual Accountant',
      image: 'assets/images/accountant.png',
      price: 4999,
      link: '/virtual-accountant'
    },
    {
      title: 'Web & Branding',
      image: 'assets/images/web.png',
      price: 4999,
      link: '/web-branding'
    }
  ];
  

}
