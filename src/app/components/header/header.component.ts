import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import {faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink, FontAwesomeModule],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <div routerLink="/" class="text-4xl cursor-pointer">
        <fa-icon class="m-3" [icon]="faShoppingBag"></fa-icon>
        <span>Buy Wish</span>
      </div>
      <app-primary-button 
        [label]="'Cart('+cartService.cart().length + ')'" 
        (btnClicked)="showBtnClickFromHeader()"
        routerLink="/cart"
        />
    </div>
  `,
  styles: ``
})
export class HeaderComponent {
  faShoppingBag = faShoppingBag;
  cartService = inject(CartService) 

  showBtnClickFromHeader(){
    console.log("showBtnClickFromHeader")
  }
}
