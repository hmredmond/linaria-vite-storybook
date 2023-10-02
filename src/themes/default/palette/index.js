import brand from './brand';
import messaging from './messaging';
import darkPalette from './dark';
import lightPalette from './light';
import Palette from './Palette';
import visualisations from './visualisations';

const defaultPalette = {
  brand,
  messaging,
  visualisations,
};
export const dark = {
  ...darkPalette,
  ...defaultPalette,
};

export const light = {
  ...lightPalette,
  ...defaultPalette,
};

export const lightViz = {
  ...light,
  canvas: {
    primary: new Palette({
      main: '#A8ADB4',
      dark: '#868A90',
      light: '#B9BDC3',
      ink: '#121212',
    }),
    secondary: new Palette({
      main: '#EFF0F0',
      dark: '#BFC0C0',
      light: '#E8EBEF',
      ink: '#121212',
    }),
  },
};

export default { dark, light, lightViz };
