import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import Articles from './Articles';

describe('Articles', () => {
  it('should render each article that is passed in', () => {
    const articles = [
      {title: 'Article 1'},
      {title: 'Article 2'},
      {title: 'Article 3'}
    ]

    render(
      <Router>
        <Articles articles={ articles } />
      </Router>
    )

    const article1 = screen.getByText('Article 1');
    const article2 = screen.getByText('Article 2');
    const article3 = screen.getByText('Article 3');

    expect(article1).toBeInTheDocument();
    expect(article2).toBeInTheDocument();
    expect(article3).toBeInTheDocument();
  })
})