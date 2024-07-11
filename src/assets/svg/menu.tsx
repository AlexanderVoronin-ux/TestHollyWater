import * as React from 'react';
import Svg, {SvgProps, Rect} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={19} height={14} viewBox="0 0 19 14" fill="none" {...props}>
    <Rect width={18} height={2} x={0.875} y={0.5} fill="#0E0E16" rx={1} />
    <Rect width={18} height={2} x={0.875} y={6} fill="#0E0E16" rx={1} />
    <Rect width={18} height={2} x={0.875} y={11.5} fill="#0E0E16" rx={1} />
  </Svg>
);
export default SvgComponent;
