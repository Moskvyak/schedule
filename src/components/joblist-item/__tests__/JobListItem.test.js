import React from 'react';
import renderer from 'react-test-renderer';
import { JobListItem } from '../JobListItem';

describe('<JobListItem />', () => {
  const requiredProps = {
    option: {
      name: 'test',
      start: '2018-09-01T11:00:00Z',
      end: '2018-09-01T12:00:00Z',
      contact: { name: 'testName' }
    }
  };

  it('should render with required props', () => {
    const component = renderer.create(<JobListItem {...requiredProps} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
