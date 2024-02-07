import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { FeatureModuleModule } from './feature-module/feature-module.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    HeaderPageComponent,
    MoviePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FeatureModuleModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
