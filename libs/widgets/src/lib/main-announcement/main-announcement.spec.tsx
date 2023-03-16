import { render } from '@testing-library/react';

import MainAnnouncement from './main-announcement';

describe('MainAnnouncement', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainAnnouncement />);
    expect(baseElement).toBeTruthy();
  });
});
