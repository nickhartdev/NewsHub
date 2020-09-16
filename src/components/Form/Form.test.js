import React from 'react';
import { Link } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  it('should render a header', () => {
    render(
      <Form />
    )

    const header = screen.getByText('Form');

    expect(header).toBeInTheDocument();
  })
})