import { Component, OnInit } from '@angular/core';
import { IMovie } from '../imovie';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: IMovie[];
  

  constructor(public service : MovieServiceService) { }

  ngOnInit() {
    this.movies = this.service.getMovies();
    console.log(this.movies);
  }

}
