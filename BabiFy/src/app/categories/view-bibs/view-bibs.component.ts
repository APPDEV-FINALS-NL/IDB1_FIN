import { Component } from '@angular/core';
import { Bib } from 'src/bibs';
import { BIBS } from 'src/bibs-lists';

@Component({
  selector: 'app-view-bibs',
  templateUrl: './view-bibs.component.html',
  styleUrls: ['./view-bibs.component.css']
})
export class ViewBibsComponent {
  bibs = BIBS;
  title = 'Bibs Details';
  selectedBib?: Bib;
  
  onSelect(bib: Bib): void{
    this.selectedBib = bib;
  }
}
