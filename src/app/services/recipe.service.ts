import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/environments/environment';

@Injectable()
export class RecipeService {

  private _apiUrl = `${api.databaseURL}/recipe.json`;
  constructor(private http: HttpClient) { }

  addRecipe(recipe) {
    return this.http.post(this._apiUrl, recipe);
  }

  getRecipes() {
    return this.http.get(this._apiUrl);
  }

  deleteRecipe(deleteRecipe) {
    return this.http.delete(`${api.databaseURL}/recipe/${deleteRecipe}.json`);
  }
}
