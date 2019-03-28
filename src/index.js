import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import QuoteBox from './app/components/QuoteBox';
import './app/styles/style.scss';

const App = () => (
  <div className="box-layout">
    <QuoteBox />
  </div>
);
render(<App />, document.getElementById('root'));
