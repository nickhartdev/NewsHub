import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import SubmitButton from './SubmitButton';

describe('SubmitButton', () => {
  it('should render a single button', () => {
    render(
      <Router>
        <SubmitButton options={ ['English'] }/>
      </Router>
    )

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  })
})