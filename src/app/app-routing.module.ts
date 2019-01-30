import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeNewComponent } from './recipe-new/recipe-new.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeGetAllComponent } from './recipe-get-all/recipe-get-all.component';

const routes: Routes = [ {
  path: 'recipes/create',
  component: RecipeNewComponent
},
{
  path: 'recipes/edit/:id',
  component: RecipeEditComponent
},
{
  path: 'recipes',
  component: RecipeGetAllComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
