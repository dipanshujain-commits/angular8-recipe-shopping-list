import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeItem: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private activeRoute: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {

    this.activeRoute.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeItem = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onEditRecipe() {
     this.router.navigate(['edit'], {relativeTo: this.activeRoute});
     //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.activeRoute});
  }

  sendToShoppingList() {
    this.recipeService.addRecipeIngredientsToShoppingList(this.recipeItem.ingredients);
  }

  
}
