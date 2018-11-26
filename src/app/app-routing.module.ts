import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/Router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { ErrorComponent } from './componenents/error/error.component';

const routes: Route[] = [
  { path: "", redirectTo: "recipes", pathMatch: "full" },
  { path: 'recipes', component: RecipesComponent },
  { path: "recipe", component: RecipeEditComponent },
  { path: '**', component: ErrorComponent }
  // { path: "", component: RecipesComponent },
  // { path: "recipe", component: RecipeEditComponent },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
