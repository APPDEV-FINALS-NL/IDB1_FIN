import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Category} from 'src/app/category';
import { CATEGORIES } from 'src/app/category-list';

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.css']
})
export class CategoriesDetailsComponent implements OnInit{
  title = 'Category Details';
  // categories = CATEGORIES;ammended
  
  @Input() category?: Category;
  
//click event handler
  selectedCategory?: Category;
    onSelect(category: Category): void{
      this.selectedCategory = category;
  }
  constructor (
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void{
    const id=this.route.snapshot.paramMap.get('id');
    this.selectedCategory = CATEGORIES.find(selectedCategory => selectedCategory.id === id);
  }
}
