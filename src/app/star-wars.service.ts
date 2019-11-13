import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie'
import { People } from './people'

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  private starwarsUrl = 'https://swapi.co/api/';

  movie$: Observable<Movie[]>
  people$: Observable<People[]>

  constructor( private readonly http: HttpClient ) { }

  // Appel de l'appi
  getStarWarsMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.starwarsUrl+"films/")
    .pipe(
      map(
        data => data['results']

      )
    );
  }


}
