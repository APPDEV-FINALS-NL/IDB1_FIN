import { Component } from '@angular/core';
import { Jacket } from 'src/app/jackets';
import { JACKETS } from 'src/app/jackets-list';


@Component({
  selector: 'app-jackets',
  templateUrl: './jackets.component.html',
  styleUrls: ['./jackets.component.css']
})
export class JacketsComponent {
  jackets = JACKETS;
  title = 'Jackets Lists';
  selectedJacket?:Jacket;
  
  onSelect(jacket:Jacket): void{
    this.selectedJacket = jacket;
  }
}
