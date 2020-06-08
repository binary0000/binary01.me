
import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';

require('./src/assets/scss/init.scss');
require('./static/css/prismjs/theme.min.css');

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)