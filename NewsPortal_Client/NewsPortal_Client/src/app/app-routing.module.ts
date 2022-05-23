import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { ArticlesComponent } from "./website-components/articles/articles.component";
import { CategoriesComponent } from "./website-components/categories/categories.component";
import { HomePageComponent } from "./website-components/home-page/home-page.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/home-page', pathMatch: 'full' },
    { path: 'home-page', component: HomePageComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: "**", redirectTo: 'home-page'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}