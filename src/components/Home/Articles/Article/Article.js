import React from 'react';
import '../../../../i18n';

const Article = ({ articleToDisplay }) => {
  return (
    <article>
      <p className="article-title">{articleToDisplay.title}</p>
    </article>
  );
}

export default Article;