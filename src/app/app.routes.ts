import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

export const routes: Routes = [
    {
        path : '',
        pathMatch: 'full',
        component : ProductsListComponent
    },
    {
        path : 'cart',
        component : CartPageComponent
    }
];
