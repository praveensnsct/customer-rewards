import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';

import './index.scss';

const rootElement = document.getElementById('root');

render(<App />, rootElement);