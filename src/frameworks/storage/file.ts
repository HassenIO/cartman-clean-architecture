import * as fs from 'fs';
import * as path from 'path';
import { StorageInterface } from '../../adapters/definitions/StorageInterface';

export class File implements StorageInterface {
  private filename: string = '';
  private filepath: string = '';
  private data: Array<Array<any>> = [[]];

  constructor(filename: string) {
    this.filename = filename;
    this.filepath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'data',
      filename
    );
    this.data = fs
      .readFileSync(this.filepath, 'utf-8')
      .split('\n')
      .filter((line: string) => !!line)
      .map((line: string) => line.split(';'));
  }

  getAll() {
    return this.data;
  }

  get(id: number) {
    return this.data[id];
  }

  set(id: number, data: any) {
    this.data[id] = data;
  }

  save() {
    const data = this.data.map((row: any) => row.join(';')).join('\n');
    fs.writeFileSync(this.filepath, data);
  }
}
