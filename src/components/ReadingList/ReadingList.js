import React from 'react';
import Article from '../Articles/Article/Article';

const ReadingList = ({ readingList }) => {
  const articlesToDisplay = readingList.map(article => {
    return  <Article articleToDisplay={ article } />
  })

  return (
    <section>
      { articlesToDisplay }
    </section>
  )
}

export default ReadingList;