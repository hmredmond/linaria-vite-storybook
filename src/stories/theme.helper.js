// Put your colors in an object grouped by the theme names
const theme = {
    light: {
      text: 'black',
      bg: 'magenta'
    },
    dark: {
      text: 'white',
      bg: 'blue'
    },
  };
  
  // Create a small helper function to loop over the themes and create CSS rule sets
  export const theming = cb =>
    Object.keys(theme).reduce((acc, name) => Object.assign(acc, {
      [`.theme-${name} &`]: cb(theme[name]),
    }), {});


