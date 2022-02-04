import * as React from 'react';
import styled from 'styled-components';
import { COLORS } from 'styles/colors';

type Props = {
  variant?: 'primary' | 'secondary' | 'outlined';
};

const variants = {
  primary: {
    background: COLORS.mediumPurple,
    color: COLORS.white
  },
  secondary: {
    background: COLORS.oxfordBlue,
    color: COLORS.white
  },
  outlined: {
    background: COLORS.white,
    color: COLORS.black
  }
};

const StyledButton = styled.button(({ variant = 'primary' }: Props) => ({
  fontSize: 18,
  border: 'none',
  borderRadius: 6,
  padding: '10px 28px',
  boxShadow: '0px 1px 4px 0px #98989826',
  ...variants[variant]
}));

const Button: React.FC<Props> = ({ children, variant }) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};

Button.displayName = 'Button';

export default Button;
