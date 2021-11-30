import { CACHE_MANAGER, Controller, Get, Inject, Query } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { MovieListResponse } from "./dto/movie.dto";
import {Cache} from 'cache-manager';
import { Movie } from "../schema/movie.schema";


@Controller("movie")
export class MovieController {

  constructor(
    private readonly movieService: MovieService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {
  }

  @Get()
  async getMovies(
    @Query("page") page: any,
    @Query("limit") limit: any
  ): Promise<MovieListResponse> {

    page = page ? parseInt(page, 10) : 1;
    limit = limit ? parseInt(limit, 10) : 10;
    let keyCache = `movie:${page}:${limit}`;
    let cache: Movie[] = await this.cacheManager.get(keyCache);
    if (cache) {
      console.log('cache');
      return {
        error: null,
        results: cache
      };
    }
    const offset = this.movieService.getOffsets(page, limit);
    let movieData = await this.movieService.findAllMovie(limit, offset);
    await this.cacheManager.set(keyCache, movieData, {ttl: 3000 });
    return {
      error: null,
      results: movieData
    };
  }

}
