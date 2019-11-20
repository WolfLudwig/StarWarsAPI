import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieSelectComponent } from './movie-select/movie-select.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieCharactersComponent } from './movie-characters/movie-characters.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSelectComponent,
    MovieDetailsComponent,
    MovieCharactersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
