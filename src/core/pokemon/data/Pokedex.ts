export class Pokedex {
  entry_number: number;
  name: string;
  image: string;
  types: [];

  constructor(entry_number: number, name: string, image: string, type: []) {
    this.entry_number = entry_number;
    this.name = name;
    this.image = image;
    this.types = type;
  }
}
