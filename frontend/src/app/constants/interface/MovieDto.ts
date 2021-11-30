export interface MovieResponse {
  error: any;
  results: Movie[];
}

export interface Movie {
  id: string;
  imdbId: string;
  imdbRating: number;
  title: string;
  poster: string;
  trailer: string;
  overview: string;
  director: string;
  cast: string[];
  release_date: string;
  start_date: string;
  end_date: string;
  mpaa: string;

}
