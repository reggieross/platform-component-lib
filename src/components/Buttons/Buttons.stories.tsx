import { storiesOf } from '@storybook/react';
import { PlatformPrimaryButton, PlatformSecondaryButton } from './index';
import React from 'react';
import SaveIcon from '@material-ui/icons/Save';
import { ButtonProps, ButtonSize, ButtonStyle } from './Button';

const ALL_BUTTON_SIZES = [
  ButtonSize.XSMALL,
  ButtonSize.SMALL,
  ButtonSize.MEDIUM,
  ButtonSize.LARGE,
  ButtonSize.XLARGE,
  ButtonSize.XXLARGE,
];

const renderAllSizes = (props: ButtonProps) => {
  return (
    <div>
      {ALL_BUTTON_SIZES.map((size) => {
        return (
          <div>
            <div>{size}</div>
            {props.buttonStyle === ButtonStyle.PRIMARY ? (
              <PlatformPrimaryButton size={size} {...props} />
            ) : (
              <PlatformSecondaryButton size={size} {...props} />
            )}
            <br />
          </div>
        );
      })}
    </div>
  );
};

storiesOf('Buttons/Primary', module)
  .add('Primary Button', () => {
    return renderAllSizes({
      buttonStyle: ButtonStyle.PRIMARY,
      text: 'Create Account',
    });
  })
  .add('Primary Button Disabled', () => {
    return renderAllSizes({
      buttonStyle: ButtonStyle.PRIMARY,
      text: 'Create Account',
      disabled: true,
    });
  })
  .add('Primary Button Loading', () => {
    return renderAllSizes({
      buttonStyle: ButtonStyle.PRIMARY,
      text: 'Create Account',
      loading: true,
    });
  })
  .add('Primary Button with start icon', () => {
    return renderAllSizes({
      buttonStyle: ButtonStyle.PRIMARY,
      text: 'Create Account',
      startIcon: <SaveIcon />,
    });
  })
  .add('Primary Button With end icon', () => {
    return renderAllSizes({
      buttonStyle: ButtonStyle.PRIMARY,
      text: 'Create Account',
      endIcon: <SaveIcon />,
    });
  });

storiesOf('Buttons/Secondary', module)
  .add('Secondary Button', () => {
    return renderAllSizes({
      buttonStyle: ButtonStyle.SECONDARY,
      text: 'Create Account',
      disabled: false,
    });
  })
  .add('Secondary Button Disabled', () => {
    return renderAllSizes({
      buttonStyle: ButtonStyle.SECONDARY,
      text: 'Create Account',
      disabled: true,
    });
  })
  .add('Secondary Button Loading', () => {
    return renderAllSizes({
      buttonStyle: ButtonStyle.SECONDARY,
      text: 'Create Account',
      disabled: false,
      loading: true,
    });
  })
  .add('Secondary Button with start icon', () => {
    return renderAllSizes({
      buttonStyle: ButtonStyle.SECONDARY,
      text: 'Create Account',
      disabled: false,
      startIcon: <SaveIcon />,
    });
  })
  .add('Secondary Button with start icon loading', () => {
    return renderAllSizes({
      buttonStyle: ButtonStyle.SECONDARY,
      text: 'Create Account',
      disabled: false,
      startIcon: <SaveIcon />,
      loading: true,
    });
  })
  .add('Secondary Button with end icon', () => {
    return renderAllSizes({
      buttonStyle: ButtonStyle.SECONDARY,
      text: 'Create Account',
      disabled: false,
      endIcon: <SaveIcon />,
    });
  });
