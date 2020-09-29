import { buildEndpoint, filterArticlesByLanguage } from './ApiHelper';
import apiKey from '../apiKey';
import '@testing-library/react';

// tests for helpers within the ApiHelper

describe('ApiHelper', () => {
  it('should generate a correct URL when given an array of interests', () => {
    expect(buildEndpoint('en', ["business", "science"])).toBe(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&category=science&apiKey=${apiKey}`
    );
  })
})