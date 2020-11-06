import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { EventEmitter } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeServie: RecipeService,
              private router: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //We get a copy of recipes array and not the original recipes
    this.recipes = this.recipeServie.getRecipes();
  }

  newRecipe() {
    this.router.navigate(['new'], {relativeTo: this.activeRoute});
  }

}
