import { Component } from '@angular/core';
import { Tshirt } from 'src/app/tshirts';
import { TSHIRTS } from 'src/app/tshirts-list';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent {
  tshirts = TSHIRTS;
  title = 'Shirts Lists';
  selectedTshirt?:Tshirt;
  
  onSelect(tshirt:Tshirt): void{
    this.selectedTshirt = tshirt;
  }
}
