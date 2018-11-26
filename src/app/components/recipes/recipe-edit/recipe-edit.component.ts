import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
  providers: [RecipeService]
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup = null;

  initalizeForm() {
    this.recipeForm = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      imagePath: new FormControl(),
      ingredient: new FormArray([this.newIngredient()])
    }, { updateOn: 'blur' });
  }
  newIngredient() {
    return new FormGroup({
      name: new FormControl(),
      quantity: new FormControl()
    });
  }

  addIngredient() {
    this.ingredientObj.push(this.newIngredient());
  }

  removeIngredient(i: number) {
    this.ingredientObj.removeAt(i);

  }

  public get ingredientObj(): FormArray {
    return <FormArray>this.recipeForm.get('ingredient')
  }
  constructor(private rService: RecipeService) {
    this.initalizeForm();
  }

  ngOnInit() {
  }
  saveData() {
    if (this.recipeForm.valid) {
      this.rService.addRecipe(this.recipeForm.value).subscribe(
        (data) => {
          console.log('success', data);
          this.initalizeForm();
        }
        ,
        (err) => console.log('error', err)
      )

    } else {
      alert('Invalid form details')
    }
  }
}
