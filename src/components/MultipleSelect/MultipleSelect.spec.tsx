import { mount } from 'enzyme';
import React from 'react';
import { PlatformMultipleSelect } from './index';

describe('MultipleSelect', () => {
  it('Should mount successfully', () => {
    const component = mount(
      <PlatformMultipleSelect
        selectedOption={[]}
        options={[
          { id: 'AL', name: 'Alabama', checked: false },
          { id: 'AK', name: 'Alaska', checked: false },
          { id: 'AZ', name: 'Arizona', checked: false },
          { id: 'CO', name: 'Colorado', checked: false },
          { id: 'IL', name: 'Illinois', checked: false },
        ]}
      />
    );

    expect(component.exists()).toBe(true);
  });

  it('Should show the selected options successfully', () => {
    const component = mount(
      <PlatformMultipleSelect
        selectedOption={['AL', 'AK']}
        options={[
          { id: 'AL', name: 'Alabama', checked: true },
          { id: 'AK', name: 'Alaska', checked: true },
          { id: 'AZ', name: 'Arizona', checked: false },
          { id: 'CO', name: 'Colorado', checked: false },
          { id: 'IL', name: 'Illinois', checked: false },
        ]}
      />
    );

    const selectedStates = 'AL, AK';

    expect(component.text()).toContain(selectedStates);
  });
});
