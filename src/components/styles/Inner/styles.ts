import { Container } from 'theme-ui';
import styled from '@emotion/styled';

export const StyledInner = styled(Container)`
  padding-left: ${({ theme }) => theme.space.default};
  padding-right: ${({ theme }) => theme.space.default};
`;
