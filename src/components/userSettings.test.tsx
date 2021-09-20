import { shallow } from 'enzyme';
import React from 'react';
import { isReturnStatement } from 'typescript';

import { UserSettings } from './userSettings';

describe('UserSettings', () => {
    it('should render without throwing an error', function () {
      shallow(<UserSettings />);
    });
    it('should render labels', () => {
      const wrap = shallow(<UserSettings />);
      const labels = wrap.find('label');
      expect(labels.length).toBe(3);
    })
  });