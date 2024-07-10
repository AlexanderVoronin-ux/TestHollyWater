import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.625 23c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11Zm-1.082-7.913 2.376-.744c.292-.091.439-.137.56-.218.107-.072.199-.165.27-.271.082-.121.128-.268.22-.56l.743-2.376c.296-.945.443-1.417.327-1.736a1 1 0 0 0-.596-.596c-.319-.116-.791.031-1.736.327l-2.376.744c-.292.091-.439.137-.56.218a1.001 1.001 0 0 0-.27.271c-.082.121-.128.268-.22.56l-.743 2.376c-.296.945-.443 1.417-.327 1.736a1 1 0 0 0 .596.596c.319.116.791-.031 1.736-.327Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
