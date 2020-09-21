import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import Article from './Article';
import '../../../../i18n';

describe('Article', () => {

  it('should render all correct elements', () => {
    const article = {
      title: "Test title",
      description: "Test description",
      author: "Test author",
      url: "Test URL",
      urlToImage: "Test image URL",
    };

    render(
      <Router>
        <Article articleToDisplay={article} />
      </Router>
    );

    const title = screen.getByText('Test title');
    const description = screen.getByText('Test description');
    const author = screen.getByText('Test author');
    const linkToArticle = screen.getByText('Link to the article');
    const articleImage = screen.getByRole('img');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(linkToArticle).toBeInTheDocument();
    expect(articleImage).toBeInTheDocument();
  })
})