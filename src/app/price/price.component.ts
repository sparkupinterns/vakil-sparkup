import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-price',
  imports: [CommonModule],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent {

  selectedPlan: string | null = null;

  // Your plan-wise UPI info
  planPaymentInfo: Record<string, { upiId: string; qrImage: string }> = {
    starter: {
      upiId: 'merchant1572208.augp@aubank',
      qrImage: 'https://via.placeholder.com/150?text=Starter+QR'
    },
    standard: {
      upiId: 'merchant1572208.augp@aubank',
      qrImage: 'https://via.placeholder.com/150?text=Standard+QR'
    },
    pro: {
      upiId: 'merchant1572208.augp@aubank',
      qrImage: 'https://via.placeholder.com/150?text=Pro+QR'
    }
  };

  toggleUPI(plan: string) {
    this.selectedPlan = this.selectedPlan === plan ? null : plan;
  }
}
