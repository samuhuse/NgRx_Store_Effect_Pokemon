import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app-state';
import { PokemonLookup } from '../../models/pokemon-lookup.model';

import * as pokemonActions from './../../actions/pokemon.actions';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css'],
})
export class PokemonsListComponent implements OnInit {
  public pokemons$: Observable<PokemonLookup[]>;
  private currentOffset: number = 0;

  constructor(private store: Store<AppState>) {
    this.pokemons$ = this.store.select((state) => state.pokemons);
    this.store
      .select((state) => state.pokemons)
      .subscribe((p) => console.log(p));
  }

  ngOnInit() {}

  public retrivePokemonsClicked() {
    this.currentOffset += 5;
    console.log(this.currentOffset)
    this.store.dispatch(
      pokemonActions.getPokemons({ limit: 5, offset: this.currentOffset })
    );
  }
}
