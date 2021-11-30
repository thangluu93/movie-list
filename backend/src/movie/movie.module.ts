import { CacheModule, Module } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { MovieController } from "./movie.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { MovieSchema } from "../schema/movie.schema";

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: "Movie", schema: MovieSchema }
      ]
    ),
    CacheModule.register()
  ],
  providers: [MovieService],
  controllers: [MovieController]
})
export class MovieModule {
}
