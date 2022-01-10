import React from 'react';
import ReactDOM from 'react-dom';
import './index.styled.jsx';
import { GlobalStyle } from './index.styled';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
