import React from 'react';
import renderer from 'react-test-renderer';
import { SearchForm } from '../SearchForm';

describe('<SearchForm />', () => {
  const requiredProps = {
    value: 'test value',
    onChange: jest.fn(),
    clearSearch: jest.fn()
  };

  it('should render with required props', () => {
    const component = renderer.create(<SearchForm {...requiredProps} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
