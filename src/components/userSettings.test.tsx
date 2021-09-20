import { shallow } from 'enzyme';
import React from 'react';

import { UserSettings } from './userSettings';

describe('UserSettings', () => {
    it('should render without throwing an error', function () {
      const wrap = shallow(<UserSettings />);
    });
  });