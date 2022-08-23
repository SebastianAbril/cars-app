import { Car } from './Car';

export class Convertible extends Car {
  constructor(name, weight, maxSpeed, cylinderCapacity) {
    super(name, weight);
    this._maxSpeed = maxSpeed;
    this._cylinderCapacity = cylinderCapacity;
  }

  // methods
  openRoof() {
    console.log('Roof opened');
  }
  closeRoof() {
    console.log('Roof closed');
  }
  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      maxSpeed: this._maxSpeed,
      cylinderCapacity: this._cylinderCapacity
    };
  }
  getType() {
    return 'Convertible';
  }
  // getters

  get maxSpeed() {
    return this._maxSpeed;
  }
  get cylinderCapacity() {
    return this._cylinderCapacity;
  }
}
