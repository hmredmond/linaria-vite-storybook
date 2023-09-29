import React, { useState } from 'react';
import { ThemeProvider, useTheme, withTheme } from '../theming';
import { TitleTag, TitleThemed, WithTitleThemed, WithTitleThemedProps, WithTitleThemedTheme, title } from './Linaria.styles';



const ButtonX = withTheme(({ theme }) => (
    <div style={{ color: theme.secondaryColor }}>Click me</div>
  ));



const ThemedLinaria = withTheme( (props) => {
    const [xtheme, setTheme] = useState('light');

    const themeX = useTheme();


return (
    <div className={`theme-${xtheme}`}>
    <TitleTag>Yo world, s'up</TitleTag>
    <h1 className={title}>Hello</h1>
    <TitleThemed >Themed</TitleThemed>

    <ButtonX>asdads</ButtonX>
    
    <WithTitleThemed {...props.theme}>Props.theme</WithTitleThemed> 
    <WithTitleThemedProps {...props}>...props</WithTitleThemedProps> 

    <WithTitleThemedTheme theme={themeX}>theme</WithTitleThemedTheme> 
    
    <button onClick={() => setTheme(xtheme ==='light' ? 'dark': 'light')}>toggle theme</button>
    </div>
)

})

/**
 * Primary UI component for user interaction
 */
export const Linaria = () => {
  
  return (
    <ThemeProvider>
      <ThemedLinaria/>
    
    </ThemeProvider>
  
 );
};

export default Linaria;