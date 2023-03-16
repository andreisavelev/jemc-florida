import { render } from '@testing-library/react';

import ContentHeader from './content-header';

describe('ContentHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentHeader text="text" level="h1" />);
    expect(baseElement).toBeTruthy();
  });
});
