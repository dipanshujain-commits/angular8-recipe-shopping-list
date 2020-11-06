import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Refined Oil', 5),
        new Ingredient('Onions', 10)
      ];
    
    getIngredients() {
        return this.ingredients.slice();
    }

    addNewIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addRecipeIngredients(recipeIngredients: Ingredient[]) {
        this.ingredients.push(...recipeIngredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}