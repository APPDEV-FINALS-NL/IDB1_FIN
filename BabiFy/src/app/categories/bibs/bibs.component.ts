import { Component } from '@angular/core';
import { Bib } from 'src/bibs';
import { BIBS } from 'src/bibs-lists';

@Component({
  selector: 'app-bibs',
  templateUrl: './bibs.component.html',
  styleUrls: ['./bibs.component.css']
})
export class BibsComponent {
  bibs = BIBS;
  title = 'Bibs Lists';
  selectedBib?: Bib;
  
  onSelect(bib: Bib): void{
    this.selectedBib = bib;
  }
}