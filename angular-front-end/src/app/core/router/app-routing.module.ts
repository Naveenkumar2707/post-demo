import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LogInComponent } from "../components/log-in/log-in.component";
import { HomeComponent } from "../components/home-page/home-page-component";
import { CommentsSectionComponent } from "../components/comments-section/comments-section.component";
import { RouterGuard } from './router-guard';
const routes: Routes = [
  { path: "", component: HomeComponent,canActivate: [RouterGuard] },
  { path: "comments", component: CommentsSectionComponent },

  { path: 'auth', component: LogInComponent },  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [RouterGuard],
  exports: [RouterModule]
})
export class AppRoutingModule {}
