import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) nameInputEl: ElementRef;
 // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(amountInputEl: HTMLInputElement) {
    const newIngredient = new Ingredient(this.nameInputEl.nativeElement.value, 
      parseInt(amountInputEl.value));
    // this.ingredientAdded.emit(newIngredient);
    this.shoppingService.addIngredient(newIngredient);

  }
}
