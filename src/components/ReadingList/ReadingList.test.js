import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import ReadingList from './ReadingList';
import '../../i18n';

describe('ReadingList', () => {
  it('should render a header', () => {
    render(
      <Router>
        <ReadingList readingList={ [] }/>
      </Router>
    )

    const header = screen.getByText('Your saved articles will appear here');

    expect(header).toBeInTheDocument();
  })
})
