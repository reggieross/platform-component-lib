import { PlatfromTextInput } from './index';
import { mount } from 'enzyme';
import React from 'react';
import DateRangeIcon from '@material-ui/icons/DateRange';

describe('Text Input', () => {
  it('Should mount successfully', () => {
    const component = mount(
      <PlatfromTextInput
        label={'Name'}
        toolTip={{ message: 'something', altText: 'something else' }}
      />
    );

    expect(component.exists()).toBe(true);
  });

  it('Should show the tooltip when provided', () => {
    const component = mount(
      <PlatfromTextInput
        label={'Name'}
        toolTip={{ message: 'something', altText: 'something else' }}
      />
    );

    expect(
      component.find('[aria-label="something: input help"]').exists()
    ).toBe(true);
  });

  it('Should icon when provided', () => {
    const component = mount(
      <PlatfromTextInput label={'Name'} icon={<DateRangeIcon id={'DateIcon'} />} />
    );

    expect(component.find('#DateIcon').exists()).toBe(true);
  });
});
