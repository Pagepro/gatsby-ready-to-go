import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from 'components/organisms/Header';
import GlobalStyles from 'setup/GlobalStyles';
import { LayoutProps } from './types';

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
      <GlobalStyles />
      <Header
        title={data.site.siteMetadata?.title || `Title`}
        description={data.site.siteMetadata?.description || `Description`}
      />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
