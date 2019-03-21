import React, { Component, useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import quoteService from '../services/quote.service';
import colorGenerator from '../services/color-generator.service';

const QuoteBox = () => {
  const [quoteObj, setQuoteObj] = useState({});
  const [url, setUrl] = useState('');

  useEffect(() => {
    getQuote();
  }, []);

  function getQuote() {
    quoteService.get().then(data => {
      setQuoteObj(data);
      setUrl(`https://twitter.com/intent/tweet?text=\"${encodeURIComponent(data.quote.trim())}\"-${encodeURIComponent(data.author.trim())}`);
      document.querySelector(':root').style.setProperty('--main-color', colorGenerator.get());
    });
  }

  return (
    <div id="quote-box" className="box-layout__box">
      <div className="box-layout__title">
        <p id="text"><FontAwesomeIcon icon={faQuoteLeft} />{quoteObj.quote}</p>
        <p id="author"> - {quoteObj.author}</p>
      </div>
      <div className="box_layout__buttons">
        <button id="new-quote" className="button new-quote" onClick={getQuote}>New Quote</button>
        <a href={url} id="tweet-quote"><FontAwesomeIcon icon={faTwitterSquare}/></a>
      </div>
    </div>
  );
};

export default QuoteBox;