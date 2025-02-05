import { Component, signal, OnInit } from '@angular/core';
import { Product } from '../../models/product.models';
import { ProductCardComponent } from "./product-card/product-card.component";

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
  //For TESTING
  /*
  products = signal<Product[]>([
    {
      id:1,
      title : 'mangoes',
      image : '',
      price : 4,
      stock : 500
    },
    {
      id:2,
      title : 'apple',
      image : '',
      price : 5,
      stock : 400
    },
    {
      id:1,
      title : 'pipeapple',
      image : '',
      price : 56,
      stock : 50
    },
    {
      id:1,
      title : 'Gueva',
      image : '',
      price : 56,
      stock : 0
    }
  ])
  */

  products = signal<Product[]>([])
  async ngOnInit(){
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    this.products.set(data);
  }

}
