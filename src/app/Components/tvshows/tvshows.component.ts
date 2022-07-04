import { Component, Input, OnInit } from '@angular/core';
import { IMovieOrShow } from 'src/app/Data/Interfaces/IMovieOrShow';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TVShowsComponent implements OnInit {

  @Input() show?: IMovieOrShow;
  constructor() { }

  ngOnInit(): void {
  }

}
