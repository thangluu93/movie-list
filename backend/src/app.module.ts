import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MovieModule } from "./movie/movie.module";
import { MongooseModule } from "@nestjs/mongoose";





@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://manscapedmovie:ManScApedMovie%402020@movie.iox7l.mongodb.net/Movie?retryWrites=true&w=majority"),
    MovieModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor() {
  }

}
