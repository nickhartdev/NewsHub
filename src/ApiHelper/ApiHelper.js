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

export const fetchTopArticlesByLanguage = async language => {
  const response = await fetch(`${baseUrl}language=${language}&apiKey=${apiKey}`);
  const articleData = await response.json();

  return articleData.articles;
}

export const fetchArticlesByInterest = async interests => {
  const response = await fetch(buildEndpoint(interests));
  const articleData = await response.json();

  return articleData.articles;
}

export const filterArticlesByLanguage = (languageArticles, interestArticles) => {
  const sourcesByLanguage = languageArticles.map(article => article.source.id);

  return interestArticles.filter(article => {
    const articleSrc = article.source.id;
    return sourcesByLanguage.includes(articleSrc);
  })
}

export const getArticlesByLanguageAndInterests = async (language, interests) => {
  const languageArticles = await fetchTopArticlesByLanguage(language);
  const interestArticles = await fetchArticlesByInterest(interests);

  return filterArticlesByLanguage(languageArticles, interestArticles);
}