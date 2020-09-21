import React from 'react';
import '../../i18n';
import Article from './Article/Article';

const Articles = ({ articles, toggleReadingListStatus, readingList }) => {
  const articlesToDisplay = articles.map(article => {
    if (article.urlToImage) {
      return (
        <Article
          articleToDisplay={ article }
          key={ articles.indexOf(article) }
          readingList={ readingList }
          toggleReadingListStatus={ toggleReadingListStatus }
        />
      )
    }
  })

  return (
    <section>
      { articlesToDisplay }
    </section>
  );
}

export default Articles;