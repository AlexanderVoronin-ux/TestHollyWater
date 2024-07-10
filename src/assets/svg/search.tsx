import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={27} height={28} viewBox="0 0 27 28" fill="none" {...props}>
    <Circle
      cx={11.025}
      cy={11.525}
      r={7.5}
      stroke="#0E0E16"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      transform="rotate(-45 11.025 11.525)"
    />
    <Path
      stroke="#0E0E16"
      strokeLinecap="round"
      strokeWidth={2}
      d="m16.328 16.828 4.95 4.95"
    />
  </Svg>
);
export default SvgComponent;
