import { IMovieOrShow } from "../Interfaces/IMovieOrShow"

export class MoviesAndShowsList {
    public static showslist: IMovieOrShow[] | undefined;  
    

      private static _initialize = (() => {
        MoviesAndShowsList.showslist = [
            {
              movieOrShowId: 1,    
              movieOrShowName: "Movie 1",    
              movieOrShowTitle: "Movie 1",    
              movieOrShowDescription: "Description movie 1",    
              ratingIMDB: 1,    
              language: "Hindi",    
              genre: "",    
              isMovie: true,    
              imagePath: "https://material.angular.io/assets/img/examples/shiba2.jpg",    
              isPrimeShow: false
            },
            {
              movieOrShowId: 2,    
              movieOrShowName: "TV show 1",    
              movieOrShowTitle: "TV show 1",    
              movieOrShowDescription: "Description TV show 1",    
              ratingIMDB: 1,    
              language: "Hindi",    
              genre: "",    
              isMovie: false,    
              imagePath: "https://material.angular.io/assets/img/examples/shiba2.jpg",    
              isPrimeShow: false
            },
            {
                movieOrShowId: 3,    
                movieOrShowName: "Movie 2",    
                movieOrShowTitle: "Movie 2",    
                movieOrShowDescription: "Description movie 2",    
                ratingIMDB: 1,    
                language: "Hindi",    
                genre: "",    
                isMovie: true,    
                imagePath: "https://material.angular.io/assets/img/examples/shiba2.jpg",    
                isPrimeShow: false
              },
              {
                movieOrShowId: 4,    
                movieOrShowName: "Movie 3",    
                movieOrShowTitle: "Movie 3",    
                movieOrShowDescription: "Description movie 3",    
                ratingIMDB: 1,    
                language: "Hindi",    
                genre: "",    
                isMovie: true,    
                imagePath: "https://material.angular.io/assets/img/examples/shiba2.jpg",    
                isPrimeShow: false
              },
          ]  ;
          
        MoviesAndShowsList.setLocalStorage();
    })();

    constructor()
    {            
    }

    public static setLocalStorage()  {
        localStorage.setItem('moviesAndShowsList', JSON.stringify(MoviesAndShowsList.showslist));
    }

}

