import apiKey from './apiKey';
import './i18n';

const baseUrl = "http://newsapi.org/v2/top-headlines?";

const buildEndpoint = interests => {
  let endpoint = [baseUrl];
  
  interests.forEach(interest => {
    endpoint.push(`category=${interest}&`);
  })

  endpoint.push(`apiKey=${apiKey}`);

  return endpoint.join('');
}

export const fetchTopStoriesByLanguage = async language => {
  const response = await fetch(`${baseUrl}language=${language}&apiKey=${apiKey}`);
  const articles = await response.json();

  return articles;
}

export const fetchStoriesByInterest = async interests => {
  const response = await fetch(buildEndpoint(interests));
  const articles = await response.json();

  return articles;
}