import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MovieRoutingModule} from './movie-routing.module';
import {MovieComponent} from './movie.component';
import {MovieCardComponent} from './movie-card/movie-card.component';
import {MovieService} from "../services/movie.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {InfiniteScrollModule} from "ngx-infinite-scroll";


@NgModule({
  declarations: [
    MovieComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InfiniteScrollModule,
    MovieRoutingModule
  ],
  providers: [MovieService]
})
export class MovieModule {
}
