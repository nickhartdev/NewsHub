import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import Articles from './Articles/Articles';
import { 
  fetchTopArticlesByLanguage, 
  getArticlesByLanguageAndInterests 
} from '../../ApiHelper/ApiHelper';

const Home = ({ interests }) => {
  const [articles, setArticles] = useState([]);
  const {t, i18n} = useTranslation();

  useEffect(() => {
    if (interests.length === 0) {
      // getAllArticles();
    } else {
      getArticlesByInterest();
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