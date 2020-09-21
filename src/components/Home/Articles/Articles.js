import React from 'react';
import '../../../i18n';
import Article from './Article/Article';

const Articles = ({ articles }) => {
  const articlesToDisplay = articles.map(article => {
    return (
      <Article
        articleToDisplay={ article }
        key={ articles.indexOf(article) }
      />
    ) 
  })

  return (
    <section>
      { articlesToDisplay }
    </section>
  );
}

export default Articles;