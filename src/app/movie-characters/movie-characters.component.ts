import { Component, OnInit, Input } from "@angular/core";
import { StarWarsService } from "../star-wars.service";
import { Movie } from "../movie";
import { Character } from "../character";

@Component({
  selector: "app-movie-characters",
  templateUrl: "./movie-characters.component.html",
  styleUrls: ["./movie-characters.component.css"]
})
export class MovieCharactersComponent implements OnInit {
  @Input() url: string;
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
