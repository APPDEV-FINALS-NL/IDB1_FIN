import { Component } from '@angular/core';
import { Pant } from 'src/app/pants';
import { PANTS } from 'src/app/pants-list';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent {
  pants = PANTS;
  title = 'Pants Lists';
  selectedPant?:Pant;
  
  onSelect(pant:Pant): void{
    this.selectedPant = pant;
  }
}
