/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container } from 'theme-ui';

const Inner: React.FC = ({ children }) => (
  <Container variant="inner">{children}</Container>
);

export default Inner;
