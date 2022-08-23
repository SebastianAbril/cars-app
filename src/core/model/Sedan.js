import { Car } from './Car.js';

export class Sedan extends Car {
  constructor(name, weight, numberOfDoors, trunkCapacity) {
    super(name, weight);
    this._numberOfDoors = numberOfDoors;
    this._trunkCapacity = trunkCapacity;
  }
  //methods
  openTrunk() {
    console.log('Trunk opened');
  }
  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      numberOfDoors: this._numberOfDoors,
      trunkCapacity: this._trunkCapacity
    };
  }
  getType() {
    return 'Sedan';
  }
  //getters
  get numberOfDoors() {
    return this._numberOfDoors;
  }
  get trunkCapacity() {
    return this._trunkCapacity;
  }
}
