import Theme from '../Theme';
import Palette from '../default/palette/Palette';

const brand = new Palette({
  main: '#156F73',
  dark: '#136064',
  light: '#187C81',
  ink: '#ffffff',
});

export default {
  light: new Theme({
    colours: {
      brand,
    },
    name: 'Video Light',
  }),
  dark: new Theme({
    colours: {
      brand,
    },
    isDark: true,
    name: 'Video Dark',
  }),
};
