import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Category} from 'src/app/category';
import { CATEGORIES } from 'src/app/category-list';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit{
  title = 'Category Lists';
  categories = CATEGORIES;
  dob!: Date;
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
