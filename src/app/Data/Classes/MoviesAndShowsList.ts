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
              imagePath: "../Images/300-rise-of-an-empire.jpg",    
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
              imagePath: "https://drive.google.com/file/d/18mg-pr3Uq1zJGv2OZX6YwFn8pc6FuFqV/view",    
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
                imagePath: "file:///../Images/American-Horror-Story.jpg",    
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
                imagePath: "https://drive.google.com/uc?export=view&id=18mg-pr3Uq1zJGv2OZX6YwFn8pc6FuFqV",    
                isPrimeShow: false
              },
          ]  ;
          
        MoviesAndShowsList.setLocalStorage(MoviesAndShowsList.showslist);
    })();

    constructor()
    {            
    }

    public static getMoviesListFromLocalStorage() {
      return MoviesAndShowsList.showslist;
    }

    public static setLocalStorage(list: IMovieOrShow[])  {      
      localStorage.removeItem("moviesAndShowsList");
        localStorage.setItem('moviesAndShowsList', JSON.stringify(list));
        MoviesAndShowsList.showslist=list;
    }

}

