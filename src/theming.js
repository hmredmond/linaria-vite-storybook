import { createTheming } from '@callstack/react-theme-provider';
import { iqTheme, videoTheme } from './themes';

// export const DarkTheme = {

//   canvas: {
//     primary: {
//         main: '#37454B',
//         dark: '#303C41',
//         light: '#3E4D54',
//         ink: '#FFFFFF',
//     },
//     secondary: {
//         main: '#1E2528',
//         dark: '#121212',
//         light: '#273135',
//         ink: '#FFFFFF',
//     },
//   },
// }

// export const LightTheme = {

//   canvas: {
//     primary: {
//       main: '#A8ADB4',
//       dark: '#868A90',
//       light: '#B9BDC3',
//       ink: '#121212',
//     },
//     secondary: {
//       main: '#EFF0F0',
//       dark: '#BFC0C0',
//       light: '#E8EBEF',
//       ink: '#121212',
//     },
//   },
// }

export const { ThemeProvider, withTheme, useTheme } = createTheming({
    ...videoTheme.light
});
