export class Cafe {
  private _id: number;
  public get id(): number {
    return this._id;
  }

  private _nombre: string;
  public get nombre(): string {
    return this._nombre;
  }

  private _tipo: string;
  public get tipo(): string {
    return this._tipo;
  }

  private _region: string;
  public get region(): string {
    return this._region;
  }

  constructor (id: number, nombre: string, tipo: string, region: string) {
    this._id = id;
    this._nombre = nombre;
    this._tipo = tipo;
    this._region = region;
  }

}
