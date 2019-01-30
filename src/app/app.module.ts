import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeNewComponent } from './recipe-new/recipe-new.component';
import { RecipeGetAllComponent } from './recipe-get-all/recipe-get-all.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecipeDataService } from './recipe-data.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeNewComponent,
    RecipeGetAllComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ RecipeDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
