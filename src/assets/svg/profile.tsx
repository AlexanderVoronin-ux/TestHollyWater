import * as React from 'react';
import Svg, {SvgProps, G, Circle, Defs, ClipPath, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Circle
        cx={12.125}
        cy={23.06}
        r={8.06}
        stroke={props.color}
        strokeWidth={2}
      />
    </G>
    <Circle
      cx={12.125}
      cy={7.25}
      r={4.25}
      stroke={props.color}
      strokeWidth={2}
    />
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M2.125 14h20v8h-20z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
