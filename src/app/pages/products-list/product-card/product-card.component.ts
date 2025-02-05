import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/product.models';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative">
    <div class="mx-auto">
        <img
          [src]="product().image"
          class="w-[200px] h-[100px] object-contain"
        />
      </div>
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ product().title }}</span>
        <span class="text-sm"> {{ '€' + product().price }}</span>
        <app-primary-button
          class="mt-3"
          label="Add to Cart"
          (btnClicked)="cartService.addToCart(product())"
        />
      </div>
      
      <!-- Rating Badge  -->
      <span 
        class="absolute top-2 left-3 text-sm font-bold px-2 py-1 rounded-lg text-white"
        [class.bg-green-500]="product().rating.rate > 4"
        [class.bg-yellow-500]="product().rating.rate >= 3 && product().rating.rate <= 4"
        [class.bg-red-500]="product().rating.rate < 3"
      >
        ⭐ {{ product().rating.rate }} / 5
      </span>
  `,
  styles: ``
})
export class ProductCardComponent {
  cartService = inject(CartService)
  product = input.required<Product>();
}
