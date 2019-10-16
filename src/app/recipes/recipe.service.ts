import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

recipeSelected = new EventEmitter<Recipe>();

private recipes: Recipe[] = [
        new Recipe('Tandoori Paneer Tikka', 
        'Super tasty tandoori Paneer tikka!', 'https://myfoodstory.com/wp-content/uploads/2017/02/Oven-Baked-Tandoori-Paneer-Tikka-2-1170x617.jpg',
        [
            new Ingredient('Paneer', 2),
            new Ingredient('Capsicum', 2),
            new Ingredient('Pudina', 10)
        ]),
        new Recipe('Rajma Chawal', 
        'Enjoy homemade authentic Rajma chawal!', 'https://i0.wp.com/www.sinamontales.com/dotcord/uploads/2016/06/of-sunday-afternoons-and-rajma-chawal.1024x1024-4.jpg?fit=1024%2C680&ssl=1',
        [
            new Ingredient('Rajma', 5),
            new Ingredient('Rice', 2),
            new Ingredient('Onion', 2)
        ])
      ];

constructor(private shoppingService: ShoppingListService) {}

getRecipes() {
    return this.recipes.slice();
}

addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
}



}