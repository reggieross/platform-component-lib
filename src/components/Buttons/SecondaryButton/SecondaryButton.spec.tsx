import { PlatformSecondaryButton } from './index';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
import { mount } from 'enzyme';

describe('Secondary Button', () => {
  it('Should mount successfully', () => {
    const component = mount(<PlatformSecondaryButton text={'Create Account'} />);
    expect(component.exists()).toBe(true);
  });

  it('Should icon when provided', () => {
    const component = mount(
      <PlatformSecondaryButton
        text={'Create Account'}
        startIcon={<SaveIcon id={'SaveIcon'} />}
      />
    );
    expect(component.find('#SaveIcon').exists()).toBe(true);
  });
});
