import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./router/app-routing.module";
import { AppComponent } from "./components/app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from '../shared/shared.module';
import { ProvidersModule } from './providers.module';
import { LogInComponent } from "./components/log-in/log-in.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./components/home-page/home-page-component";
import { CommentsSectionComponent } from "./components/comments-section/comments-section.component";
import { DialogComponent } from "./components/reg-dialog/reg-dialog.component";
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    CommentsSectionComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ProvidersModule.forRoot(),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule {}
