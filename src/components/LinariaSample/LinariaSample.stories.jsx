import React from 'react';
import LinariaSample from './LinariaSample';
import { useTheme } from '../../theming';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Linaria',
  component: LinariaSample,
};


const Template = (props) => {
  const theme = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.colours.brand.main,
        padding: '1rem',
      }}
    >
      <LinariaSample {...props} />
    </div>
  );
};


export const Sample = {
  render: Template,
};


