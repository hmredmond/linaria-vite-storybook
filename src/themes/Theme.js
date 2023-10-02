import merge from 'lodash.merge';
import { dark, light, lightViz } from './default/palette';
import font from './default/font';
import typography from './default/typography';
import breakpoints from './default/breakpoints';
import effects from './default/effects';
import opacity from './default/opacity';
import borderRadius from './default/borderRadius';
import useMediaQuery from './useMediaQuery';

const DEFAULT_SIZE = 1;

/**
 * @param {Object} props
 * @param {Boolean} props.isDark
 * @param {Boolean} props.isViz
 * @returns {Object} - Palette colours
 */
const getPalette = ({ isDark, isViz }) => {
  switch (true) {
    case isViz && !isDark:
      return lightViz;

    case isDark:
      return dark;

    default:
      return light;
  }
};

class Theme {
  #baseSpacing = 1;

  #ratio = 0.625; // by default the html font size is 62.5% see ./default/font.js

  #step = 0.05;

  breakpoints;

  colours;

  effects;

  opacity;

  borderRadius;

  font;

  isDark = false;

  name = 'base';

  typography;

  unit = 'rem';

  /**
   * @param {Object} props
   * @param {Object} [props.breakpoints]
   * @param {Number|String} props.breakpoints.xs
   * @param {Number|String} props.breakpoints.sm
   * @param {Number|String} props.breakpoints.md
   * @param {Number|String} props.breakpoints.lg
   * @param {Number|String} props.breakpoints.xl
   * @param {Object} [props.colours]
   * @param {Object} [props.effects]
   * @param {Object} [props.opacity]
   * @param {Object} [props.borderRadius]
   * @param {Object} [props.font]
   * @param {String} props.font.family
   * @param {Number|String} props.font.htmlSize
   * @param {Number} props.font.size
   * @param {Object} [props.typography]
   * @param {String} [props.name] - unique name for the theme.
   * @param {String|Number} [props.spacing] ideally a number but can convert strings.
   * @param {Boolean} [props.isDark]
   * @param {Boolean} [props.isViz] - type of theme either data or viz?
   */
  constructor(props = {}) {
    this.breakpoints = merge({}, breakpoints, props.breakpoints);
    this.colours = merge({}, getPalette(props), props.colours);
    this.font = merge({}, font, props.font);
    this.typography = merge({}, typography, props.typography);
    this.effects = merge({}, effects, props.effects);
    this.opacity = merge({}, opacity, props.opacity);
    this.borderRadius = merge({}, borderRadius, props.borderRadius);
    this.isDark = !!props.isDark;
    if (props.name) {
      this.name = props.name;
      this.key = props.name.replace(/ /g, '-').toLowerCase();
    }
    if (props.spacing) this.#baseSpacing = parseFloat(props.spacing);
    if (parseFloat(this.font.htmlSize) / 100 !== this.#ratio)
      this.#ratio = parseFloat(this.font.htmlSize) / 100;
  }

  /**
   * @param {Number|String} size
   * @returns {String} css size with unit or valid margin/padding value.
   */
  #spacing = (size = DEFAULT_SIZE) => {
    if (typeof size === 'string' && ['auto', 'initial'].includes(size))
      return size;

    const space = this.#baseSpacing * parseFloat(size);
    return `${space}${this.unit}`;
  };

  /**
   * Converts a number or string into a spacing value.
   * Up to four sizes are allowed to cater for margin and padding options.
   *
   * @param {...(Number|String)} inputs of sizes
   * @returns {String}
   */
  spacing = (...inputs) => {
    const sizes = inputs.length === 0 ? [DEFAULT_SIZE] : inputs.slice(0, 4);
    return sizes.map(this.#spacing).join(' ');
  };

  /**
   * @param {Number|String} size
   * @param {Object} [options]
   * @param {Boolean} options.appendUnits
   * @param {Number} options.decimalPlaces
   * @returns {string|number}
   */
  relativeSize = (size, { appendUnits = true, decimalPlaces = 2 } = {}) => {
    const value = +(parseFloat(size) * this.#ratio).toFixed(decimalPlaces);
    return appendUnits ? `${value}${this.unit}` : value;
  };

  /**
   * @param {String} breakpoint
   * @param {Object} [options]
   * @param {String} options.mediaType
   * @returns {String} Media Query to a max width
   */
  mediaQueryTo = (breakpoint, options = {}) => {
    const mediaType = options.mediaType || 'screen';
    const maxWidth = this.relativeSize(
      parseFloat(this.breakpoints[breakpoint]) - this.#step
    );
    return `@media ${mediaType} and (max-width: ${maxWidth})`;
  };

  /**
   * @param {String} breakpoint
   * @param {Object} [options]
   * @param {String} options.mediaType
   * @returns {String} Media Query from a min width
   */
  mediaQueryFrom = (breakpoint, options) => {
    const mediaType = options?.mediaType || 'screen';
    const minWidth = this.relativeSize(this.breakpoints[breakpoint]);
    return `@media ${mediaType} and (min-width: ${minWidth})`;
  };

  /**
   * @param {String} startBreakpoint
   * @param {String} endBreakpoint
   * @param {Object} [options]
   * @param {String} options.mediaType
   * @returns {String} Media Query
   */
  mediaQueryInBetween = (
    startBreakpoint = 'xs',
    endBreakpoint = 'xl',
    options = {}
  ) => {
    const mediaType = options.mediaType || 'screen';
    const start = this.relativeSize(this.breakpoints[startBreakpoint]);
    const end = this.relativeSize(
      parseFloat(this.breakpoints[endBreakpoint]) - this.#step
    );
    return `@media ${mediaType} and (min-width: ${start}) and (max-width: ${end})`;
  };

  /**
   * @param {String} breakpointOrQuery
   * @returns {MediaQueryList | undefined}
   */
  mediaQueryMatch = (breakpointOrQuery = 'md') => {
    const breakpoint = this.breakpoints[breakpointOrQuery];
    const query = (
      breakpoint ? this.mediaQueryTo(breakpointOrQuery) : breakpointOrQuery
    )
      // window.matchMedia doesn't seem to support media type.
      // So remove it if it exists.
      .replace('@media screen and ', '');
    return useMediaQuery(query);
  };

  // Shorthand aliases for media queries.
  mqFrom = this.mediaQueryFrom;

  mqTo = this.mediaQueryTo;

  mqInBetween = this.mediaQueryInBetween;

  mqMatch = this.mediaQueryMatch;

  /**
   * @param {String} hexColour hex colour value
   * @param {String} opacityToken design token to use
   * @returns {String} hex colour with opacity
   */
  applyOpacity = (hexColour, opacityToken) => {
    const value = this.opacity[opacityToken];
    const hexOpacity = Math.round(value * 255)
      .toString(16)
      .padStart(2, '0');
    return `${hexColour}${hexOpacity}`;
  };
}

export default Theme;
