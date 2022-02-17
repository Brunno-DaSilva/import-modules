export class Stack {
  constructor(array) {
    this._array = array;
  }
  static get empty() {
    return new Stack([]);
  }
  get length() {
    return this._array.length;
  }
  push(value) {
    return new Stack([...this._array, value]);
  }
  get top() {
    return this._array[this._array.length - 1];
  }
  pop() {
    return new Stack(this._array.slice(0, this._array.length - 1));
  }
  maps() {
    return this._array.map((data) => {
      return data;
    });
  }
}
