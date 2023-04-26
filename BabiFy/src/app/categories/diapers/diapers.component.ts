import { Component } from '@angular/core';
import { Diaper} from 'src/app/diapers';
import { DIAPERS } from 'src/app/diapers-list';

@Component({
  selector: 'app-diapers',
  templateUrl: './diapers.component.html',
  styleUrls: ['./diapers.component.css']
})
export class DiapersComponent {
  diapers = DIAPERS;
  title = 'diapers Lists';
  selectedDiaper?:Diaper;
    
  onSelect(diaper:Diaper): void{
    this.selectedDiaper =diaper;
  }
}
