class StringBuilder {
  constructor(incomString) {
    this._value = incomString;
  }
  get value() {
    return this._value;
  }
  append(sumvl) {
    this._value += sumvl;
  }
  prepend(sumvl) {
    this._value = sumvl + this._value;
  }
  pad(sumvl) {
    this._value = sumvl + this._value + sumvl;
  }
}
const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
