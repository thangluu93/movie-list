import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Movie, MovieDocument } from "../schema/movie.schema";
import * as mongoose from "mongoose";
import { Model } from "mongoose";

@Injectable()
export class MovieService {

  constructor(
    @InjectModel("Movie") private readonly movieModel: Model<MovieDocument>
  ) {
    console.log(123);
    console.log(mongoose.connection.db);
  }

  async findAllMovie(limit, offset): Promise<MovieDocument[]> {
    try {
      return await this.movieModel.find(
      ).limit(limit).skip(offset).exec();
    } catch (error) {
      console.log(error);
      return new Promise(() => {
        return [];
      });
    }
  }

  getOffsets(page, limit): number {
    return (page - 1) * limit;
  }


}
