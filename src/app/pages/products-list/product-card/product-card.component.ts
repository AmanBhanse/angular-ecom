import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/product.models';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-white shadow-lg border rounded-xl p-6 flex flex-col gap-6 relative hover:shadow-xl transition-all duration-200">
      <div class="w-full flex justify-center">
        <img
          [src]="product().image"
          class="w-[180px] h-[180px] object-cover rounded-md"
          alt="{{ product().title }}"
        />
      </div>
      <div class="flex flex-col text-center">
        <span class="text-lg font-bold text-gray-800 truncate w-full">{{ product().title }}</span>
        <span class="text-md font-semibold text-gray-700">€{{ product().price }}</span>
        <app-primary-button
          class="mt-4 mx-auto"
          label="Add to Cart"
          (btnClicked)="cartService.addToCart(product())"
        />
      </div>
      
      <!-- Rating Badge -->
      <span 
        class="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-lg text-white shadow-md"
        [class.bg-green-500]="product().rating.rate > 4"
        [class.bg-yellow-500]="product().rating.rate >= 3 && product().rating.rate <= 4"
        [class.bg-red-500]="product().rating.rate < 3"
      >
        ⭐ {{ product().rating.rate }} / 5
      </span>
    </div>
  `,
  styles: ``
})
export class ProductCardComponent {
  cartService = inject(CartService)
  product = input.required<Product>();
}
