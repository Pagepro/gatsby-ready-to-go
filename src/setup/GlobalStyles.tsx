import React from 'react';
import { Global } from '@emotion/core';

import 'assets/styles/reset.css';

const GlobalStyles: React.FC = () => (
  <Global
    styles={(theme) => ({
      body: {
        fontSize: '1rem',
        lineHeight: 1.5,
        color: theme.colors.black,
        fontFamily: theme.fonts.body,
      },
      button: {
        cursor: 'pointer',
      },
      a: {
        textDecoration: 'none',
      },
      svg: {
        fill: 'currentColor',
      },
    })}
  />
);

export default GlobalStyles;
