import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Root><CommentBox/></Root>);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a textare and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);

});

describe('the textarea', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change',
      {target: {value: 'new comment'}});
    wrapped.update();
  });

  it('has a textarea that user can type in', () => {
    expect(wrapped.find('textarea').props().value).toEqual('new comment');
  });

  it('has an empty after user submit form', () => {
    expect(wrapped.find('textarea').props().value).toEqual('new comment');
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').props().value).toEqual('');
  });
});