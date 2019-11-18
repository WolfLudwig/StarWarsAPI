import { Component, OnInit, Input } from "@angular/core";
import { StarWarsService } from "../star-wars.service";
import { Character } from "../character";
import { Movie } from '../movie';

@Component({
  selector: "app-movie-characters",
  templateUrl: "./movie-characters.component.html",
  styleUrls: ["./movie-characters.component.css"]
})
export class MovieCharactersComponent implements OnInit {
  @Input() movie: string[];
  characters: Character[];

  constructor(private starwarsService: StarWarsService) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.starwarsService
      .getStarWarsCharacters()
      .subscribe(characters => (this.characters = characters));
  }
  
}
