import { MenuItem, PlatformSimpleSelect } from './index';
import { mount } from 'enzyme';
import React from 'react';
describe('SimpleSelect', () => {
  it('Should mount successfully', () => {
    const component = mount(
      <PlatformSimpleSelect
        selectedOption={'IL'}
        options={[
          { id: 'AL', name: 'Alabama' },
          { id: 'AK', name: 'Alaska' },
          { id: 'AZ', name: 'Arizona' },
          { id: 'CO', name: 'Colorado' },
          { id: 'IL', name: 'Illinois' },
        ]}
        label={'State'}
      />
    );

    expect(component.exists()).toBe(true);
  });

  it('Should show options from dropdown when input is clicked', () => {
    const component = mount(
      <PlatformSimpleSelect
        options={[
          { id: 'AL', name: 'Alabama' },
          { id: 'AK', name: 'Alaska' },
          { id: 'AZ', name: 'Arizona' },
          { id: 'CO', name: 'Colorado' },
          { id: 'IL', name: 'Illinois' },
        ]}
        label={'State'}
      />
    );

    component.find('input').simulate('focus');
    expect(component.find(MenuItem).length).toEqual(5);
  });

  it('Should fire on change handler event when option is clicked', () => {
    const handler = jest.fn();
    const component = mount(
      <PlatformSimpleSelect
        options={[
          { id: 'AL', name: 'Alabama' },
          { id: 'AK', name: 'Alaska' },
          { id: 'AZ', name: 'Arizona' },
          { id: 'CO', name: 'Colorado' },
          { id: 'IL', name: 'Illinois' },
        ]}
        label={'State'}
        onChange={handler}
      />
    );

    component.find('input').simulate('focus');
    component.find(MenuItem).at(1).simulate('click');
    expect(handler).toBeCalledWith({ id: 'AK', name: 'Alaska' });
  });

  it('Should change the value displayed in the input to be the name of the selected input value', () => {
    const handler = jest.fn();
    const component = mount(
      <PlatformSimpleSelect
        options={[
          { id: 'AL', name: 'Alabama' },
          { id: 'AK', name: 'Alaska' },
          { id: 'AZ', name: 'Arizona' },
          { id: 'CO', name: 'Colorado' },
          { id: 'IL', name: 'Illinois' },
        ]}
        label={'State'}
        onChange={handler}
      />
    );

    component.find('input').simulate('focus');
    component.find(MenuItem).at(1).simulate('click');
    expect(component.find('input').props().value).toEqual('Alaska');
  });
});
