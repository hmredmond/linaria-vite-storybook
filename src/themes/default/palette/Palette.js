export default class Palette {
  constructor({ dark, light, main, ink }) {
    this.dark = dark;
    this.light = light;
    this.main = main;
    this.ink = ink;
    Object.freeze(this);
  }

  toString() {
    return this.main;
  }
}
