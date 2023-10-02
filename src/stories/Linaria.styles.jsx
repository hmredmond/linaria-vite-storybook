import React from 'react';
import { styled } from '@linaria/react';
import { withTheme } from '../theming';

// THIS IS WHAT WE WANT TO USE
export const WithThemeStyled = withTheme(styled.h1`
 background-color:  ${({theme}) => theme.canvas.primary.main};
 color: ${({theme}) => theme.canvas.primary.ink};
`);

// OTHER EXAMPLES< BUT NEED PROPS PASSED IN FROM THE COMPONENT
  // Use the helper in your styles
//   export const TitleThemed = styled.h1`
//     text-transform: uppercase;
  
//     ${theming(c => ({
//       color: c.text,
//       backgroundColor: c.bg
//     }))};
//   `;

