import { Component, OnInit, Input } from "@angular/core";
import { StarWarsService } from "../star-wars.service";
import { Movie } from "../movie";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.css"]
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private starwarsService: StarWarsService) {}

  ngOnInit() {}
}
