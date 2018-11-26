import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  @Output()
  selectedRecipe = new EventEmitter();
  @Output()
  deleteRecipe = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  getDetails() {
    this.selectedRecipe.emit({ data: this.recipe });
  };

  delete() {

    this.deleteRecipe.emit({ data: this.recipe.id });
  }
}
