export class Recipe {
  _name!: string;
  _category?: string;
  _description!: string;
  _time!: number;
  constructor(aName: string, aTime: number,aDescription: string,) {
    this.name = aName;
    this.description = aDescription;
    this.time = aTime;
  }

  get name(): string {
    return this._name;
  }

  set name(aName: string) {
    const trimmed = aName.trim();
    if (trimmed.length === 0) {
      throw new Error("El nombre de la receta no puede ser vacío.");
    }
    this._name = trimmed;
  }

  get time(): number {
    return this._time;
  }

  set time(aTime: number) {
    if (aTime < 0) {
      throw new Error("El tiempo de la receta no puede ser negativo.");
    }
    this._time = aTime;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(aCategory: string) {
    this._category = aCategory;
  }

  get description(): string {
    return this._description;
  }

  set description(aDescription: string) {
    const trimmed = aDescription.trim();
    if (trimmed.length === 0) {
      throw new Error("La descripción de la receta no puede ser vacía.");
    }
    this._description = trimmed;
  }

  toString(): string {
    return `Receta: ${this.name} - Tiempo: ${this.time}  - Descripción: ${this.description} - Categoría: ${this.category}`;
  }
}
