import murmurhash from "murmurhash";

export class BloomFilter {
  private size: number;
  private bitArray: Uint8Array;
  private hashCount: number;

  constructor(size: number, hashCount: number) {
    this.size = size;
    this.bitArray = new Uint8Array(size);
    this.hashCount = hashCount;
  }

  private getHashes(value: string): number[] {
    const hashes: number[] = [];
    let seed = 0;

    for (let i = 0; i < this.hashCount; i++) {
      const hash = murmurhash.v3(value, seed) % this.size;
      hashes.push(hash);
      seed = hash; // change seed each round
    }

    return hashes;
  }

  add(value: string): void {
    const hashes = this.getHashes(value);
    hashes.forEach((h) => (this.bitArray[h] = 1));
  }

  contains(value: string): boolean {
    const hashes = this.getHashes(value);
    return hashes.every((h) => this.bitArray[h] === 1);
  }
}
