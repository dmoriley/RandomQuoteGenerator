import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import QuoteBox from './components/QuoteBox';
import './styles/style.scss';

const App = () => (
  <div className="box-layout">
    <QuoteBox />
  </div>
);
render(<App />, document.getElementById('root'));
