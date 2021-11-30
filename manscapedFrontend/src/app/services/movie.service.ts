import {Injectable} from '@angular/core';
import {Movie} from "../constants/interface/MovieDto";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) {
  }

  fetchMovie(page: number, limit: number): Observable<Movie[]> {
    return this.http.get(`${environment.API_HOST}/movie`, {params: {page, limit}}).pipe(
      map((res: any) => {
        return res.results
      })
    );
  }
}
