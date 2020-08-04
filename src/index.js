import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
require('./stylesheet/main.scss');

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

module.hot.accept();