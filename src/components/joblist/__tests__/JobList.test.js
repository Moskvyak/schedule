import React from 'react';
import renderer from 'react-test-renderer';
import { JobList } from '../JobList';

describe('<JobList />', () => {
  const requiredProps = {
    options: [
      {
        id: '1',
        name: 'test',
        start: '2018-09-01T11:00:00Z',
        end: '2018-09-01T12:00:00Z',
        contact: { name: 'testName' }
      },
      {
        id: '2',
        name: 'test2',
        start: '2018-09-01T11:00:00Z',
        end: '2018-09-01T12:00:00Z',
        contact: { name: 'testName2' }
      }
    ]
  };

  it('should render with required props', () => {
    const component = renderer.create(<JobList {...requiredProps} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
