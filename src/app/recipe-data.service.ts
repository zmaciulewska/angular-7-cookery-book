import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RecipeDataService {

  baseUrl = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) { }

  addRecipe(recipe_title, recipe_instruction, recipe_prepTime) {
    const tmpRecipe = {
      recipe_title: recipe_title,
      recipe_instruction: recipe_instruction,
      recipe_prepTime: recipe_prepTime
    };
    console.log(tmpRecipe);
    this.http.
    post(`${this.baseUrl}`, tmpRecipe)
    .subscribe(res => console.log('Recipe added succesfully'));
  }

  getRecipes() {
    return this.http.get(`${this.baseUrl}`);
  }

  getRecipe(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateRecipe(recipe_title, recipe_instruction, recipe_prepTime, id) {
    const tmpRecipe = {
      recipe_title: recipe_title,
      recipe_instruction: recipe_instruction,
      recipe_prepTime: recipe_prepTime
    };
    this.http.put(`${this.baseUrl}/${id}`, tmpRecipe).subscribe(res => console.log('Recipe updated'));
  }

  deleteRecipe(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
