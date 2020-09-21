import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import Article from './Article';

describe('Article', () => {
  beforeAll(() => {
    const article = {title: 'Test title'}

    render(
      <Router>
        <Article articleToDisplay={ article } />
      </Router>
    )
  })

  it('should display the article\'s title', () => {
    const title = screen.getByText('Test title');
    expect(title).toBeInTheDocument();
  })
})