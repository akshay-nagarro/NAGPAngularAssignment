import { Component, OnInit } from '@angular/core';
import { MoviesAndShowsList } from 'src/app/Data/Classes/MoviesAndShowsList';
import { IMovieOrShow } from 'src/app/Data/Interfaces/IMovieOrShow';

@Component({
  selector: 'app-tv-shows-grid',
  templateUrl: './tv-shows-grid.component.html',
  styleUrls: ['./tv-shows-grid.component.scss']
})
export class TvShowsGridComponent implements OnInit {

  shows : IMovieOrShow[] | undefined;
  constructor() { }

  ngOnInit(): void {
    this.shows = MoviesAndShowsList.getMoviesListFromLocalStorage();;
  }

}
