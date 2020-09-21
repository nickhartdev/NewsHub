import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import '../../i18n';

describe('Home', () => {
  it('should render a header', () => {
    render(
      <Router>
        <Home />
      </Router>
    )

    const header = screen.getByText('Home');

    expect(header).toBeInTheDocument();
  })
})
