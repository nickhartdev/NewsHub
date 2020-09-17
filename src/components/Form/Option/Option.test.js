import React from 'react';
import { render, screen } from '@testing-library/react';
import Option from './Option';

describe('Option', () => {
  it('should render the text that is passed in', () => {
    render(
      <Option optionToDisplay='Test' />
    )

    const option = screen.getByText('Test');

    expect(option).toBeInTheDocument();
  })
})