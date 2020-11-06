import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputEl: ElementRef; 
  @ViewChild('amountInput') amountInput: ElementRef; 
  @Output() addIngredient = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    const newIngredient = new Ingredient(this.nameInputEl.nativeElement.value, this.amountInput.nativeElement.value);
    this.shoppingListService.addNewIngredient(newIngredient);
  }

}
