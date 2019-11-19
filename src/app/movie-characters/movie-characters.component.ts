import { Component, OnInit, Input } from "@angular/core";
import { StarWarsService } from "../star-wars.service";
import { Character } from "../character";

@Component({
  selector: "app-movie-characters",
  templateUrl: "./movie-characters.component.html",
  styleUrls: ["./movie-characters.component.css"]
})
export class MovieCharactersComponent implements OnInit {
  @Input() selectedCharacter: string;
  character: Character[];
  characters: Character[];

  constructor(private starwarsService: StarWarsService) {}

  ngOnInit() {
    this.getCharacters();
    this.getCharacter();
  }

  getCharacters(): void {
    this.starwarsService
      .getStarWarsCharacters()
      .subscribe(characters => (this.characters = characters));
  }

  getCharacter(): void{
    this.starwarsService.getStarWarsCharacter(this.selectedCharacter).subscribe(character => (this.character = character));
  }
}
