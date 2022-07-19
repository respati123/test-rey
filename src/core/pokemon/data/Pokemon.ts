export class Pokemon {
  name: string;
  types: TTypes[];
  images: string;

  constructor(name: string, types: TTypes[], images: string) {
    this.name = name;
    this.types = types;
    this.images = images;
  }
}

export type TTypes = {
  slot: number;
  type: {
    name: string;
  };
};
