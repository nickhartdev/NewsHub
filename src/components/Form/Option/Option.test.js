import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { render, screen } from '@testing-library/react';
import Option from './Option';

describe('Option', () => {
  it('should render the text that is passed in', () => {
    render(
      <Router>
        <Option 
          optionToDisplay="Test" 
          options={[]} 
          i18nKey="interest.business"
        />
      </Router>
    );

    const option = screen.getByText('Business');

    expect(option).toBeInTheDocument();
  })
})