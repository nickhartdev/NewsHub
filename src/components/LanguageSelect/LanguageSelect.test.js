import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import LanguageSelect from './LanguageSelect'

describe('LanguageSelect', () => {
  it('should render a header', () => {
    render(
      <LanguageSelect />
    )

    const header = screen.getByText('Choose a language');

    expect(header).toBeInTheDocument();
  })
})