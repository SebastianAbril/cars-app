/**
 *
 * Notes: still in work
 */

export class Car {
  constructor(name, weight) {
    this._name = name;
    this._weight = weight;
  }

  get name() {
    return this._name;
  }
  get weight() {
    return this._weight;
  }

  getType() {
    return 'Car';
  }

  toJSON() {
    return {
      name: this._name,
      weight: this._weight
    };
  }
}
