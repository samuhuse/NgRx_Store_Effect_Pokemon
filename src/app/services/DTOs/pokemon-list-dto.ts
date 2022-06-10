export interface PokemonLookUpDto {
  name: string;
  url: string;
}

export interface PokemonListDto {
  count: number;
  next: string;
  previous?: any;
  results: PokemonLookUpDto[];
}
