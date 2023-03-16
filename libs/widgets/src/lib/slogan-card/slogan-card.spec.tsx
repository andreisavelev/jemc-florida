import { render } from '@testing-library/react';

import SloganCard from './slogan-card';

describe('SloganCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SloganCard />);
    expect(baseElement).toBeTruthy();
  });
});
