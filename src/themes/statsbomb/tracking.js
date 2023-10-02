import Theme from '../Theme';
import Palette from '../default/palette/Palette';

const brand = new Palette({
  main: '#B64C00',
  dark: '#9E4200',
  light: '#CC5500',
  ink: '#ffffff',
});

export default {
  light: new Theme({
    colours: {
      brand,
    },
    name: 'Tracking Light',
  }),
  dark: new Theme({
    colours: {
      brand,
    },
    isDark: true,
    name: 'Tracking Dark',
  }),
};
