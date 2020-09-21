import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import { fetchArticles, fetchCNNEsArticles } from '../../ApiHelper/ApiHelper';
import Articles from './Articles/Articles';

const Home = ({ interests }) => {
  const [articles, setArticles] = useState([]);
  const {t, i18n} = useTranslation();

  // const getAllSources = async () => {
  //   const allSources = await fetchSources(i18n.language);
  //   setSources(allSources);
  // }

  // const getSourcesByInterest = async () => {
  //   const sourcesByInterest = await fetchSources(i18n.language, interests);
  // }

  const getArticles = async () => {
    const articlesData = await fetchArticles(i18n.language, interests);
    
    if (i18n.language === 'es') {
      const cnnEsArticlesData = await fetchCNNEsArticles();
      articlesData.concat(cnnEsArticlesData);
    }

    setArticles(articlesData);
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <main>
      <h1>Home</h1>
      <Articles sources={ articles } />
    </main>
  );
}

export default Home;