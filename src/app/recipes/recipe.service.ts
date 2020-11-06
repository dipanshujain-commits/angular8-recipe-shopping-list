import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Chole Bature', 
        'It is a combination of chana masala (spicy white chickpeas) and bhatura, a fried bread made from maida. It can also be street food or a complete meal and may be accompanied with onions, pickled carrots, green chutney or achaar.', 'https://c.ndtvimg.com/2019-11/uutrggs_chole-bhature_625x300_26_November_19.jpg',
        [
          new Ingredient('Maida', 2),
          new Ingredient('Chole', 500),
          new Ingredient('Green chillis', 10),
          new Ingredient('Mango Pickle', 2)
        ]),
        new Recipe('Pav Bhaji', 
        'Pav bhaji consists of bhaji garnished with coriander, chopped onion, and a dash of lemon and lightly toasted pav.',
        'https://www.kindpng.com/picc/m/127-1271643_pav-bhaji-images-png-transparent-png.png',
        [
          new Ingredient('Buns', 10),
          new Ingredient('Potatoes', 5),
          new Ingredient('Amul Butter', 2),
          new Ingredient('Tomatoes', 5)
          ])
        ];
    
    constructor(private shoppingListService: ShoppingListService) {}
      
    getRecipes() {
       return this.recipes.slice();
    }

    addRecipeIngredientsToShoppingList(ingredients: Ingredient[]) {
       this.shoppingListService.addRecipeIngredients(ingredients);
    }

    getRecipe(index: number): Recipe {
      return this.recipes[index];
    }

}