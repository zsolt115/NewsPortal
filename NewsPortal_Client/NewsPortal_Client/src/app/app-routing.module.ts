import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ArticlesListComponent } from "./website-components/articles/articles-list/articles-list.component";
import { ArticlesComponent } from "./website-components/articles/articles.component";
import { CreateArticleComponent } from "./website-components/articles/create-article/create-article.component";
import { EditArticleComponent } from "./website-components/articles/edit-article/edit-article.component";
import { CategoriesListComponent } from "./website-components/categories/categories-list/categories-list.component";
import { CategoriesComponent } from "./website-components/categories/categories.component";
import { CreateCategoryComponent } from "./website-components/categories/create-category/create-category.component";
import { HomePageComponent } from "./website-components/home-page/home-page.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/home-page', pathMatch: 'full' },
    { path: 'home-page', component: HomePageComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'article-list', component: ArticlesListComponent },
    { path: 'category-list', component: CategoriesListComponent },
    { path: 'create-article', component: CreateArticleComponent },
    { path: 'create-category', component: CreateCategoryComponent },
    { path: 'edit-article', component: EditArticleComponent },
    { path: "**", redirectTo: 'home-page'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}