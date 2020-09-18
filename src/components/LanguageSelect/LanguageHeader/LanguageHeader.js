import React, { useEffect, useState } from 'react';

const LanguageHeader = () => {
  let [greeting, setGreeting] = useState();
  const greetings = ['Choose your language(s)', 'Elige tu idioma(s)'];

  useEffect(() => {
    let counter = 1;
    setGreeting(greetings[0]);

    const intervalId = setInterval(() => {
      setGreeting(greeting = greetings[counter]);
      counter++;
      if (counter > greetings.length - 1) {
        counter = 0;
      }
    }, 10000);

    return function cleanup() {
      clearInterval(intervalId);
    }
  }, [])

  return (
    <h1>{ greeting }</h1>
  )
}

export default LanguageHeader;