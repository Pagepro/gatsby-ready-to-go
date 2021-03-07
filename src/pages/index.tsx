import React, { Fragment } from 'react';
import { PageProps } from 'gatsby';
import { Box, Container } from 'theme-ui';

import Inner from 'components/styles/Inner';
import SEO from 'components/SEO';

const IndexPage: React.FC<PageProps> = () => (
  <Fragment>
    <SEO />
    <Container>
      <Inner>
        <Box paddingY="1rem">
          Made with ♥ by{' '}
          <a href="https://pagepro.co/" target="_blank" rel="noreferrer">
            Pagepro
          </a>
        </Box>
      </Inner>
    </Container>
  </Fragment>
);

export default IndexPage;
