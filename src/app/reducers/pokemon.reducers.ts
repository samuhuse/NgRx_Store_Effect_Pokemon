import { Action, createReducer, on } from '@ngrx/store';
import { PokemonLookup } from '../models/pokemon-lookup.model';

import * as pokemonActions from './../actions/pokemon.actions';

const initialState: PokemonLookup[] = [];

export const loadPokemonsReducer = createReducer<PokemonLookup[], Action>(
  initialState,
  on(pokemonActions.loadedPokemons, (state, { pokemons }) =>
    [...state].concat(pokemons)
  )
);
