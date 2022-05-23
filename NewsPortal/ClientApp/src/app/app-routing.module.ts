import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'

const appRoutes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: "**", redirectTo: 'home-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
