import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import Articles from './Articles/Articles';
import { fetchTopStoriesByLanguage, fetchStoriesByInterest } from '../../ApiHelper';

const Home = ({ interests }) => {
  const [articles, setArticles] = useState([]);
  const {t, i18n} = useTranslation();

  const getAllArticles = async () => {
    const response = await fetchTopStoriesByLanguage(i18n.language);
    setArticles(response.articles);
  }

  const getArticlesByInterest = async () => {
    const response = await fetchStoriesByInterest(interests)
    setArticles(response.articles);
  }

  useEffect(() => {
    if (interests.length === 0) {
      // getAllArticles();
    } else {

    }
  }, []);

  return (
    <main>
      <h1>Home</h1>
      <Articles articles={ articles } />
    </main>
  );
}

export default Home;