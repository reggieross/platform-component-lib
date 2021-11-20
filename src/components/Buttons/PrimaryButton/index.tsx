import React from 'react';
import { ButtonProps, ButtonStyle, PlatformButton } from '../Button';

export const PlatformPrimaryButton: React.FC<ButtonProps> = (props) => {
  return <PlatformButton {...props} buttonStyle={ButtonStyle.PRIMARY} />;
};
