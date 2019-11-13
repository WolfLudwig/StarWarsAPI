import { Component, OnInit } from "@angular/core";
import { StarWarsService } from "../star-wars.service";
import { Movie } from "../movie";
import { People } from "../people";

@Component({
  selector: "app-movie-select-component",
  templateUrl: "./movie-select-component.component.html",
  styleUrls: ["./movie-select-component.component.css"]
})
export class MovieSelectComponentComponent implements OnInit {
  movies: Movie[];

  constructor(private starwarsService: StarWarsService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.starwarsService
      .getStarWarsMovies()
      .subscribe(movies => (this.movies = movies));
  }
}
