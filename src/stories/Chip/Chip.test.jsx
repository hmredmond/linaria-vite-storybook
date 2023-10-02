import React from 'react';
import { render, screen } from '../../../.jest/utils';
import { Chip } from './Chip';
import { CHIP_VARIANTS } from './Chip.constants';

describe('<Chip />', () => {
  const defaultProps = {
    label: 'test-label',
    onClick: jest.fn(),
  };

  describe('remove variant', () => {
    it('calls onClick when the remove icon is clicked', async () => {
      const { user } = render(<Chip {...defaultProps} />);
      const remove = screen.getByRole('button');
      await user.click(remove);

      expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    });

    it('does NOT call onClick when the Chip is clicked', async () => {
      const { user } = render(<Chip {...defaultProps} />);
      const chip = screen.getByText(defaultProps.label);
      await user.click(chip);

      expect(defaultProps.onClick).not.toHaveBeenCalled();
    });

    it('calls onClick when focused and the Enter key is pressed', async () => {
      const { user } = render(<Chip {...defaultProps} />);
      await user.keyboard('{Tab}{Enter}');

      expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    });

    it('does NOT call onClick when focused and a non Enter key is pressed', async () => {
      const { user } = render(<Chip {...defaultProps} />);
      await user.keyboard('{Tab}{ArrowDown}');

      expect(defaultProps.onClick).not.toHaveBeenCalled();
    });

    it('renders correctly in dark mode', () => {
      const { container } = render(<Chip {...defaultProps} />, {
        isDarkTheme: true,
      });
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  const moreVariantProps = {
    ...defaultProps,
    variant: CHIP_VARIANTS.MORE,
  };

  describe('more variant', () => {
    it('calls onClick when the chip is clicked', async () => {
      const { user } = render(<Chip {...moreVariantProps} />);
      const chip = screen.getByText(moreVariantProps.label);
      await user.click(chip);

      expect(moreVariantProps.onClick).toHaveBeenCalledTimes(1);
    });

    it('calls onClick when focused and the Enter key is pressed', async () => {
      const { user } = render(<Chip {...moreVariantProps} />);
      await user.keyboard('{Tab}{Enter}');

      expect(moreVariantProps.onClick).toHaveBeenCalledTimes(1);
    });

    it('does NOT call onClick when focused and a non Enter key is pressed', async () => {
      const { user } = render(<Chip {...moreVariantProps} />);
      await user.keyboard('{Tab}{ArrowDown}');

      expect(moreVariantProps.onClick).not.toHaveBeenCalled();
    });

    it('renders correctly in dark mode', () => {
      const { container } = render(<Chip {...moreVariantProps} />, {
        isDarkTheme: true,
      });
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
