import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { render, screen } from '@testing-library/react';
import Option from './Option';

describe('Option', () => {
  it('should render the text that is passed in', () => {
    render(
      <Router>
        <Option optionToDisplay="Test" options={[]} />
      </Router>
    );

    const option = screen.getByText('Test');

    expect(option).toBeInTheDocument();
  })
})