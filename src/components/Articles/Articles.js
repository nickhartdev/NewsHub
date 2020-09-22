import React from 'react';
import '../../i18n';
import PropTypes from 'prop-types';
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
    <section className="articles-container">
      { articlesToDisplay }
    </section>
  );
}

Articles.propTypes = {
  articles: PropTypes.array,
  toggleReadingListStatus: PropTypes.func,
  readingList: PropTypes.array
}

export default Articles;