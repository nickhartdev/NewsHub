import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import ReadingList from './ReadingList';

describe('ReadingList', () => {
  it('should render a header', () => {
    render(
      <Router>
        <ReadingList />
      </Router>
    )

    const header = screen.getByText('Reading List');

    expect(header).toBeInTheDocument();
  })
})
