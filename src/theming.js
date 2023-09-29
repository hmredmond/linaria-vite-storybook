import { createTheming } from '@callstack/react-theme-provider';
const { ThemeProvider, withTheme, useTheme } = createTheming({
  primaryColor: 'red',
  secondaryColor: 'green',
});
export { ThemeProvider, withTheme , useTheme};