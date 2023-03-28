import { render } from '@testing-library/react';

import MainFooter from './main-footer';

describe('MainFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainFooter />);
    expect(baseElement).toBeTruthy();
  });
});
