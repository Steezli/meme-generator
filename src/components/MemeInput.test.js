import React from 'react';
import { shallow } from 'enzyme';
import MemeInput from './MemeInput';

describe('MemeInput component', () => {
  it('renders MemeInput', () => {
    const handleChange = jest.fn();
    const wrapper = shallow(<MemeInput head="hello" imgSrc="yolo" foot="feet" handleChange={handleChange} />);
    expect(wrapper).toMatchSnapshot();
  });
});
