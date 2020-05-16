class Car {
  //static method for output to console user car specifications
  static getSpecs(car) {
    return console.log(
      `Max Speed:${car.maxSpeed}, Speed:${car.speed}, Engine on:${car.isOn}, Distance:${car.distanse}, Car prise:${car.price}`
    );
  }
  constructor(userCar) {
    // this class properties
    this.speed = 0;
    this._price = userCar.price;
    this.maxSpeed = userCar.maxSpeed;
    this.isOn = false;
    this.distanse = 0;
  }

  // getter for a price
  get price() {
    return this._price;
  }

  // setter for a new price
  set price(newPrice) {
    this._price = newPrice;
    return this._price;
  }
  // turn on engine method
  turnOn() {
    this.isOn = true;
  }

  // turn of engine method
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  // accelerate car speed

  accelerate(value) {
    this.speed + value > this.maxSpeed
      ? this.speed === this.maxSpeed
      : (this.speed += value);
  }

  // decelerate car speed
  decelerate(value) {
    this.speed - value < 0 ? (this.speed = 0) : (this.speed -= value);
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if (this.isOn) {
      this.distanse += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
