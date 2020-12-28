class StringBuilder {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value = this.value.concat(str);
    return this.value;
  }

  prepend(str) {
    this._value = str.concat(this.value);
    return this.value;
  }
  pad(str) {
    this._value = str.concat(this.value);
    this._value = this.value.concat(str);
    return this.value;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
