import { storiesOf } from '@storybook/react';
import React from 'react';
import { PlatfromTextInput } from './index';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

storiesOf('Text Input', module)
  .add('Default', () => {
    return <PlatfromTextInput label={'Name'} />;
  })
  .add('Disabled', () => {
    return <PlatfromTextInput label={'Name'} disabled />;
  })
  .add('With Tooltip', () => {
    return (
      <PlatfromTextInput label="SSN" toolTip={{ message: 'Hello', altText: 'world' }} />
    );
  })
  .add('With Error Color', () => {
    const validation = (email: string) => {
      return {
        error: !new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email),
        message: `${email} is not a valid email`,
      };
    };
    return (
      <PlatfromTextInput
        label={'Email'}
        validator={validation}
        initErrorState={{ error: true, message: 'Some error' }}
      />
    );
  })
  .add('With Icon', () => {
    return <PlatfromTextInput label={'Date'} icon={<DateRangeIcon />} />;
  })
  .add('With Icon in front', () => {
    return (
      <PlatfromTextInput label={'Minimum Amount'} frontIcon={<AttachMoneyIcon />} />
    );
  })
  .add('With Icon & error handling', () => {
    const validation = (date: string) => {
      return {
        error: !new RegExp(
          /(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/([12]\d{3})/
        ).test(date),
        message: `${date} is not a valid date`,
      };
    };
    return (
      <PlatfromTextInput
        label={'Date'}
        icon={<DateRangeIcon />}
        validator={validation}
      />
    );
  })
  .add('With validation on load', () => {
    const validation = (val: string) => {
      return {
        error: val.length < 8,
        message: `${val} is not a less than 8`,
      };
    };
    return (
      <PlatfromTextInput
        label={'Date'}
        icon={<DateRangeIcon />}
        validator={validation}
        validateOnLoad={true}
        value={'This is my initial value'}
      />
    );
  })
  .add('Hidden Text', () => {
    return <PlatfromTextInput label={'Password'} hiddenText={true} />;
  });
