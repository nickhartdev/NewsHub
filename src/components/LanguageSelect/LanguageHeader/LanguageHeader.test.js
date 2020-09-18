import React from 'react';
import LanguageHeader from './LanguageHeader';
import { render, screen } from '@testing-library/react';

describe('LanguageHeader', () => {
  it('should display a header', () => {
    render(<LanguageHeader />)

    const header = screen.getByText('Choose a language');
    
    expect(header).toBeInTheDocument();
  })
})