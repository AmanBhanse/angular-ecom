import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [PrimaryButtonComponent, NgIf],
  template: `
    <div class="bg-slate-100 p-6 rounded-xl shadow-lg border w-80">
      <h2 class="text-xl font-bold uppercase text-gray-800 mb-4">Order Summary</h2>
      <div *ngIf="total() > 0; else emptyCart" class="flex flex-col gap-4">
        <div class="flex justify-between text-lg font-medium text-gray-700">
          <span>Total</span>
          <span class="font-bold">€{{ total() }}</span>
        </div>
        <app-primary-button class="w-full" label="Proceed to Checkout" />
      </div>
      <ng-template #emptyCart>
        <p class="text-center text-gray-500 italic">Your cart is empty.</p>
      </ng-template>
    </div>
  `,
})
export class OrderSummaryComponent {
  cartService = inject(CartService);

  total = computed(() => 
    this.cartService.cart().reduce((sum, item) => sum + item.price, 0)
  );
}
