import MutationObserver from "@sheerun/mutationobserver-shim";
window.MutationObserver = MutationObserver;
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { fetchArticles } from '../../ApiHelper/ApiHelper';
import Home from './Home';
import '../../i18n';
jest.mock('../../ApiHelper/ApiHelper.js');

describe('Home', () => {
  beforeEach(() => {
    fetchArticles.mockResolvedValue([
      {
        title: "Test title 1",
        publishedAt: "2020-09-21T15:22:34.7326171Z",
        urlToImage: "Test image URL",
      },
      {
        title: "Test title 2",
        publishedAt: "2020-09-21T15:22:34.7326171Z",
        urlToImage: "Test image URL",
      },
      {
        title: "Test title 3",
        publishedAt: "2020-09-21T15:22:34.7326171Z",
        urlToImage: "Test image URL",
      },
    ]);

    render(
      <Router>
        <Home readingList={[]} toggleReadingListStatus={() => {}}/>
      </Router>
    );
  })

  it('should render a header', () => {
    const header = screen.getByText('Your News');
    expect(header).toBeInTheDocument();
  })

  it('should retrieve and display articles on component mount', async () => {
    const title1 = await waitFor(() => screen.getByText('Test title 1'));
    const title2 = await waitFor(() => screen.getByText('Test title 2'));
    const title3 = await waitFor(() => screen.getByText('Test title 3'));

    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
    expect(title3).toBeInTheDocument();
  })

  it('should allow you to save and view an article in the reading list', async () => {
    const addToReadingListButton = await waitFor(() => screen.getAllByText('Add to reading list'));
    fireEvent.click(addToReadingListButton[0]);
    const readingListButton = screen.getByText('Go to reading list');
    fireEvent.click(readingListButton)
    const title1 = await waitFor(() => screen.getByText('Test title 1'));

    expect(title1).toBeInTheDocument();
  })
})
