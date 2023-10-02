import React, { useState } from 'react';
import { DarkTheme, LightTheme, ThemeProvider } from '../../theming';
import {  WithThemeStyled } from './LinariaSample.styles';

const ThemedLinaria =  () => {
    const [theme, setTheme] = useState();
    return (
        <ThemeProvider theme={theme}>
            <WithThemeStyled>Themed content </WithThemeStyled>
            <button onClick={() => setTheme(theme ===LightTheme ? DarkTheme: LightTheme)}>toggle theme</button>
        </ThemeProvider>
    )
}

/**
 * Primary UI component for user interaction
 */
export const LinariaSample = () => {
  return (
    <ThemeProvider>
      <ThemedLinaria/>
    </ThemeProvider>
 );
};

export default LinariaSample;