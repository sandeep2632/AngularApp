import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[
new Recipe('A test Recipe','This is a test','https://media1.s-nbcnews.com/j/newscms/2015_29/674191/lasagna-recipe-today-150713-01_8e75e197820c7aec0621f4a52e2d0009.today-inline-large.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
