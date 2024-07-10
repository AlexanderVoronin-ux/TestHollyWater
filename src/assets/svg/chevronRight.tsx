import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={9} height={15} viewBox="0 0 9 15" fill="none" {...props}>
    <Path
      stroke="#848694"
      strokeLinecap="round"
      strokeWidth={2}
      d="m1.5 1.5 6 6-6 6"
    />
  </Svg>
);
export default SvgComponent;
