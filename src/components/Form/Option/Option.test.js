import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { render, screen } from '@testing-library/react';
import Option from './Option';
import '../../../i18n';

describe('Option', () => {
  it('should render the text that is passed in', () => {
    render(
      <Suspense>
        <Router>
          <Option optionToDisplay="business" options={["business"]} />
        </Router>
      </Suspense>
    );

    const option = screen.getByText('Business');

    expect(option).toBeInTheDocument();
  })
})