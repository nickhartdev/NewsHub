import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import Articles from './Articles/Articles';
import { fetchTopHeadlinesByLanguage } from '../../ApiHelper';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const {t, i18n} = useTranslation();

  useEffect(() => {
    async function getArticles() {
      const articlesToDisplay = await fetchTopHeadlinesByLanguage(i18n.language);
      setArticles(articlesToDisplay.articles);
    }

    getArticles();
  }, []);

  return (
    <main>
      <h1>Home</h1>
      <Articles />
    </main>
  );
}

export default Home;