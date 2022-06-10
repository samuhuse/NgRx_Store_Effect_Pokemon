import { createAction, props } from '@ngrx/store';
import { PokemonLookup } from '../models/pokemon-lookup.model';

export const getPokemons = createAction(
  '[Pokemon List] GetPokemons',
  props<{ limit: number; offset: number }>()
);

export const loadedPokemons = createAction(
  '[Pokemon List] LoadedPokemons',
  props<{ pokemons: PokemonLookup[] }>()
);
