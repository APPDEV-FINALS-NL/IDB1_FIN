import { Component } from '@angular/core';
import { Bodysuit} from 'src/app/bodysuits';
import { BODYSUITS } from 'src/app/bodysuits-list';

@Component({
  selector: 'app-bodysuits',
  templateUrl: './bodysuits.component.html',
  styleUrls: ['./bodysuits.component.css']
})
export class BodysuitsComponent {
  term: any;
  bodysuits = BODYSUITS;
  title = 'Bodysuits Lists';
  selectedBodysuit?:Bodysuit;
    
  onSelect(bodysuit:Bodysuit): void{
    this.selectedBodysuit =bodysuit;
  }
}