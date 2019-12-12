const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const axios = require('axios');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/getTodayInHistory', async (req, res) => {
  const { data } = await axios('https://history.muffinlabs.com/date');
  const randomIndex = Math.floor(Math.random() * data.data.Events.length);
  const historyData = data.data.Events[randomIndex];
  res.send(historyData);
});

app.get('/getQuoteOfTheDay', async (req, res) => {
  const { data } = await axios('http://quotes.rest/qod');
  const randomIndex = Math.floor(Math.random() * data.contents.quotes.length);
  const quoteData = data.contents.quotes[randomIndex];
  res.send(quoteData);
});

module.exports = app;
