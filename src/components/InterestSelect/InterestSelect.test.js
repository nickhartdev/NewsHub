import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import InterestSelect from './InterestSelect';

describe('InterestSelect', () => {
  it('should render 7 buttons and a header', () => {
    render(
      <Suspense>
        <Router>
          <InterestSelect />
        </Router>
      </Suspense>
    );

    const header = screen.getByText('Choose your interests');
    const buttons = screen.getAllByRole('button');

    expect(header).toBeInTheDocument();
    expect(buttons.length).toBe(7);
  })
})
