/** @type { import('@storybook/react').Preview } */
import React from 'react';
import Canvas from './Canvas';
import { themes, iqTheme } from '../src/themes';
import StatsbombThemeProvider from '../src/themes/Provider';

const withTheme = (Story, context) => {
  const theme = themes.find(({ name }) => name === context.globals.theme) || iqTheme.light;
  console.log(theme?.key)
  return (
<StatsbombThemeProvider theme={theme}>
  <Canvas>
        <Story />
        </Canvas>
        </StatsbombThemeProvider>


  );
};

export const decorators = [withTheme];

const preview = {
  decorators: [withTheme],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'List of available themes',
      defaultValue: themes[0].name,
      toolbar: {
        icon: 'paintbrush',
        items: themes.map(({ name }) => ({
          title: name,
          value: name,
        })),
      },
    },
  },
};

export default preview;
