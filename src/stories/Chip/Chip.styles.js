import { styled } from '@linaria/react';
import { withTheme } from '../../theming';


export const StyledChip = withTheme(styled.span`
  display: inline-flex;
  align-items: center;
  height: 2rem;
  color: ${({ theme }) => theme.canvas.primary.ink};
  
  cursor: ${({ $isRemove, $disabled }) =>
    $isRemove || $disabled ? 'default' : 'pointer'};
  opacity: ${({ $isRemove, $disabled }) => !$isRemove && $disabled && '0.28'};
  border-radius: 99.9rem;



  ${({ theme, $isRemove }) =>
    $isRemove
      ? `
        border: 0.2rem solid ${theme.canvas.primary.main}
      `
      : `
        background-color: ${theme.canvas.secondary.main};
    `};

  ${({ theme, $isRemove, $disabled }) =>
    !$isRemove &&
    !$disabled &&
    `
    &:hover {
      background-color: ${
        theme.canvas.primary.ink
      };
    }

    &:active {
      background-color: transparent;
    }
  `};
`);

export const ChildrenWrapper = styled.span`
  padding: ${({ $isRemove }) =>
    $isRemove ? '0 0.4rem 0rem 0.8rem' : '0 0.8rem'};
`;

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
            theme.canvas.primary.ink
          };
        }

        &:active {
          background-color: transparent;
        }
      `}



  svg {
    fill: ${({ theme }) =>  theme.canvas.primary.main};
  }
`);
