import { Component, signal, OnInit } from '@angular/core';
import { Product } from '../../models/product.models';
import { ProductCardComponent } from "./product-card/product-card.component";
import {testProducts} from "./test-data"

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
    @for (product of products(); track product.id) {
      <div>
        <app-product-card [product]='product' />
      </div>
    }
    </div>
  `,
  styles: ``
})

export class ProductsListComponent {
  
  products = signal<Product[]>([]);

  async ngOnInit() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      console.log(res);
      
      if (!res.ok) {
        throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
      }
      
      const data = await res.json();
      this.products.set(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
}
