import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import Articles from './Articles/Articles';
import { fetchTopHeadlinesByLanguage } from '../../ApiHelper';

const Home = ({ interests }) => {
  const [articles, setArticles] = useState([]);
  const {t, i18n} = useTranslation();

  const getAllArticles = async () => {
    const articlesToDisplay = await fetchTopHeadlinesByLanguage(i18n.language);
    setArticles(articlesToDisplay.articles);
  }

  useEffect(() => {
    if (interests.length === 0) {
      // getAllArticles();
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