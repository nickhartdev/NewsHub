import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  it('should render the options that are passed in', () => {
    render(
      <Router>
        <Form options={["Option 1", "Option 2"]} />
      </Router>
    );

    const option1 = screen.getByText('Option 1')
    const option2 = screen.getByText('Option 2')

    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
  })
})