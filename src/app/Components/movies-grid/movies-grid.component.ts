import { Component, OnInit } from '@angular/core';
import { MoviesAndShowsList } from 'src/app/Data/Classes/MoviesAndShowsList';
import { IMovieOrShow } from 'src/app/Data/Interfaces/IMovieOrShow';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss']
})
export class MoviesGridComponent implements OnInit {

  movies : IMovieOrShow[] | undefined;
  constructor() { }

  

  ngOnInit(): void {
    this.movies = MoviesAndShowsList.showslist;
  }

}
