import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from 'components/organisms/Header';
import { LayoutProps } from './types';
import 'assets/styles/reset.css';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Fragment>
      <Header
        title={data.site.siteMetadata?.title || `Title`}
        description={data.site.siteMetadata?.description || `Description`}
      />
      <main>{children}</main>
      <footer />
    </Fragment>
  );
};

export default Layout;
