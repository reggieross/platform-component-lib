import { PlatformPrimaryButton } from './index';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
import { mount } from 'enzyme';

describe('Primary Button', () => {
  it('Should mount successfully', () => {
    const component = mount(<PlatformPrimaryButton text={'Create Account'} />);
    expect(component.exists()).toBe(true);
  });

  it('Should icon when provided', () => {
    const component = mount(
      <PlatformPrimaryButton
        text={'Create Account'}
        startIcon={<SaveIcon id={'SaveIcon'} />}
      />
    );
    expect(component.find('#SaveIcon').exists()).toBe(true);
  });
});
