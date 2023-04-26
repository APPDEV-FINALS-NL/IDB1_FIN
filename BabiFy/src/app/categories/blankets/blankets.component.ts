import { Component } from '@angular/core';
import { Blanket } from 'src/app/blankets';
import { BLANKETS } from 'src/app/blankets-list';

@Component({
  selector: 'app-blankets',
  templateUrl: './blankets.component.html',
  styleUrls: ['./blankets.component.css']
})
export class BlanketsComponent {
  blankets = BLANKETS;
  title = 'Blankets Lists';
  selectedBlanket?:Blanket;
  
  onSelect(blanket:Blanket): void{
    this.selectedBlanket =blanket;
  }
}
