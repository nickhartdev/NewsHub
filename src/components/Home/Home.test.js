import MutationObserver from "@sheerun/mutationobserver-shim";
window.MutationObserver = MutationObserver;
import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { fetchArticles, fetchCNNEsArticles } from '../../ApiHelper/ApiHelper';
import Home from './Home';
import '../../i18n';
jest.mock('../../ApiHelper/ApiHelper.js');

describe('Home', () => {
  it('should render a header', () => {
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
        <Home readingList={[]}/>
      </Router>
    )

    const header = screen.getByText('Your News');

    expect(header).toBeInTheDocument();
  })

  it('should retrieve and display articles on component mount', async () => {
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
      }
    ])

    fetchCNNEsArticles.mockResolvedValue([
      {
        title: "Es test title 4",
        publishedAt: "2020-09-21T15:22:34.7326171Z",
        urlToImage: "Test image URL",
      }
    ]);

    render(
      <Router>
        <Home readingList={[]}/>
      </Router>
    )

    const title1 = await waitFor(() => screen.getByText('Test title 1'));
    const title2 = await waitFor(() => screen.getByText('Test title 2'));
    const title3 = await waitFor(() => screen.getByText('Test title 3'));

    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
    expect(title3).toBeInTheDocument();
  })
})
