/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="node" />
/// <reference types="react" />

declare module '*.svg' {
  import * as React from 'react';
  import { SxStyleProp } from 'theme-ui';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { sx?: SxStyleProp }
  >;

  export default ReactComponent;
}
