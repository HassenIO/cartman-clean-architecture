export class Item {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  get() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
