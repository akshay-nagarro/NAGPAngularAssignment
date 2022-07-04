import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieOrShowComponent } from './Components/add-movie-or-show/add-movie-or-show.component';
import { MoviesGridComponent } from './Components/movies-grid/movies-grid.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { TvShowsGridComponent } from './Components/tv-shows-grid/tv-shows-grid.component';
import { TVShowsComponent } from './Components/tvshows/tvshows.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserSignupComponent } from './Components/user-signup/user-signup.component';

const routes: Routes = [
  {
    path: "movies",
    component: MoviesComponent
  },
  {
    path: "movielist",
    component: MoviesGridComponent
  },
  {
    path: "tvshowslist",
    component: TvShowsGridComponent
  },
  {
    path: "shows",
    component: TVShowsComponent
  },
  {
    path: "signup",
    component: UserSignupComponent
  },
  {
    path: "addMovieOrShow",
    component: AddMovieOrShowComponent
  },
  {
    path: "",
    component: MoviesComponent
  },
  {
    path: "login",
    component: UserLoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
