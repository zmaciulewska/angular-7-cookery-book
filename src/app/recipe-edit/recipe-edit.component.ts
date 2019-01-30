import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeDataService } from './../recipe-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: any = {};
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
  private router: Router,
  private service: RecipeDataService,
  private formBuilder: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
    this.route
    .params
    .subscribe(params => {
      this.service
      .getRecipe(params['id'])
      .subscribe(res => {
        this.recipe = res;
      });
    });
  }

  createForm() {
    this.recipeForm = this.formBuilder.group({
      recipe_title: ['', Validators.required],
      recipe_instruction: ['', Validators.required],
      recipe_prepTime: ['', Validators.required],
    });
  }

  updateRecipe(recipe_title, recipe_instruction, recipe_prepTime) {
    this.route.params.subscribe(params => {
      this.service.updateRecipe(recipe_title, recipe_instruction, recipe_prepTime, params['id']);
      this.router.navigate(['recipes']);
    });
  }
}
