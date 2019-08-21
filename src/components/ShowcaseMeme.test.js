import React from 'react';
import { shallow } from 'enzyme';
import ShowcaseMeme from './ShowcaseMeme';

describe('ShowcaseMeme component', () => {
  it('renders ShowcaseMeme', () => {
    const wrapper = shallow(<ShowcaseMeme head="hello" imgSrc="yolo" foot="feet" />);
    expect(wrapper).toMatchSnapshot();
  });
});