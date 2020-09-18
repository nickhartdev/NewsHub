import apiKey from './apiKey';
import './i18n';

const baseUrl = "http://newsapi.org/v2/";

export const fetchTopHeadlinesByLanguage = async language => {
  const response = await fetch(`${baseUrl}/top-headlines?language=${language}&apiKey=${apiKey}`);
  const articles = await response.json();

  return articles;
}