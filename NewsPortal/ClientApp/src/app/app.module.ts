import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './website-components/home-page/home-page.component';
import { ArticlesComponent } from './website-components/articles/articles.component';
import { CategoriesComponent } from './website-components/categories/categories.component';
import { HeadersComponent } from './layout/headers/headers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArticlesComponent,
    CategoriesComponent,
    HeadersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
