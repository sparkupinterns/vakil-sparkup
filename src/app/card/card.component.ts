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
    { title: 'Company Registration', image: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/private-limited-company-4852104-4026600.png?f=webp&w=256', price: 4999, link: '/pvt-ltd1-company' },
    { title: 'LLP Registration', image: '/assets/lr_img.png', price: 2999, link: '/llp1' },
    { title: 'Partnership Registration', image: '/assets/prtner.png', price: 1999, link: '/opc1' },
    { title: 'GST Registration', image: '/assets/images/gst.png', price: 999, link: '/gst-registration' },
    { title: 'GST Filing', image: '/assets/images/filling.png', price: 499, link: '/gst-filling' },
    { title: 'MSME Registration', image: '/assets/images/msme.png', price: 999, link: '/msme' },
    { title: 'Start-up India', image: '/assets/images/strup.png', price: 600, link: '/starup1-india' },
    { title: 'Virtual Accountant', image: '/assets/images/account.png', price: 4999, link: '/virtual-accountant' },
    { title: 'Web & Branding', image: '/assets/images/web.png', price: 4999, link: '/web-branding' }
  ];

  itemsChunks: any[] = [];

  constructor() {
    this.itemsChunks = this.chunkArray(this.items, 3);
  }

  chunkArray(arr: any[], size: number) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }

}
