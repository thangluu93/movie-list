import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Document } from "mongoose";

export type MovieDocument = Movie & Document;

@Schema({ collection: "Movie" })
export class Movie {
  @Prop({ type: mongoose.Types.ObjectId, ref: "_id" })
  id: string;

  @Prop()
  imdbId: string;

  @Prop()
  imdbRating: number;

  @Prop()
  title: string;

  @Prop()
  poster: string;

  @Prop()
  trailer: string;

  @Prop()
  overview: string;

  @Prop()
  director: string;

  @Prop()
  cast: string[];

  @Prop({ type: Date, default: Date.now })
  release_date: string;

  @Prop({ type: Date, default: Date.now })
  start_date: string;

  @Prop({ type: Date, default: Date.now })
  end_date: string;

  @Prop()
  mpaa: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
