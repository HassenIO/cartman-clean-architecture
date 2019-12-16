export interface StorageInterface {
  getAll(): string[][];
  get(id: number): string[];
  set(id: number, data: number[]): void;
  save(): void;
}
