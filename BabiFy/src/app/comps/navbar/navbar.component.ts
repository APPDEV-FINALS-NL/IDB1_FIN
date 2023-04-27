import { Component } from '@angular/core';
import {Cart} from "src/app/cart";
import { CARTS } from 'src/app/cart-list';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  carts = CARTS;
  selectedCart?: Cart;
  
  onSelect(cart: Cart): void{
    this.selectedCart = cart;
  }
}
