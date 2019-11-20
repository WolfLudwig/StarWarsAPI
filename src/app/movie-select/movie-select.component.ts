import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { StarWarsService } from "../star-wars.service";
import { Movie } from "../movie";

@Component({
  selector: "app-movie-select",
  templateUrl: "./movie-select.component.html",
  styleUrls: ["./movie-select.component.css"]
})
export class MovieSelectComponent implements OnInit {
  movies: Movie[];
  movieForm: FormGroup;
  selectedMovie: Movie;

  constructor(private starwarsService: StarWarsService) {
    this.movieForm = new FormGroup({
      movieName: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
    this.getMovies();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.movieForm.controls.movieName.value);
    this.selectedMovie = this.movieForm.controls.movieName.value;
  }

  getMovies(): void {
    this.starwarsService
      .getStarWarsMovies()
      .subscribe(movies => (this.movies = movies));
  }
}
