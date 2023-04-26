import { Component } from '@angular/core';
import { Bib } from 'src/app/bibs';
import { BIBS } from 'src/app/bibs-list';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  bibs = BIBS;
  title = 'Bibs Lists';
  selectedBib?: Bib;
  
  onSelect(bib: Bib): void{
    this.selectedBib = bib;
  }
}
