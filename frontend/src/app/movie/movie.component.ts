import {Component, OnInit} from '@angular/core';
import {MovieService} from "../services/movie.service";
import {Observable} from "rxjs";
import {Movie} from "../constants/interface/MovieDto";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  page = 1;
  pageSize = 10;
  movieList$: Observable<Movie[]>;
  movieList: Movie[];

  constructor(
    private movieService: MovieService,
  ) {
    this.movieService.fetchMovie(this.page, this.pageSize).subscribe(data => {
      this.movieList = data;
    });
  }

  ngOnInit(): void {
  }



  onScrollMovieList() {
    this.page++;
    this.movieService.fetchMovie(this.page, this.pageSize).subscribe(data => {
      this.movieList = this.movieList.concat(data);
    });

    console.log('scrolled');
  }
}
