import { SxStyleProp } from 'theme-ui';

declare global {
  type SvgComponentType = React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { sx?: SxStyleProp }
  >;

  type IContent = {
    _key: string;
    _type: string;
    children: [
      {
        _key: string;
        _type: string;
        marks: ['mark'];
        text: string;
      },
    ];
    markDefs: [];
    style: string;
  };
}
