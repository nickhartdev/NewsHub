import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import { fetchArticles, fetchCNNEsArticles } from '../../ApiHelper/ApiHelper';
import Articles from '../Articles/Articles';
import PropTypes from 'prop-types';
import './Home.css';

const Home = ({ interests, readingList, toggleReadingListStatus, clearInterests }) => {
  const [articles, setArticles] = useState([]);
  const {t, i18n} = useTranslation();

  const shuffleArticles = articles => {
    const shuffledArticles = [];
    for (let i = articles.length; i > 0; i--) {
      const randomIndex = Math.round(Math.random * articles.length);
      const randomArticle = articles.splice(randomIndex, 1);

      shuffledArticles.push(randomArticle[0]);
    }

    return shuffledArticles;
  }

  const getArticles = async () => {
    const articlesData = await fetchArticles(i18n.language, interests);
    if (i18n.language === 'es') {
      const cnnEsArticlesData = await fetchCNNEsArticles();
      articlesData.concat(cnnEsArticlesData);
    }
    const shuffledArticles = shuffleArticles(articlesData);

    setArticles(shuffledArticles);
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <main>
      <h1>{t("home header")}</h1>
      <div className="top-button-container">
        <Link to="/reading-list">
          <button type="button" className="reading-list-button-top">{t("go to reading list")}</button>
        </Link>
        <Link to="/interest-select">
          <button type="button" className="interest-select-button" onClick={clearInterests}>
            {t("choose different interests")}
          </button>
        </Link>
      </div>
      <Articles
        articles={articles}
        readingList={readingList}
        toggleReadingListStatus={toggleReadingListStatus}
      />
    </main>
  );
}

Home.propTypes = {
  interests: PropTypes.array,
  readingList: PropTypes.array,
  toggleReadingListStatus: PropTypes.func,
  clearInterests: PropTypes.func
}

export default Home;
