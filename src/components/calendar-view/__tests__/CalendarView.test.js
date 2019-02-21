import React from 'react';
import renderer from 'react-test-renderer';
import { CalendarView } from '../CalendarView';

describe('<CalendarView />', () => {
  const requiredProps = {
    people: [
      {
        id: '1',
        name: 'test',
        cards: []
      },
      {
        id: '2',
        name: 'test2',
        cards: []
      }
    ],
    start: new Date('2018-09-01T00:00:00Z'),
    end: new Date('2018-09-01T24:00:00Z')
  };

  it('should render with required props', () => {
    const component = renderer.create(<CalendarView {...requiredProps} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
