import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import { fetchSources } from '../../ApiHelper/ApiHelper';

const Home = ({ interests }) => {
  const [sources, setSources] = useState([]);
  const {t, i18n} = useTranslation();

  const getAllSources = async () => {
    const allSources = await fetchSources(i18n.language);
    setSources(allSources);
  }

  useEffect(() => {
    if (interests.length === 0) {
      getAllSources();
    } else {
      // getSourcesByInterest
    }
  }, []);

  return (
    <main>
      <h1>Home</h1>
      {/* <Articles sources={ articles } /> */}
    </main>
  );
}

export default Home;