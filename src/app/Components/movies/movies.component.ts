import { Component, Input, OnInit } from '@angular/core';
import { IMovieOrShow } from 'src/app/Data/Interfaces/IMovieOrShow';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  @Input() movie?: IMovieOrShow;
  constructor() { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.movie));
  }

}
