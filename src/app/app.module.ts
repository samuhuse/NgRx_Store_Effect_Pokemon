import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { loadPokemonsReducer } from './reducers/pokemon.reducers';
import { PokemonEffects } from './effects/pokemon.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ pokemons: loadPokemonsReducer }),
    EffectsModule.forRoot([PokemonEffects]),
  ],
  declarations: [AppComponent, HelloComponent, PokemonsListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
