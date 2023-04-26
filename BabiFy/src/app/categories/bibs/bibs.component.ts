import { Component } from '@angular/core';
import { Bib } from 'src/app/bibs';
import { BIBS } from 'src/app/bibs-list';

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