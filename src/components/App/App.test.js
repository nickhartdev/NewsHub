import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render without crashing', () => {
    render (
      <Router>
        <App />
      </Router>
    )
  })
  // it('should display text in the language of the user\'s choosing', () => {
  //   render(
  //     <Router>
  //       <App />
  //     </Router>
  //   )

  //   const englishButton = screen.queryByRole('button', {name: "English"});
  //   const nextButton = screen.queryByRole('link', {name: "➡"});

  //   fireEvent.click(englishButton);
  //   fireEvent.click(nextButton);

  //   const englishHeader = screen.getByText('Choose an interest');

  //   expect(englishHeader).toBeInTheDocument();
  // })
})


