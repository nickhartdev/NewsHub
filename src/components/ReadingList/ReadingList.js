import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Article from '../Articles/Article/Article';
import './ReadingList.css';

const ReadingList = ({ readingList, toggleReadingListStatus }) => {
  const { t } = useTranslation();

  const articlesToDisplay = readingList.map(article => {
    return (
      <Article 
        articleToDisplay={ article } 
        readingList={ readingList }
        toggleReadingListStatus={ toggleReadingListStatus }
        key={ readingList.indexOf(article) }
      />
    )
  })

  return (
    <section>
      <Link to='/home'>
        <button type="button" className="home-button">{t('back to home')}</button>
      </Link>
      {articlesToDisplay.length === 0 &&
        <h1 id="saved-articles-placeholder">{t('saved articles placeholder')}</h1>
      }
      { articlesToDisplay }
    </section>
  )
}

export default ReadingList;