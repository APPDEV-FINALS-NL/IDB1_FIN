import { Component } from '@angular/core';
import {Cart} from "src/app/cart";
import { CARTS } from 'src/app/cart-list';

@Component({
  selector: '.app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  carts = CARTS;
  selectedCart?: Cart;
  
  onSelect(cart: Cart): void{
    this.selectedCart = cart;
  }
}
