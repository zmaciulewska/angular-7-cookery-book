import { RecipeDataService } from './../recipe-data.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-get-all',
  templateUrl: './recipe-get-all.component.html',
  styleUrls: ['./recipe-get-all.component.css']
})
export class RecipeGetAllComponent implements OnInit {

  recipes: Recipe[];

  constructor(private service: RecipeDataService) { }

  ngOnInit() {
    this.service
    .getRecipes()
    .subscribe((data: Recipe[]) => {
      this.recipes = data;
    });
  }

  deleteRecipe(id) {
    this.service.deleteRecipe(id).subscribe(res => console.log('Recipe deleted - component'));
  }

}
