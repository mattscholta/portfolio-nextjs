import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import * as Images from '../index';

describe('Sample', () => {
  let props: any;
  let wrapper: RenderResult;

  const Icon = Images.Github;
  const createWrapper = () => <Icon {...props} />;

  beforeEach(() => {
    props = {};
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });

  // FIXME: TODO: Fix the spec for the animated SVG
  const icons = Object.keys(Images);
  const keys = icons.filter((key: string) => key !== 'Menu');

  /**
   * Looping over all of our SVG's this way lets us enforce any shared
   * validation rules.
   */
  keys.forEach((key) => {
    const Image = (Images as any)[key];

    beforeEach(() => {
      props = {};
      wrapper.rerender(<Image {...props} />);
    });

    it('matches snapshot', () => {
      expect(wrapper.container.childNodes).toMatchSnapshot();
    });

    // it('should render', () => {
    //   expect(wrapper.length).toBe(1);
    // });

    // FIXME: TODO: Look at the rules behind this again
    // it('should have a desc & title node', () => {
    //   expect(wrapper.find('desc').length).toBe(1);
    //   expect(wrapper.find('title').length).toBe(1);
    // });
  });
});
