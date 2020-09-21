import apiKey from '../apiKey';

const articlesUrl = "https://newsapi.org/v2/top-headlines?";
const sourcesUrl = "https://newsapi.org/v2/sources?";

export const buildEndpoint = (baseUrl, language, interests) => {
  let endpoint = [baseUrl];

  if (language) {
    endpoint.push(`language=${language}&`)
  }
  
  if (interests) {
    interests.forEach(interest => {
      endpoint.push(`category=${interest}&`);
    })
  }

  endpoint.push(`apiKey=${apiKey}`);

  return endpoint.join('');
}

export const fetchTopArticlesByLanguage = async language => {
  const response = await fetch(buildEndpoint(articlesUrl, language));
  const articleData = await response.json();

  return articleData.articles;
}

export const fetchSourcesByLanguage = async language => {
  const response = await fetch(buildEndpoint(sourcesUrl, language));
  const sourcesData = await response.json();

  return sourcesData.sources;
}

// export const fetchArticlesByInterest = async interests => {
//   const response = await fetch(buildEndpoint(interests));
//   const articleData = await response.json();

//   return articleData.articles;
// }

// export const filterArticlesByLanguage = (languageArticles, interestArticles) => {
//   const sourcesByLanguage = languageArticles.map(article => article.source.id);

//   return interestArticles.filter(article => {
//     const articleSrc = article.source.id;
//     return sourcesByLanguage.includes(articleSrc);
//   })
// }

// export const getArticlesByLanguageAndInterests = async (language, interests) => {
//   const languageArticles = await fetchTopArticlesByLanguage(language);
//   const interestArticles = await fetchArticlesByInterest(interests);

//   return filterArticlesByLanguage(languageArticles, interestArticles);
// }