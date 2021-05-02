import React, { Fragment } from 'react';
import { PageProps } from 'gatsby';
import { Box, Container, Link } from 'theme-ui';
import { StaticImage } from 'gatsby-plugin-image';

import Inner from 'components/styles/Inner';
import SEO from 'components/SEO';

const IndexPage: React.FC<PageProps> = () => (
  <Fragment>
    <SEO />
    <Container py="3rem">
      <Inner>
        <Box mb="3rem">
          <StaticImage
            placeholder="blurred"
            layout="fixed"
            width={330}
            height={228}
            src="../assets/images/stay-funky.jpg"
            alt="Stay funky"
          />
        </Box>
        Made with ♥ by{' '}
        <Link
          variant="primary"
          href="https://pagepro.co/"
          target="_blank"
          rel="noreferrer"
        >
          Pagepro
        </Link>
      </Inner>
    </Container>
  </Fragment>
);

export default IndexPage;
