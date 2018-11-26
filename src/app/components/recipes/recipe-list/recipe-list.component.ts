import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe';
import * as _ from 'lodash';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {

  recipes: any;

  @Output()
  selectedRecipeTo = new EventEmitter();

  recipeList = null;
  // recipeList: any[];
  constructor(private rService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.rService.getRecipes().subscribe(
      (data) => {
        console.log('success', data);
        this.recipes = data;
        this.recipeList = Object.keys(this.recipes).map(
          key => {
            return { ...this.recipes[key], id: key }
          }
        );

      },
      (err) => console.log('error', err)
    );
  }

  getSelectedRecipe(dt) {
    // _.filter(collection,(data)=>data['id']!==key);
    this.selectedRecipeTo.emit({ data: dt });
  }

  deleteSelectedRecipe(key) {

    this.recipeList = _.filter(this.recipeList, (data) => data['id'] !== key);
    this.rService.deleteRecipe(key).subscribe(
      (data) => {
        console.log('success', data);
        window.location.reload();
      }
    );
  }
}
