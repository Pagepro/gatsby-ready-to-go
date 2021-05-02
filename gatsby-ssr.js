import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  // eslint-disable-next-line react/jsx-filename-extension
  return <Layout {...props}>{element}</Layout>;
}
