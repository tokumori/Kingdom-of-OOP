import Animal from './Animal.js';
export default class Bilateral extends Animal {
  constructor (name, body) {
    super (name, 'bilateral');
    this._body = body;
  }

  get body () {
    return this._body;
  }

  set body (body) {
    if (typeof (body) === 'string') {
      this._body = body;
    }
  }
}