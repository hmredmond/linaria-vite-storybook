import { styled } from '@linaria/react';
import { withTheme } from "../../src/theming";

export const Canvas = withTheme(styled.div`
    background: ${({ theme }) => theme.colours.canvas.primary};
`);

export default { Canvas }