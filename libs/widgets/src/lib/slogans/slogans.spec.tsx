import { render } from '@testing-library/react';

import Slogans from './slogans';

describe('Slogans', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Slogans />);
    expect(baseElement).toBeTruthy();
  });
});
