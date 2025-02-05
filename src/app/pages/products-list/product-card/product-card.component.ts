import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/product.models';
import { CartService } from '../../../services/cart.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIf, NgClass } from '@angular/common';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, NgClass, PrimaryButtonComponent],
  template: `
    <mat-card class="bg-white !bg-white shadow-lg border rounded-xl p-6 flex flex-col gap-6 relative hover:shadow-xl transition-all duration-200">
      <mat-card-header>
        <div class="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-lg text-white shadow-md"
          [ngClass]="{
            'bg-green-500': product().rating.rate > 4,
            'bg-yellow-500': product().rating.rate >= 3 && product().rating.rate <= 4,
            'bg-red-500': product().rating.rate < 3
          }">
          ⭐ {{ product().rating.rate }} / 5
        </div>
      </mat-card-header>
      <mat-card-content>
        <div class="w-full flex justify-center">
          <img mat-card-image [src]="product().image" class="w-[180px] h-[180px] object-cover rounded-md" [alt]="product().title" />
        </div>
        <div class="flex flex-col text-center">
          <h3 class="text-lg font-bold text-gray-800 truncate w-full">{{ product().title }}</h3>
          <p class="text-md font-semibold text-gray-700">€{{ product().price }}</p>
        </div>
      </mat-card-content>
      <mat-card-actions class="flex justify-center">

        <app-primary-button
        class="mt-4 mx-auto"
          label="Add to Cart"
          (btnClicked)="cartService.addToCart(product())"
        />
      </mat-card-actions>
    </mat-card>
  `
})
export class ProductCardComponent {
  cartService = inject(CartService);
  product = input.required<Product>();
}
