import { SxStyleProp } from 'theme-ui';

declare global {
  type SvgComponentType = React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { sx?: SxStyleProp }
  >;
}
