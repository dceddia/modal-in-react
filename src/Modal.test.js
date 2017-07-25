import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

describe('Modal', () => {
  it('renders nothing when closed', () => {
    expect(shallow(
      <Modal onClose={jest.fn()}/>
    )).toMatchSnapshot();
  });

  it('renders when open', () => {
    expect(shallow(
      <Modal show={true} onClose={jest.fn()}/>
    )).toMatchSnapshot();
  });

  it('calls onClose when button is clicked', () => {
    const onClose = jest.fn();
    const wrapper = shallow(
      <Modal show={true} onClose={onClose}/>
    );

    wrapper.find('button').simulate('click');
    expect(onClose).toBeCalled();
  });
});
