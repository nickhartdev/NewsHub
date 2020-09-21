import React from 'react';
import '../../../../i18n';

const Article = ({ articleToDisplay }) => {
  return (
    <article>
      <p>{articleToDisplay.title}</p>
    </article>
  );
}

export default Article;