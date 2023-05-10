import { Component } from '@angular/core';
import { Hat } from 'src/app/hats';
import { HATS } from 'src/app/hats-list';

@Component({
  selector: 'app-hats',
  templateUrl: './hats.component.html',
  styleUrls: ['./hats.component.css']
})
export class HatsComponent {
  hats = HATS;
  title = 'Hats Lists';
  selectedHat?:Hat;
  term: any;
  onSelect(hat:Hat): void{
    this.selectedHat = hat;
  }
}
