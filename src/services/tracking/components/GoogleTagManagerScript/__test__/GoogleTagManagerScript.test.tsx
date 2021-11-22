import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import {
  GoogleTagManagerScript,
  GoogleTagManagerScriptProps
} from '../GoogleTagManagerScript';

describe('GoogleTagManagerScript', () => {
  let props: GoogleTagManagerScriptProps;
  let wrapper: RenderResult;

  const createWrapper = () => <GoogleTagManagerScript {...props} />;

  beforeAll(() => {
    props = { id: 'test-id' };
    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });

  // // Looks like scripts are ignored, kinda makes sense, TBD
  // it('matches snapshot', async () => {
  //   const src = 'https://www.googletagmanager.com/gtm.js';
  //
  //   const link = await wrapper.getByText(src);
  //   expect(link);
  // });
});
