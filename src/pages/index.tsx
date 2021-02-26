import React from 'react';
import { PageProps } from 'gatsby';
import { Container } from 'theme-ui';

import Inner from 'components/styles/Inner';
import SEO from 'components/SEO';
import Layout from 'components/Layout';

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <SEO />
    <Container>
      <Inner>{/* Put any content here */}</Inner>
    </Container>
  </Layout>
);

export default IndexPage;
