/**
 * This class contains all the information to be desplayed in
 * 'InventoryScreen', its attributes are: id, quantity,
 * createAt and car.
 */

export class Item {
  constructor(id, quantity, createAt, car) {
    this._id = id;
    this._quantity = quantity;
    this._createAt = createAt;
    this._car = car;
  }

  get id() {
    return this._id;
  }

  get quantity() {
    return this._quantity;
  }
  get createAt() {
    return this._createAt;
  }
  get car() {
    return this._car;
  }
}
