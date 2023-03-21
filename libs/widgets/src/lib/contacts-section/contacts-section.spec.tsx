import { render } from '@testing-library/react';

import ContactsSection from './contacts-section';

describe('ContactsSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactsSection />);
    expect(baseElement).toBeTruthy();
  });
});
