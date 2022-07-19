export class Evolution {
  chain: TChain;

  constructor(chain: TChain) {
    this.chain = chain;
  }
}

export type TChain = {
  evolution_details: [];
  evolves_to: [];
};
