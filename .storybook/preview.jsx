import React from 'react';
import { ThemeProvider } from 'theme-ui';

import './storybook.css';
import GlobalStyles from 'setup/GlobalStyles';
import theme from '../src/gatsby-plugin-theme-ui/index';
import 'assets/styles/reset.css';
import 'assets/fonts/fonts.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'padded',
  options: {
    storySort: {
      order: ['Styles', 'Atoms', 'Molecules', 'Organisms'],
    },
  },
  controls: { hideNoControlsWarning: true },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#FFF',
      },
      {
        name: 'dark',
        value: '#282828',
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
