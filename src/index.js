require('file-loader?name=[name].[ext]!./index.html');
import './App.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

const appElement = document.getElementById('app');

ReactDOM.render(<App />, appElement);