import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, mergeMap } from "rxjs";
import { PokedexService } from "../services/pokedex.service";

import * as pokemonActions from './../actions/pokemon.actions'

@Injectable()
export class PokemonEffects {
 

  loadPokemons$ = createEffect(() => this.actions$.pipe(
    ofType(pokemonActions.getPokemons),
    exhaustMap(action =>
      this.pokedexService.getPokemons(action.limit, action.offset).pipe(
        map(pokemons => pokemonActions.loadedPokemons({pokemons: pokemons}))
      )
    )
  ));
 
  constructor(
    private actions$: Actions,
    private pokedexService: PokedexService
  ) {}
}