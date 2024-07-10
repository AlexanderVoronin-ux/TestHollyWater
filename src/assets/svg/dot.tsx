import * as React from 'react';
import Svg, {SvgProps, Circle} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={6} height={5} viewBox="0 0 6 5" fill="none" {...props}>
    <Circle cx={2.625} cy={2.5} r={2.5} fill={props.color} />
  </Svg>
);
export default SvgComponent;
