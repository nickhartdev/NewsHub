import React from 'react';
import { useTranslation } from 'react-i18next';

const Article = ({ articleToDisplay }) => {
  const { t } = useTranslation();

  return (
    <article>
      <img src={`${articleToDisplay.urlToImage}`} />
      <p className="title">{articleToDisplay.title}</p>
      <p className="description">{articleToDisplay.description}</p>
      <p className="author">{articleToDisplay.author}</p>
      <a className="article-link" href={`${articleToDisplay.url}`}>{t('article link')}</a>
    </article>
  );
}

export default Article;