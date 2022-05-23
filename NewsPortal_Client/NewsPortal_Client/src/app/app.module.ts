import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { ArticlesComponent } from './website-components/articles/articles.component';
import { CategoriesComponent } from './website-components/categories/categories.component';
import { HomePageComponent } from './website-components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    ArticlesComponent,
    CategoriesComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
