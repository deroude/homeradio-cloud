import { Station } from "./station";
import { Genre } from "./genre";

export class Radio{
    playingStation?:Station;
    selectedGenre?:Genre;
    genres:Genre[];
}