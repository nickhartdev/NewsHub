import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import Article from './Article';
import '../../../i18n';

describe('Article', () => {
  it('should render all correct elements', () => {
    const article = {
      title: "Test title",
      url: "Test URL",
      urlToImage: "Test image URL"
    };

    render(
      <Router>
        <Article articleToDisplay={article} readingList={ [] }/>
      </Router>
    );

    const title = screen.getByText('Test title');
    const linkToArticle = screen.getByText('Link to the article');
    const articleImage = screen.getByRole('img');

    expect(title).toBeInTheDocument();
    expect(linkToArticle).toBeInTheDocument();
    expect(articleImage).toBeInTheDocument();
  })
})