import Palette from '../Palette';

const layering = new Palette({
  main: '#A0AEC0',
  dark: '#718096',
  light: '#CBD5E0',
  ink: '#121212',
});

// Having an array of layers is to maintain backwards compatibility for components that use the older theme.
// It's unlikely to be needed in the future so once all apps are on the new theme this can probably be removed.
export default Array.from({ length: 5 }, () => layering);
