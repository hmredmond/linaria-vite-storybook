import React from 'react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { theming } from './theme.helper';


  // Use the helper in your styles
  export const TitleThemed = styled.h1`
    text-transform: uppercase;
  
    ${theming(c => ({
      color: c.text,
      backgroundColor: c.bg
    }))};
  `;

  export const WithTitleThemed = styled.h1`
  color : ${(props) => props.secondaryColor };
  text-transform: uppercase;

`;
export const WithTitleThemedProps = styled.h1`
color : ${({theme}) => theme.secondaryColor };
text-transform: uppercase;

`;

export const WithTitleThemedTheme = styled.h1`
color : ${({theme}) => theme.secondaryColor };
text-transform: uppercase;

`;
export const title = css`
  font-size: 24px;
  font-weight: bold;
  color:red;
`;

export const TitleTag = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color:blue;
`;
