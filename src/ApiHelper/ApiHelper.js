import apiKey from '../apiKey';

const baseUrl = "https://newsapi.org/v2/top-headlines?";

export const buildEndpoint = interests => {
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
  // const responseByLanguage = await fetch
  const responseByInterest = await fetch(buildEndpoint(interests));
  const articles = await responseByInterest.json();

  return articles;
}