import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  imports: [MatButtonModule],
  template: `
    <button mat-button class="w-full px-5 py-2 rounded-xl shadow-md hover:bg-slate-200" (click)="btnClicked.emit()">
      <span class="text-md">{{ label() }}</span>
    </button>
  `,
  styles: ``,
})
export class ButtonComponent {
  label = input<string>();
  btnClicked = output();
}
