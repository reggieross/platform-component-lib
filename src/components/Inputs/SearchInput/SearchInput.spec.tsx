import { PlatformSearchInput } from './index';
import { mount } from 'enzyme';
import React from 'react';

describe('SearchInput', () => {
  it('Should mount successfully', () => {
    const component = mount(<PlatformSearchInput />);

    expect(component.exists()).toBe(true);
  });
});
