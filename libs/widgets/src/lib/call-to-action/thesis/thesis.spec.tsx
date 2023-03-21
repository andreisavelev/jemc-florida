import { render } from '@testing-library/react';

import Thesis from './thesis';

describe('Thesis', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Thesis />);
    expect(baseElement).toBeTruthy();
  });
});
