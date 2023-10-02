import { styled } from '@linaria/react';
import { withTheme } from '../../theming';

export const StyledChip = withTheme(styled.span`
  display: inline-flex;
  align-items: center;
  height: 2rem;
  color: ${({ theme }) => theme.colours.ink.primary.main};
  ${({ theme }) => theme.typography.bodyMedium};
  cursor: ${({ $isRemove, $disabled }) =>
    $isRemove || $disabled ? 'default' : 'pointer'};
  opacity: ${({ $isRemove, $disabled }) => !$isRemove && $disabled && '0.28'};
  border-radius: 99.9rem;

  &:focus-visible {
    box-shadow: ${({ theme }) => theme.effects.focus};
    outline: none;
  }

  ${({ theme, $isRemove }) =>
    $isRemove
      ? `
        border: 0.2rem solid ${theme.colours.interface.main}
      `
      : `
        background-color: ${theme.colours.canvas.secondary.main};
    `};

  ${({ theme, $isRemove, $disabled }) =>
    !$isRemove &&
    !$disabled &&
    `
    &:hover {
      background-color: ${
        theme.isDark
          ? theme.colours.canvas.secondary.light
          : theme.colours.canvas.secondary.dark
      };
    }

    &:active {
      background-color: transparent;
    }
  `};
`);

export const ChildrenWrapper = withTheme(styled.span`
  padding: ${({ $isRemove }) =>
    $isRemove ? '0 0.4rem 0rem 0.8rem' : '0 0.8rem'};
`);

export const CloseWrapper = withTheme(styled.button`
  display: grid;
  place-items: center;
  border-radius: 99.9rem;
  height: 1.6rem;
  width: 1.6rem;

  ${({ theme, disabled }) =>
    disabled
      ? `opacity: 0.28;`
      : `
        cursor: pointer;

        &:hover {
          background-color: ${
            theme.isDark
              ? theme.colours.canvas.secondary.light
              : theme.colours.canvas.secondary.dark
          };
        }

        &:active {
          background-color: transparent;
        }
      `}

  &:focus-visible {
    box-shadow: ${({ theme }) => theme.effects.focus};
    outline: none;
  }

  svg {
    fill: ${({ theme }) => theme.colours.graphics.primary.main};
  }
`);
