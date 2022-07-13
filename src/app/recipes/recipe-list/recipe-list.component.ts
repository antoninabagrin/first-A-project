import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is a simply test',
      'https://149401384.v2.pressablecdn.com/wp-content/uploads/2022/06/summer-ricotta-grilled-vegetables-10-scaled.jpg'
    ),
    new Recipe(
      'Another test Recipe',
      'This is a simply test',
      'https://149401384.v2.pressablecdn.com/wp-content/uploads/2022/06/summer-ricotta-grilled-vegetables-10-scaled.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
