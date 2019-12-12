import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Quote from './Quote';

const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState();

  const getQuoteOfTheDay = async () => {
    const { data } = await axios('/getQuoteOfTheDay');
    const quoteData = {
      quote: data.quote,
      author: data.author,
    };
    setQuote(quoteData);
  };

  useEffect(() => {
    getQuoteOfTheDay();
  }, []);

  return <div>{quote && <Quote quote={quote.quote} author={quote.author} />}</div>;
};

export default QuoteOfTheDay;
