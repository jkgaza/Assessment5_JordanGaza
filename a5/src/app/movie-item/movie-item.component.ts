import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../imovie';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie : IMovie;

  constructor( public service : MovieServiceService) { }

  ngOnInit() {
  }

}
