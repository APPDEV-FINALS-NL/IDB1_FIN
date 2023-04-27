import { Component } from '@angular/core';
import { Mitten } from 'src/app/mittens';
import { MITTENS } from 'src/app/mittens-list';

@Component({
  selector: 'app-mittens',
  templateUrl: './mittens.component.html',
  styleUrls: ['./mittens.component.css']
})
export class MittensComponent {
  mittens = MITTENS;
  title = 'Mittens Lists';
  selectedMitten?:Mitten;
  
  onSelect(mitten:Mitten): void{
    this.selectedMitten = mitten;
  }
}
