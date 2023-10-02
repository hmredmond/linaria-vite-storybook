'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { StyledChip, ChildrenWrapper, CloseWrapper } from './Chip.styles';
import { CHIP_VARIANTS } from './Chip.constants';
// import { Close } from '../../assets/icons';

/**
 * Chip
 * Indicates selected options and allows the removal of those options.
 */
export const Chip = ({
  variant = CHIP_VARIANTS.REMOVE,
  onClick,
  label,
  disabled = false,
}) => {
  const isRemove = variant === CHIP_VARIANTS.REMOVE;

  const handleClick = (e) => {
    if (!disabled && (e.key === 'Enter' || e.type === 'click')) {
      onClick(e);
    }
  };

  return (
    <StyledChip
      $isRemove={isRemove}
      $disabled={disabled}
      onClick={(e) => !isRemove && handleClick(e)}
      onKeyDown={(e) => !isRemove && handleClick(e)}
      tabIndex={isRemove || disabled ? '-1' : '0'}
    >
      <ChildrenWrapper $isRemove={isRemove}>{label}</ChildrenWrapper>
      {isRemove && (
        <CloseWrapper onClick={handleClick} disabled={disabled}>
         x
        </CloseWrapper>
      )}
    </StyledChip>
  );
};

Chip.propTypes = {
  /** whether the chip is disabled - only applicable to remove variant */
  disabled: PropTypes.bool,
  /** text to display in the chip */
  label: PropTypes.string.isRequired,
  /** callback function for when the chip or remove button are clicked */
  onClick: PropTypes.func.isRequired,
  /** which variant of Chip to render */
  variant: PropTypes.oneOf(Object.values(CHIP_VARIANTS)),
};

export default { Chip };
