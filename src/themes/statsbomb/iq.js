import Theme from '../Theme';
import Palette from '../default/palette/Palette';

const brand = new Palette({
  main: '#542a66',
  dark: '#492559',
  light: '#5e3073',
  ink: '#ffffff',
});

export default {
  light: new Theme({
    colours: {
      brand,
    },
    name: 'IQ Light',
  }),
  dark: new Theme({
    colours: {
      brand,
    },
    isDark: true,
    name: 'IQ Dark',
  }),
};
