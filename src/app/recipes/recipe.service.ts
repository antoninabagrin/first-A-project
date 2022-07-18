import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel ',
      'A super-tasty Schnitzel!!!!!',
      'https://ro.menulist.menu/storage/media/dishes_main/2220579/conversions/dish_thumbnail.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Burger',
      'Exactly what you want!!!',
      'https://www.lalena.ro/images/uploaded/600x_Hamburgeri-de-casa-933.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    // return a new  array which is a copy of one of this file
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToSoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
