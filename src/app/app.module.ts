import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './Components/movies/movies.component';
import { TVShowsComponent } from './Components/tvshows/tvshows.component';
import { UserSignupComponent } from './Components/user-signup/user-signup.component';
import { AddMovieOrShowComponent } from './Components/add-movie-or-show/add-movie-or-show.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { MoviesGridComponent } from './Components/movies-grid/movies-grid.component';
import { TvShowsGridComponent } from './Components/tv-shows-grid/tv-shows-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    TVShowsComponent,
    UserSignupComponent,
    AddMovieOrShowComponent,
    UserLoginComponent,
    MoviesGridComponent,
    TvShowsGridComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatRadioModule
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
