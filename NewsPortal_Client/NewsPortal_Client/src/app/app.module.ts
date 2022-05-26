import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { ArticlesComponent } from './website-components/articles/articles.component';
import { CategoriesComponent } from './website-components/categories/categories.component';
import { HomePageComponent } from './website-components/home-page/home-page.component';
import { CreateCategoryComponent } from './website-components/categories/create-category/create-category.component';
import { CreateArticleComponent } from './website-components/articles/create-article/create-article.component';
import { ArticlesListComponent } from './website-components/articles/articles-list/articles-list.component';
import { CategoriesListComponent } from './website-components/categories/categories-list/categories-list.component';
import { TemplateListComponent } from './utility/template-list/template-list.component';
import { FormArticleComponent } from './website-components/articles/form-article/form-article.component';
import { EditArticleComponent } from './website-components/articles/edit-article/edit-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    ArticlesComponent,
    CategoriesComponent,
    HomePageComponent,
    CreateCategoryComponent,
    CreateArticleComponent,
    ArticlesListComponent,
    CategoriesListComponent,
    TemplateListComponent,
    FormArticleComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
