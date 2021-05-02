import { Text, Flex } from 'theme-ui';
import styled from '@emotion/styled';

import media from 'setup/MediaQueries';

export const StyledHeader = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  align-items: center;
  padding-top: ${({ theme }) => theme.space.default};
  padding-bottom: ${({ theme }) => theme.space.default};
`;

export const StyledHeaderContent = styled(Flex)`
  align-items: center;
`;

export const StyledHeaderTitle = styled(Text)`
  text-transform: uppercase;
`;

export const StyledHeaderIcon = styled(Flex)`
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  flex-shrink: 0;
  margin-right: 1rem;
  border-radius: ${({ theme }) => theme.radii.small};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.red};
  svg {
    font-size: 2em;
  }

  @media ${media.phone} {
    width: 5rem;
    height: 5rem;
    margin-right: 1.5rem;
    svg {
      font-size: 3em;
    }
  }
`;
