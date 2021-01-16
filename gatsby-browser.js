
import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';

require('./src/assets/scss/init.scss');
require('./static/css/prismjs/theme.min.css');

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
