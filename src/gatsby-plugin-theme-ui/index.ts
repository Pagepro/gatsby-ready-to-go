import 'assets/fonts/fonts.css';

import text from './text';
import links from './links';

const theme = {
  colors: {
    background: '#FFF',
    white: '#FFF',
    text: '#000',
    red: '#FF636A',
    darkGrey: '#282828',
    gray: '#ABB1A1',
  },
  fonts: {
    body: `'Montserrat', sans-serif`,
  },
  fontWeights: {
    regular: 400,
    bold: 600,
  },
  breakpoints: ['48rem', '64rem', '90rem'],
  space: {
    default: '1.25rem',
  },
  sizes: {
    container: '75rem',
  },
  radii: {
    small: '0.75em',
  },
  text,
  links,
};

export default theme;

export type Theme = typeof theme;

export type WithTheme<T = unknown> = { theme: Theme } & T;
