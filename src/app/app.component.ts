import { Component } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 // providers: [RecipeDataService]
})
export class AppComponent {
  title = 'Recipe book';

  constructor(private _loadingBar: SlimLoadingBarService, private _router: Router) {
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }
  /*newRecipe: Recipe = new Recipe();

  constructor(private recipeDataService: RecipeDataService) {
  }

  addRecipe() {
    this.recipeDataService.addRecipe(this.newRecipe);
    this.newRecipe = new Recipe();
  }

  removeRecipe(recipe) {
    this.recipeDataService.deleteRecipe(recipe.id);
  }

  getRecipes() {
    return this.recipeDataService.getAllRecipes();
  }*/
}
