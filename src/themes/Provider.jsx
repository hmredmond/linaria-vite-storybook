import React from 'react';
import PropTypes from 'prop-types';
// import { ThemeProvider } from 'styled-components';
import { ThemeProvider } from '../theming';

// import GlobalStyle from './global.styles';
// The themes.css file will be generated at build time. So safe to ignore the eslint rule below.

// import cssTheme from '../assets/themes.css';
// import tw from '../assets/tailwind.css';
// import font from '../assets/fonts.css';

const StatsbombThemeProvider = ({
  applyGlobalStyles = true,
  children,
  rsc = false,
  theme = undefined,
}) => {

  console.log(theme?.key)
  // useEffect(() => {
  //   document.documentElement.setAttribute('data-theme', theme.key);
  //   document.documentElement.setAttribute(
  //     'data-thememode',
  //     theme.isDark ? 'dark' : 'light'
  //   );
  // }, [theme.key, theme.isDark]);

  // This is a mess.
  // We need to remove this as soon as we have a nice solution for using this library on a RSC project.
  /* istanbul ignore next */
  if (rsc) {
    // This is a hack to get the styles to work.
    // console.log(cssTheme, font, tw);
  }

  return (
    <ThemeProvider theme={theme}>
     
      {children}
    </ThemeProvider>
  );
};

StatsbombThemeProvider.propTypes = {
  // whether to provider should apply default global styles
  applyGlobalStyles: PropTypes.bool,
  children: PropTypes.node.isRequired,
  /* TEMP: Is this provider being used in a project that supports React Server Components? */
  rsc: PropTypes.bool,
  // We don't care what the shape of this prop is as it's really a higher order component for ThemeProvider.
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object.isRequired,
};

export default StatsbombThemeProvider;
