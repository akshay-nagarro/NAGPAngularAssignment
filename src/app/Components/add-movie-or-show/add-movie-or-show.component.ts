import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Languages } from 'src/app/Data/Classes/Languages';
import { MovieOrShowCategories } from 'src/app/Data/Classes/MovieOrShowCategories';
import { MoviesAndShowsList } from 'src/app/Data/Classes/MoviesAndShowsList';
import { TrueFalse } from 'src/app/Data/Classes/TrueFalse';
import { TypeOfShow } from 'src/app/Data/Classes/TypeOfShow';
import { IMovieOrShow } from 'src/app/Data/Interfaces/IMovieOrShow';

@Component({
  selector: 'app-add-movie-or-show',
  templateUrl: './add-movie-or-show.component.html',
  styleUrls: ['./add-movie-or-show.component.scss']
})
export class AddMovieOrShowComponent implements OnInit {


  listofshows : any;
  
  ismovie = "";
  isprimeexclusive = "";
  public typeofshow = TypeOfShow.typeofshow;
  public truefalse = TrueFalse.trueorfalse;
  public languages = Languages.languageCategories;
  public categories = MovieOrShowCategories.genreCategories;
  email = new FormControl('', [Validators.required, Validators.email]);
  submitted= false;
  @Input() movieOrShow: IMovieOrShow = {
    movieOrShowId:1,
    movieOrShowName:"",
    movieOrShowTitle:"",
    movieOrShowDescription:"",
    ratingIMDB:0,
    language:"Hindi",
    genre:"",
    isMovie:true,
    imagePath:"",
    isPrimeShow:false
  };
  onSubmit(){
    this.submitted = true;
    let len= MoviesAndShowsList.showslist?.length;
    this.movieOrShow.movieOrShowId = (len == undefined)?0:len+1;
    this.movieOrShow.isMovie= (this.ismovie=="Movie")?true:false;
    this.movieOrShow.isPrimeShow = (this.isprimeexclusive=="True")?true:false;
    this.listofshows[this.movieOrShow.movieOrShowId]=this.movieOrShow;    
  }

  constructor() {    
   }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {    
    this.listofshows = MoviesAndShowsList.showslist;
  }

}
