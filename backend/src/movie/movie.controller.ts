import { Controller, Get, Query } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { MovieListResponse } from "./dto/movie.dto";


@Controller("movie")
export class MovieController {

  constructor(private readonly movieService: MovieService) {
  }

  @Get()
  async getMovies(
    @Query("page") page: any,
    @Query("limit") limit: any
  ): Promise<MovieListResponse> {
    page = page ? parseInt(page, 10) : 1;
    limit = limit ? parseInt(limit, 10) : 10;
    const offset = this.movieService.getOffsets(page, limit);
    console.log(limit, offset);
    let movieData = await this.movieService.findAllMovie(limit, offset);
    console.log(movieData);
    return {
      error: null,
      results: movieData
    };
  }

}
