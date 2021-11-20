import { PlatformLink } from './index';
import React from 'react';
import { mount } from 'enzyme';

describe('Text Button', () => {
  it('Should mount successfully', () => {
    const component = mount(<PlatformLink text={'Create Account'} />);
    expect(component.exists()).toBe(true);
  });
});
