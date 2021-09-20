import { shallow } from 'enzyme';
import React from 'react';

import { UserSettings } from './userSettings';

const options = [
  { id: '1', name: 'Foo' },
  { id: '2', name: 'Bar' },
  { id: '3', name: 'Baz' }
];

describe('UserSettings', () => {
    it('should render without throwing an error', function () {
      shallow(<UserSettings />);
    });
    it('should render labels', () => {
      const wrap = shallow(<UserSettings options={options} />);
      const labels = wrap.find('label');
      expect(labels.length).toBe(3);
    })
  });