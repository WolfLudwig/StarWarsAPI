import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie'
import { Character } from './character'

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  private starwarsUrl = 'https://swapi.co/api/';

  movie$: Observable<Movie[]>
  character$: Observable<Character[]>

  constructor( private readonly http: HttpClient ) { }

  // Appel de l'api pour les films
  getStarWarsMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.starwarsUrl+"films/")
    .pipe(
      map(
        data => data['results']

      )
    );
  }

  // Appel de l'api pour les personnages
  getStarWarsCharacters(): Observable<Character[]>{
    return this.http.get<Character[]>(this.starwarsUrl+"people/")
    .pipe(
      map(
        data => data['results']
      )
    );
  }


}
