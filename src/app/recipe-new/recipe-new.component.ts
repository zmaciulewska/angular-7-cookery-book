import { RecipeDataService } from './../recipe-data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent implements OnInit {

  recipeForm: FormGroup;

  constructor(private fb: FormBuilder, private service: RecipeDataService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.recipeForm = this.fb.group({
      recipe_title: ['', Validators.required ],
      recipe_instruction: ['', Validators.required ],
      recipe_prepTime: ['', Validators.required ]
    });
  }

  addRecipe(recipe_title, recipe_instruction, recipe_prepTime) {
    this.service.addRecipe(recipe_title, recipe_instruction, recipe_prepTime);
  }

}
