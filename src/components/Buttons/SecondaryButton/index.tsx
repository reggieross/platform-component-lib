import React from 'react';
import { ButtonProps, ButtonStyle, PlatformButton } from '../Button';

export const PlatformSecondaryButton: React.FC<ButtonProps> = (props) => {
  return <PlatformButton {...props} buttonStyle={ButtonStyle.SECONDARY} />;
};
