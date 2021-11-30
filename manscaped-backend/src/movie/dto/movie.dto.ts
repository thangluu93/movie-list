import { ResponseInterface } from "../../interface/response.interface";
import { Movie } from "../../schema/movie.schema";

export interface MovieRequest {
  page: number,
  limit: number,
}

export interface MovieListResponse extends ResponseInterface {
  results: Movie[];
}
