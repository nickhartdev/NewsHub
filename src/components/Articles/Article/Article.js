import React from 'react';
import { useTranslation } from 'react-i18next';

const Article = ({ articleToDisplay, readingList, toggleReadingListStatus }) => {
  const { t } = useTranslation();
  const readingListTitles = readingList.map(article => article.title);
  const toggleReadingListText = !readingListTitles.includes(articleToDisplay.title) ? 'add to list' : 'remove from list';
  const callToggleReadingListStatus = () => {
    toggleReadingListStatus(articleToDisplay)
  }

  return (
    <article>
      <img src={`${articleToDisplay.urlToImage}`} />
      <p className="title">{articleToDisplay.title}</p>
      <p className="description">{articleToDisplay.description}</p>
      <p className="author">{articleToDisplay.author}</p>
      <a className="article-link" href={`${articleToDisplay.url}`}>{t('article link')}</a>
      <button type="button" onClick={callToggleReadingListStatus}>{t(`${toggleReadingListText}`)}</button>
    </article>
  );
}

export default Article;