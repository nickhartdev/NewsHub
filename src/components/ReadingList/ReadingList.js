import React from 'react';
import { Link } from 'react-router-dom';
import Article from '../Articles/Article/Article';

const ReadingList = ({ readingList, toggleReadingListStatus }) => {
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
        <button type="button">Back to home</button>
      </Link>
      { articlesToDisplay }
    </section>
  )
}

export default ReadingList;