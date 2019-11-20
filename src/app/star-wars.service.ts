import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Movie } from "./movie";
import { Character } from "./character";

@Injectable({
  providedIn: "root"
})
export class StarWarsService {
  private starwarsUrl = "https://swapi.co/api/";

  movie$: Observable<Movie[]>;
  character$: Observable<Character[]>;

  constructor(private readonly http: HttpClient) {}

  // Appel de l'api pour les films
  getStarWarsMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.starwarsUrl + "films/").pipe(
      map(data => data["results"]),
      catchError(this.handleError<Movie[]>("getMovies", []))
    );
  }

  // Appel de l'api pour les personnages
  getStarWarsCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.starwarsUrl + "people/").pipe(
      map(data => data["results"]),
      catchError(this.handleError<Character[]>("getCharacters", []))
    );
  }

  // Appel de l'api pour personnage précis
  getStarWarsCharacter(thisUrl: string): Observable<Character[]> {
    return this.http
      .get<Character[]>(thisUrl)
      .pipe(catchError(this.handleError<Character[]>("getCharacter", [])));
  }

  // Gère les opérations HTTP ayant échouées

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed ${error.message}`);
      return of(result as T);
    };
  }
}
