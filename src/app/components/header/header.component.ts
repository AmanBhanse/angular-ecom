import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <span class="text-xl">Buy Wish</span>
      <app-primary-button [label]="cartTitle()" (btnClicked)="showBtnClickFromHeader()" />
    </div>
  `,
  styles: ``
})
export class HeaderComponent {

  cartTitle = signal("Cart")
  showBtnClickFromHeader(){
    console.log("showBtnClickFromHeader")
  }
}
