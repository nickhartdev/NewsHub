import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import InterestSelect from './InterestSelect';

describe('InterestSelect', () => {
  it('should render buttons for each interest passed in and a header', () => {
    const interests = ['business', 'science', 'health']
    render(
      <Suspense>
        <Router>
          <InterestSelect interests={ interests }/>
        </Router>
      </Suspense>
    );

    const header = screen.getByText('Choose an interest');
    const buttons = screen.getAllByRole('button');

    expect(header).toBeInTheDocument();
    expect(buttons.length).toBe(4);
  })
})
