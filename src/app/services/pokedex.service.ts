import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokemonLookup } from '../models/pokemon-lookup.model';
import { PokemonListDto } from './DTOs/pokemon-list-dto';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private baseEndpoinAddress: string = 'https://pokeapi.co/api/v2';

  constructor(private httpClient: HttpClient) {}

  public getPokemons(
    limit: number = 20,
    offset: number = 0
  ): Observable<PokemonLookup[]> {
    console.log('oofset:', offset);

    return this.httpClient
      .get<PokemonListDto>(
        this.baseEndpoinAddress + `/pokemon?offset=${offset}&limit=${limit}`
      )
      .pipe(map((result) => result.results as PokemonLookup[]));
  }
}
