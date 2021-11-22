import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { AppPicture, AppPictureProps } from '../AppPicture';

describe('AppPicture', () => {
  let props: AppPictureProps;
  let wrapper: RenderResult;

  const createWrapper = () => <AppPicture {...props} />;

  const alt = 'Testing alt text, which is optional';
  const jpg = '/path/to/image.jpg';
  const png = '/path/to/image.png';

  beforeEach(() => {
    props = { alt, jpg };
    wrapper = render(createWrapper());
  });

  it(`supports jpg's`, () => {
    const img = wrapper.getByAltText(alt);

    expect(wrapper.container.childNodes).toMatchSnapshot('jpg');
    expect(img).toHaveAttribute('src', jpg);
  });

  it(`supports png's`, () => {
    props = { alt, png };
    wrapper.rerender(createWrapper());

    const img = wrapper.getByAltText(alt);

    expect(wrapper.container.childNodes).toMatchSnapshot('png');
    expect(img).toHaveAttribute('alt', alt);
    expect(img).toHaveAttribute('src', png);
  });

  it(`prefers jpg's over png's`, () => {
    props = { alt, jpg, png };
    wrapper.rerender(createWrapper());

    const img = wrapper.getByAltText(alt);

    expect(wrapper.container.childNodes).toMatchSnapshot('jpg vs. png');
    expect(img).toHaveAttribute('alt', alt);
    expect(img).toHaveAttribute('src', jpg);
  });

  it(`no alt text provided`, () => {
    props = { jpg };
    wrapper.rerender(createWrapper());

    const img = wrapper.baseElement.querySelector('img');

    expect(wrapper.container.childNodes).toMatchSnapshot('no alt text');
    expect(img).toHaveAttribute('alt', '');
    expect(img).toHaveAttribute('src', jpg);
  });

  // it('throws an error', () => {
  //   props = {}
  //
  //   try {
  //     wrapper.rerender(createWrapper())
  //   } catch (error) {
  //     expect(wrapper.container.childNodes).toMatchSnapshot();
  //   }
  // });
});
