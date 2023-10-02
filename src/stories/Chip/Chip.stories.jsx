import React from 'react';

import { action } from '@storybook/addon-actions';
import { Chip } from './Chip';
import { CHIP_VARIANTS } from './Chip.constants';
import { useTheme } from '../../theming';

export default {
  args: {
    disabled: false,
    label: 'Remove',
    onClick: action('click'),
    variant: CHIP_VARIANTS.REMOVE,
  },
  argTypes: {
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    onClick: { action: 'click' },
    variant: {
      control: 'inline-radio',
      options: Object.values(CHIP_VARIANTS),
    },
  },
  component: Chip,
  title: 'Components/Content/Chip',
};

const Template = (props) => {
  const theme = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.canvas.secondary.main,
        padding: '1rem',
      }}
    >
      <Chip {...props} />
    </div>
  );
};

export const RemoveVariant = {
  render: Template,
};

export const MoreVariant = {
  args: {
    label: '99 more',
    variant: CHIP_VARIANTS.MORE,
  },
  render: Template,
};

export const DisabledRemove = {
  args: {
    disabled: true,
  },
  render: Template,
};

export const DisabledMore = {
  args: {
    disabled: true,
    label: '99 more',
    variant: CHIP_VARIANTS.MORE,
  },
  render: Template,
};
