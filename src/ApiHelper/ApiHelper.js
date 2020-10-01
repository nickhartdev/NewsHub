require('dotenv').config();

const articlesUrl = "https://newsapi.org/v2/top-headlines?";
// const sourcesUrl = "https://newsapi.org/v2/sources?";

export const buildEndpoint = (language, interests) => {
  console.log(process.env.API_KEY)
  let endpoint = [articlesUrl];

  if (language === 'es') {
    endpoint.push("country=mx&country=ve&country=co&country=ar&");
  } else if (language === 'en') {
    endpoint.push("country=us&")
  }
  
  if (interests) {
    interests.forEach(interest => {
      endpoint.push(`category=${interest}&`);
    })
  }

  endpoint.push(`apiKey=${process.env.REACT_APP_API_KEY}`);

  return endpoint.join('');
}

export const fetchArticles = async (language, interests) => {
  const response = await fetch(buildEndpoint(language, interests));
  const articleData = await response.json();

  return articleData.articles;
}

export const fetchCNNEsArticles = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=cnn-es&apiKey=${process.env.REACT_APP_API_KEY}`
  );
  const articleData = await response.json();

  return articleData.articles;
}

// export const fetchSources = async (language, interests) => {
//   const response = await fetch(buildEndpoint(sourcesUrl, language, interests));
//   const sourcesData = await response.json();

//   return sourcesData.sources;
// }

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